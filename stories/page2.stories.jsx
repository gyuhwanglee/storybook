import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import SignIn from '../pages/SignIn';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'page/SignIn',
  component: SignIn,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = args => <SignIn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
