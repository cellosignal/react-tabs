import React, { Component, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Provider from '../../provider';
import { Context } from '../../contants';

export default class Tabs extends Component {
  renderTabs = () => {
    const { children } = this.props;

    return React.Children.map(children, (child, index) => (
      <Context.Consumer>
       {(context) => React.cloneElement(child, {
          onClick: context.handleClick,
          tabIndex: index,
          isActive: index === context.state.activeTab,
       })}
      </Context.Consumer>
    ));
  }

  renderActiveTabs = () => {
    const { children } = this.props;

    return React.Children.map(children, (child, index) => {
      return (
        <Context.Consumer>
        {
          (context) => (
            <div hidden={context.state.activeTabIndex !== index}>
              {
                children[context.state.activeTabIndex] &&
                children[context.state.activeTabIndex].props.children
              }
            </div>
          )
        }
        </Context.Consumer>
      );
    });
  }

  render() {
    return (
      <Provider>
        <Fragment>
          <ul>
            {this.renderTabs()}
          </ul>
          <div>
            {this.renderActiveTabs()}
          </div>
        </Fragment>
      </Provider>
    );
  }
}
