/* @flow */
import React, { Component, Fragment } from 'react';
import { arrayOf, shape, string } from 'prop-types';
import Provider from '../../provider';
import { Context } from '../../constants';
import debounce from '../../helpers/debounce';

export default class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobile: false,
      prevSize: '',
    }
  }

  static defaultStyles = {
    tabsRow: {
      listStyleType: 'none',
      paddingLeft: 0,
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

  static activeStyles = {
    maxHeight: '9999px'
  }

  static disabledStyles = {
    maxHeight: 0,
    overflow: 'hidden'
  }

  componentWillMount() {
    this.checkMobile(this.props);
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      debounce(() => this.checkMobile(this.props), 66)
    );
  }

  // If user goes from mobile with all tabs closed we want to reset all tabs
  checkMobile = (props) => {
    const { mobile } = props;
    const mobileBp = mobile ? mobile : '768';
    this.setState({
      isMobile: window.matchMedia(`(max-width: ${mobileBp}px)`).matches
    });
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
          isActive: index === context.state.activeTabIndex,
          handleKeyPress: context.handleKeyPress,
       })}
      </Context.Consumer>
    ));
  }

  // This renders the active tab to be displayed. On desktop devices the button is hidden, the
  // user instead interacts with the tabs at the top of the component (`renderTabs()`)
  // Instead of only rendering a single tab, we render them all and pass the hidden attribute
  // to control its visibility when on Desktop. When on mobile however we remove the hidden attribute
  // and default to using classes for styling.
  renderActiveTabs = () => {
    const { children } = this.props;

    return React.Children.map(children, (child, index) => (
      <Context.Consumer>
      {
        (context) => {
          const tabIndex = context.state.activeTabIndex;
          const active = tabIndex === index;
          return (
            <section
              hidden={!this.state.isMobile && !active}
              role="tab"
              tabIndex="-1"
              id={`sigTabs${index}`}
            >
              <button
                className="sig-tabs__toggle"
                style={{...this.state.isMobile ? Tabs.mobileStyles.button : Tabs.defaultStyles.button}}
                onClick={() => context.handleMobileClick(index)}
              >
                {children[index].props.title}
              </button>
              <div style={active ? Tabs.activeStyles : Tabs.disabledStyles}>
              {
                children[tabIndex] &&
                children[tabIndex].props.children
              }
              </div>
            </section>
          )
        }
      }
      </Context.Consumer>
    )); 
  }

  render() {
    return (
      <Provider>
        <Fragment>
          <div
            className={['sig-tabs', this.props.className || ''].join(' ')}
            style={{...Tabs.defaultStyles.wrapper, ...this.props.style}}
          >
          {
            !this.state.isMobile &&
            <ul role="tablist" style={{...Tabs.defaultStyles.tabsRow}} className="sig-tabs">
              {this.renderTabs()}
            </ul>
          }
            <Fragment>
              {this.renderActiveTabs()}
            </Fragment>
          </div>
        </Fragment>
      </Provider>
    );
  }
}
