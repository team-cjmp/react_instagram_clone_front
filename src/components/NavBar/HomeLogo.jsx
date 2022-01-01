import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const Logo = styled.div``;
function HomeLogo() {
  return (
    <Wrapper>
      <Logo>
        <a href="#">로고자리</a>
      </Logo>
    </Wrapper>
  );
}

export default HomeLogo;
