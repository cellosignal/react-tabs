import React, { Component } from 'react';
import { Context } from './contants';

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
