import React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs, Tab } from '../src';
import './example.css';

storiesOf('Tabs', module)
  .add('standard', () => (
    <Tabs>
      <Tab title="Why Tabs">
        <h2>Making the case for tabs</h2>
        <p>Sometimes you just want to show more information, yet hide it at the same time. Simples.</p>
      </Tab>
      <Tab title="How they work">
        <h2>Overview</h2>
        <p>This component renders <strong>tabs</strong> on desktop and an <strong>accordion</strong> on mobile. The styling is up to you, we don't bundle any stylesheets, instead we use good old CSS-in-JS to give some kind of stucture. There are a number of properties you can pass in that control the classnames.</p>

        <h2>Technical</h2>
        <p>We're using React's Context API here, this means that we have a minimum requirement of React 16.3. The Context API is what's controlling the state of the tabs, accordions and the mobile state at all times</p>
      </Tab>
      <Tab title="Don't press me">
        <iframe src="https://giphy.com/embed/H1UqQRwnz9Z28" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p>You wot m8?</p>
      </Tab>
    </Tabs>
  ))
  .add('custom className', () => (
    <Tabs className="c-tabs" iconColor="white">
      <Tab title="Custom Styles">
        <p>All we've done here is add the class of <i>c-tabs</i> to the <i>Tabs</i> component and then imported the <i>.css</i> file into storybook.</p>
      </Tab>
      <Tab title="By Adding"><p>Hello</p></Tab>
      <Tab title="Custom ClassNames"><p>Goodbye</p></Tab>
    </Tabs>
  ))
  .add('custom styles', () => (
    <Tabs style={{ backgroundColor: 'ghostwhite', color: 'darkslategray' }}>
      <Tab
        title="tab title"
        style={{ padding: '20px' }}
      >
        Hi
      </Tab>
      <Tab
        title="tab title two"
        style={{ padding: '20px' }}
      >
        Hello
      </Tab>
      <Tab
        title="tab title three"
        style={{ padding: '20px' }}
      >
        Goodbye
      </Tab>
    </Tabs>
  ))

storiesOf('Tab', module)
  .add('standard', () => <Tab>hi</Tab>);
