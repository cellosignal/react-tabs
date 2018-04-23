import React, { Component, Fragment } from 'react';
import { func, number } from 'prop-types';
import cx from 'classnames';

export default class Tab extends Component {
  render() {
    const { title, tabIndex, isActive} = this.props;

    return (
      <li>
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

