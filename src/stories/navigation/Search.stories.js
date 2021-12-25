import React from 'react';
import Search from './Search';

export default {
  component: Search,
  title: 'Search',
};

const SearchBar = (args) => <Search {...args} />;
export const Default = SearchBar.bind({});
Default.args = {
  search: {
    id: '1',
    title: 'Search Bar',
    state: 'Search_',
    updateAt: new Date(),
  },
};
