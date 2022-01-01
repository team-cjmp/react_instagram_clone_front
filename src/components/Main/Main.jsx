import React from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 935px;
  height: 150px;
  flex-direction: column;
  width: calc(100% - 40px);
  align-items: center;
  justify-content: center;
  padding: 30px 20px 0;
  margin: 0 240px 30px;
  box-sizing: content-box;
`;
const Main = () => {
  const DummyProfileData = {
    id: 1,
    아이디: 'USER1',
    게시물: 1,
    팔로워: 1,
    팔로우: 1,
    닉네임: '닉네임',
    프로필사진: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg',
    alt: '',
  };

  return (
    <Container>
      <UserProfile Dummy={DummyProfileData} />
      <hr />
      <div>탭메뉴</div>
      <div>게시물</div>
    </Container>
  );
};

export default Main;
