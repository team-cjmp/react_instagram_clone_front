import React from 'react';
import styled from 'styled-components';
import HomeLogo from './HomeLogo';
import NavSearch from './NavSearch';
import NavIcons from './NavIcons';

function NavBar() {
  const NavWrapper = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
    border-bottom: 1px solid black;
    padding-bottom: 1px;
    position: relative;
    clear: both;
  `;

  return (
    <>
      <NavWrapper>
        <HomeLogo />
        <NavSearch />
        <NavIcons />
      </NavWrapper>
    </>
  );
}

export default NavBar;
