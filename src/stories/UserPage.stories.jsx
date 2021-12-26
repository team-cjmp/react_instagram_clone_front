import React from 'react';

import { UserPage } from './../components/UserPage';

export default {
  title: 'UserPage',
  component: UserPage,
  argTypes: {},
};

const Template = (args) => <UserPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
