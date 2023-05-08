import React from 'react';

import { Header } from './Header';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Header />
      </div>
    ),
  ],
};

const Template = args => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
