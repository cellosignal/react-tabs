/* @flow */
import React, { Component, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Provider from '../../provider';
import { Context } from '../../contants';
import debounce from '../../helpers/debounce';

export default class Tabs extends Component {

  constructor(props) {
    super(props);
  }

  static defaultStyles = {
    tabsRow: {
      listStyleType: 'none',
    },
    wrapper: {
      fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    },
    button: {
      display: 'none'
    }
  };

  static mobileStyles = {
    button: {
      display: 'block'
    }
  }

  componentWillMount() {
    this.checkMobile(this.props);
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      debounce((e) => this.checkMobile(this.props), 100)
    );
  }

  checkMobile = (props) => {
    const { mobile } = props;
    const mobileBp = mobile ? mobile : '768';
    this.isMobile = window.matchMedia(`(max-width: ${mobileBp}px)`).matches;
  }

  // Renders the interactable buttons that sit at the top of the component
  // These can only be interacted with on tablet and desktop devices.
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
  // Instead of only rendering a single tab, we render them all and pass the
  // hidden attribute to control its visibility.
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
                <button
                  className="sig-tabs__toggle"
                  style={{...this.isMobile ? Tabs.mobileStyles.button : Tabs.defaultStyles.button}}
                  onClick={() => context.handleClick(tabIndex)}
                >
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
          <div
            className={['sig-tabs', this.props.className || ''].join(' ')}
            style={{...Tabs.defaultStyles.wrapper, ...this.props.style}}
          >
            <ul style={{...Tabs.defaultStyles.tabsRow}}>
              {this.renderTabs()}
            </ul>
            <div>
              {this.renderActiveTabs()}
            </div>
          </div>
        </Fragment>
      </Provider>
    );
  }
}
