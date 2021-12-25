import React from 'react';

import { UserPage } from './../components/UserPage';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UserPage',
  component: UserPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <UserPage {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button2',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button2',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button2',
};
