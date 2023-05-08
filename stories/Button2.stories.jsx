import React from 'react';

import Button from '../components/Button';
import theme from '../styles/Theme';
import { ThemeProvider } from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Atomics/Button',
  component: Button,
  // argTypes: {
  //   name: { control: 'string' },
  // },
  args: {
    //👇 Now all Button stories will be primary.
    isCheck: true,
  },
  parameters: {
    layout: 'centered', //위치 설정
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: 'buttonPrimaryLfixed',
  buttonName: 'button',
};
export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  name: 'buttonPrimarySmall',
  buttonName: 'button',
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
  name: 'buttonDangerSmall',
  buttonName: 'button',
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  name: 'buttonPrimaryBig',
  buttonName: 'button',
};

export const DangerBig = Template.bind({});
DangerBig.args = {
  name: 'buttonDangerBig',
  buttonName: 'button',
};

export const GhostGraySmall = Template.bind({});
GhostGraySmall.args = {
  name: 'buttonGhostGraySmall',
  buttonName: 'button',
};

export const GhostGrayBig = Template.bind({});
GhostGrayBig.args = {
  name: 'buttonGhostGrayBig',
  buttonName: 'button',
};

export const GhostPurpleSmall = Template.bind({});
GhostPurpleSmall.args = {
  name: 'buttonGhostPurpleSmall',
  buttonName: 'button',
};

export const GhostPurpleBig = Template.bind({});
GhostPurpleBig.args = {
  name: 'buttonGhostPurpleBig',
  buttonName: 'button',
};

export const LeftIconPrimarySmall = Template.bind({});
LeftIconPrimarySmall.args = {
  name: 'buttonPrimarySmall',
  buttonName: '초대하기',
  IconDirection: 'Left',
  iconUrl: '/img/people.svg',
};

export const RightIconPrimarySmall = Template.bind({});
RightIconPrimarySmall.args = {
  name: 'buttonPrimarySmall',
  buttonName: '새로만들기',
  IconDirection: 'Right',
  iconUrl: '/img/whiteArrow.svg',
};
