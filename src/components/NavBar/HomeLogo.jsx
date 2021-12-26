import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
  flex: 1;
  text-align: center;
`;
function HomeLogo() {
  return (
    <Wrapper>
      <a href="#">로고자리</a>
    </Wrapper>
  );
}

export default HomeLogo;
