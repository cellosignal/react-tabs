import React, { Component, Fragment } from 'react';
import { func, number } from 'prop-types';
import cx from 'classnames';

export default class Tab extends Component {
  static defaultStyles = {
    tab: {
      display: 'inline-block',
      padding: '0 15px',
    }
  };

  render() {
    const { title, tabIndex, isActive} = this.props;

    return (
      <li
        style={{...Tab.defaultStyles.tab, ...this.props.style}}
        className={['sig-tab', this.props.className || ''].join(' ')}
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

