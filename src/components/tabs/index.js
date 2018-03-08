import React, { PureComponent, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';

export default class Tabs extends PureComponent {
  state = {
    activeTab: 0,
  }

  handleClick = (tabIndex) => {
    this.setState({
      activeTab: tabIndex,
    });
  }

  renderTabs = () => {
    const { children } = this.props;
    const { activeTab } = this.state;

    return React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        onClick: this.handleClick,
        tabIndex: index,
        isActive: index === activeTab,
      });
    });
  }

  renderActiveTabs = () => {
    const { children } = this.props;
    const { activeTab } = this.state;

    return React.Children.map(children, (child) => {
      return (
        <Fragment>
          <button>Press Me!</button>
          {
            children[activeTab] &&
            children[activeTab].props.children
          }
        </Fragment>
      );
    });

    // if (children[activeTab]) {
    //   return (
    //     <Fragment>
    //       {children[activeTab].props.children}
    //     </Fragment>
    //   );
    // }

    return false;
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderTabs()}
        </ul>
        <div>
          {this.renderActiveTabs()}
        </div>
      </div>
    );
  }
}
