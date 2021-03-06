import React from 'react';
import styled from 'styled-components';
import { Direct, Feed, Find, Home, New } from '../Icon';
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  white-space: nowrap;
  padding-left: 2em;
  gap: 10px;
`;
const TestProfile = styled.div`
  border-radius: 50%;
  border: 1px solid black;
  width: 1.5em;
  height: 1.5em;
  overflow: hidden;
`;
function NavIcons() {
  return (
    <Wrapper>
      <Home />
      <Direct />
      <Find />
      <New />
      <Feed />
      <TestProfile>사진</TestProfile>
    </Wrapper>
  );
}

export default NavIcons;
