import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default Container;
