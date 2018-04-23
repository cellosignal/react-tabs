import React, { Component } from 'react';
import { Context } from './contants';

// The provider utilises the React 16.3 Context API to control
// the state of the component, including the overarching functions.
export default class Provider extends Component {
  state = {
    activeTabIndex: 0
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          handleClick: (tabIndex) => this.setState({
            activeTabIndex: tabIndex,
          })
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
