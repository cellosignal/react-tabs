import React, { Component } from 'react';
import { Context } from './constants';

// The provider uses the React 16.3 Context API to control
// the state of the component, including the overarching functions.
export default class Provider extends Component {
  state = {
    activeTabIndex: 0
  };

  componentDidMount() {
    this.panels = document.querySelectorAll('[id^="sigTabs"]');
    this.tabs = document.querySelectorAll('a');
  }

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleMobileClick: (tabIndex) => this.setState( prevState => ({
            activeTabIndex: prevState.activeTabIndex === tabIndex ? null : tabIndex,
          })),
          handleKeyPress: (e) => {
            const { activeTabIndex } = this.state;
        
            let dir = e.which === 37 ? 'left' : e.which === 39 ? 'right' : e.which === 40 ? 'down' : null;

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
