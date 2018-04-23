import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tabs, Tab } from '../src';

storiesOf('Tabs', module)
  .add('standard', () => (
    <Tabs>
      <Tab title="tab title">Hi</Tab>
      <Tab title="tab title two">Hello</Tab>
      <Tab title="tab title three">Goodbye</Tab>
    </Tabs>
  ));

storiesOf('Tab', module)
  .add('standard', () => <Tab>hi</Tab>);
