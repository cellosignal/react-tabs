import React, { Component } from 'react';
import { func, number } from 'prop-types';

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
        role="presentation"
      >
        <a
          onClick={(e) => this.props.onClick(tabIndex, e)}
          aria-selected={isActive}
          href="#"
          onKeyDown={e => this.props.handleKeyPress(e)}
          tabIndex={!isActive ? "-1" : "0"}
        >
        {title}
        </a>
      </li>
    );
  }
}

Tab.propTypes = {
  onClick: func.isRequired,
  title: func.isRequired,
  tabIndex: number.isRequired,
};

