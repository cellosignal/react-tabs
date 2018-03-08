import React, { PureComponent, Fragment } from 'react';
import { func, number } from 'prop-types';
import cx from 'classnames';

export default class Tab extends PureComponent {

  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick(this.props.tabIndex);
  }

  render() {
    const { title, tabIndex , isActive} = this.props;

    return (
      <li>
        <a onClick={e => this.handleClick(e)}>{title}</a>
      </li>
    );
  }
}

Tab.propTypes = {
  onClick: func.isRequired,
  title: func.isRequired,
  tabIndex: number.isRequired,
};

