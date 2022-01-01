import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserArticle from '../UserArticle';
import TapMenu from './TapMenu/TapMenu';
import UserProfile from './UserProfile/UserProfile';
const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 935px;
  width: 100%;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const MainPage = () => {
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
      <TapMenu />
      <article>
        <Routes>
          <Route patrh="/" element={<UserArticle />} />
          <Route patrh="/channel" element={<UserArticle />} />
          <Route patrh="/tagged" element={<UserArticle />} />
        </Routes>
      </article>
    </Container>
  );
};

export default MainPage;
