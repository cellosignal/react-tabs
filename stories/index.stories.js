import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tabs, Tab } from '../src';

storiesOf('Tabs', module)
  .add('standard', () => (
    <Tabs>
      <Tab title="Reports">
        <h2>You can view all available reports here</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      </Tab>
      <Tab title="Documents">
        <h2>Document Room</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        <ul>
          <li><a href="#">Document One</a></li>
          <li><a href="#">Document Two</a></li>
          <li><a href="#">Document Three</a></li>
        </ul>
      </Tab>
      <Tab title="Don't press me">
        <h2>You had to, didn't you?</h2>
      </Tab>
    </Tabs>
  ))
  .add('custom className', () => (
    <Tabs className="c-tabs">
      <Tab
        className="c-tabs__tab"
        title="tab title"
      >
        Hi
      </Tab>
      <Tab title="tab title two">Hello</Tab>
      <Tab title="tab title three">Goodbye</Tab>
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
