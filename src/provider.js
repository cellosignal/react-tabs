import React, { Component } from 'react';
import { Context } from './constants';
import debounce from './helpers/debounce';

// The provider uses the React 16.3 Context API to control
// the state of the component, including the overarching functions.
// Both the state and the necessary functions to control the component are
// passed down via the <Provider />
export default class Provider extends Component {
  state = {
    activeTabIndex: 0,
    prevActiveTabIndex: null,
    isMobile: false,
  };

  componentDidMount() {
    this.panels = document.querySelectorAll('[id^="sigTabs"]');
    this.tabs = document.querySelectorAll('a');

    this.checkMobile();

    window.addEventListener(
      'resize',
      debounce(() => this.checkMobile(this.props), 66)
    );
  }

  checkMobile = () => {
    const { mobileBreakpoint } = this.props;
    const mobileBp = mobileBreakpoint ? mobileBreakpoint : 768;
    this.setState({
      isMobile: window.matchMedia(`(max-width: ${mobileBp}px)`).matches
    });

    if (!this.state.isMobile && this.state.activeTabIndex === null) {
      this.setState(prevState => ({
        activeTabIndex: prevState.prevActiveTabIndex,
      }));
    }
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleMobileClick: (tabIndex) => this.setState(prevState => ({
            activeTabIndex: prevState.activeTabIndex === tabIndex ? null : tabIndex,
            prevActiveTabIndex: prevState.activeTabIndex
          })),
          handleKeyPress: (e) => {
            const { activeTabIndex } = this.state;

            const dir = e.which === 37 ? 'left' : e.which === 39 ? 'right' : e.which === 40 ? 'down' : null;

            if (dir !== null) {
              e.preventDefault();
              let moveBy = 0;
              const count = this.panels.length - 1;

              switch (dir) {
                case 'left':
                  moveBy = activeTabIndex > 0 ? activeTabIndex - 1 : count;
                  break;

                default:
                  moveBy = activeTabIndex < count ? activeTabIndex + 1 : 0;
                  break;
              }

              this.tabs[moveBy].focus();

              dir === 'down' ? this.panels[activeTabIndex].focus() : this.setState({ activeTabIndex: moveBy });
            }
          },
          handleClick: (tabIndex, e) => {
            e.preventDefault();

            this.setState({
              activeTabIndex: tabIndex,
            });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
