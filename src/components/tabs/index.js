import React, { Component, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Provider from '../../provider';
import { Context } from '../../contants';

export default class Tabs extends Component {
  // Renders the interactable buttons that sit at the top of the component
  // These can only be interacted with on tablet and desktop devices.

  // TODO:
  // - Accessibility
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

  // This renders the active tab to be displayed. On desktop devices the
  // button is hidden, the user instead interacts with the tabs at the
  // top of the component (`renderTabs()`)

  // TODO:
  // - Explore the mobile functionality, I pressume all tabs can be open
  //   at the same time since it becomes an accordion?
  // - Accessibility
  renderActiveTabs = () => {
    const { children } = this.props;

    return React.Children.map(children, (child, index) => {
      return (
        <Context.Consumer>
        {
          (context) => {
            const tabIndex = context.state.activeTabIndex;
            return (
              <div hidden={tabIndex !== index}>
                <button onClick={() => context.handleClick(tabIndex)}>
                  {children[tabIndex].props.title}
                </button>
                {
                  children[tabIndex] &&
                  children[tabIndex].props.children
                }
              </div>
            )
          }
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
