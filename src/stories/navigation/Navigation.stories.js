import React from 'react';
import { HomeIcon } from './HomeIcon';
import { DirectIcon } from './DirectIcon';
import { FeedIcon } from './FeedIcon';
import { FindIcon } from './FindIcon';
import { NewIcon } from './NewIcon';

export default {
  component: HomeIcon,
  title: 'Navigator',
};

export const homeIcon = () => <HomeIcon />;
export const directIcon = () => <DirectIcon />;
export const feedIcon = () => <FeedIcon />;
export const findIcon = () => <FindIcon />;
export const newIcon = () => <NewIcon />;
