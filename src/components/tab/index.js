import React, { Component } from 'react';
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

  // componentDidMount() {
  //   this.panels = document.querySelectorAll('[id^="sigTabs"');
  // }

  // handleKeyPress = (e) => {
  //   const { tabIndex } = this.props;

  //   // Work out which key the user is pressing and
  //   // Calculate the new tab's index where appropriate
  //   let dir = e.which === 37 ? tabIndex - 1 : e.which === 39 ? tabIndex + 1 : e.which === 40 ? 'down' : null;


  //   if (dir !== null) {
  //     e.preventDefault();
  //     // If the down key is pressed, move focus to the open panel,
  //     // otherwise switch to the adjacent tab
  //     dir === 'down' ? this.panels[tabIndex].focus() : dir ? this.props.onClick(dir, e) : void 0;
  //   }
  // }


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

