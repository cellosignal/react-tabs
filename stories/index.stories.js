import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Tabs, Tab } from '../src';

storiesOf('Tabs', module)
  .add('standard', () => <Tabs>hi</Tabs>);


storiesOf('Tab', module)
  .add('standard', () => <Tab>hi</Tab>);
