import React, { Component } from 'react';
import { Context } from './constants';

// The provider uses the React 16.3 Context API to control
// the state of the component, including the overarching functions.
export default class Provider extends Component {
  state = {
    activeTabIndex: 0
  };

  componentDidMount() {
    this.panels = document.querySelectorAll('[id^="sigTabs"');
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
        
            // Work out which key the user is pressing and
            // Calculate the new tab's index where appropriate
            let dir = e.which === 37 ? activeTabIndex - 1 : e.which === 39 ? activeTabIndex + 1 : e.which === 40 ? 'down' : null;
                
            if (dir !== null) {
              e.preventDefault();
              // If the down key is pressed, move focus to the open panel,
              // otherwise switch to the adjacent tab
              dir === 'down' ? this.panels[activeTabIndex].focus() : dir ? this.setState({activeTabIndex: dir}) : void 0;
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
