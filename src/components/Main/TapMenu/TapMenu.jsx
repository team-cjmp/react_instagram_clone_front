import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListIcon, SaveIcon, TagIcon } from '../../Icon';
import './TapMenu.scss';
const TapMenu = (props) => {
  const TAP_ITEMS = [
    {
      name: '게시물',
      path: '/',
      icon: <ListIcon />,
    },

    {
      name: '동영상',
      path: '/channel',
      icon: <SaveIcon />,
    },

    {
      name: '태그됨',
      path: '/tagged',
      icon: <TagIcon />,
    },
  ];

  return (
    <div className="Taps">
      <ul>
        {TAP_ITEMS.map((menu, index) => (
          <li key={index}>
            <NavLink
              to={menu.path}
              className={({ isActive }) => (isActive ? 'is_active' : 'TapItems')}
            >
              {menu.icon}
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TapMenu;
