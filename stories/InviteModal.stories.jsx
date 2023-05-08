import React from 'react';
import { within, userEvent } from '@storybook/testing-library';

import InviteModal from '../components/Invite/InviteModal';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'component/InviteModal',
  component: InviteModal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = args => <InviteModal {...args} />;

export const InviteModalPage = Template.bind({});
InviteModalPage.args = {
  isInviteModal: true,
};
