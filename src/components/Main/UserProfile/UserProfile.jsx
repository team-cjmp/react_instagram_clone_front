import React from 'react';
import styled from 'styled-components';
import Container from './../../../UI/Container';
import UserProfilePhoto from './UserProfilePhoto';
import UserProfileDetail from './UserProfileDetail';
const Wrapper = styled.div`
  display: flex;
  max-width: 935px;
  height: 150px;
  flex-direction: row;
  gap: 10px;
  width: calc(100% - 40px);
  align-items: center;
  justify-content: center;
`;
const ProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;
const ProfileUserWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const UserProfile = (props) => {
  return (
    <Container>
      <Wrapper>
        <ProfilePhotoWrapper>
          <UserProfilePhoto Photo={props.Dummy.프로필사진} AltProps={props.Dummy.alt} />
        </ProfilePhotoWrapper>
        <ProfileUserWrapper>
          <UserProfileDetail ProfileDetail={props.Dummy} />
        </ProfileUserWrapper>
      </Wrapper>
    </Container>
  );
};

export default UserProfile;
