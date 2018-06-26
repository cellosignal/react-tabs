import React, { Component, Fragment } from 'react';
import { func, number } from 'prop-types';
import cx from 'classnames';

export default class Tab extends Component {
  static defaultStyles = {
    tab: {
      display: 'inline-block',
      padding: '10px 15px',
    },
    active: {
      borderBottom: '2px solid grey',
    }
  };

  render() {
    const { title, tabIndex, isActive } = this.props;

    return (
      <li
        style={{...Tab.defaultStyles.tab, ...isActive && Tab.defaultStyles.active, ...this.props.style}}
        className={['sig-tab', isActive ? 'sig-tab__active' : '', this.props.className || ''].join(' ')}
      >
        <a onClick={() => this.props.onClick(tabIndex)}>{title}</a>
      </li>
    );
  }
}

Tab.propTypes = {
  onClick: func.isRequired,
  title: func.isRequired,
  tabIndex: number.isRequired,
};

