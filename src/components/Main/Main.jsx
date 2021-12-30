import React from 'react';
import Container from '../../UI/Container';
import { UserMain } from '../UserMain';

const Main = () => {
  return (
    <Container>
      <UserMain />
      <div>탭메뉴</div>
      <div>게시물</div>
    </Container>
  );
};

export default Main;
