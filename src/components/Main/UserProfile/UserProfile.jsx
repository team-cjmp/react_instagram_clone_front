import React from 'react';
import styled from 'styled-components';
import UserProfileDetail from './UserProfileDetail';
import UserProfilePhoto from './UserProfilePhoto';
const Wrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 935px;
  height: 150px;
  flex-direction: row;
  gap: 10px;
  width: calc(100% - 40px);
  align-items: center;
  justify-content: center;
  margin: 0 0 40px;
`;
const ProfilePhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100%;
  margin-right: 30px;
  flex-basis: 0;
`;
const ProfileUserWrapper = styled.div`
  display: flex;
  flex-grow: 2;

  height: 100%;
`;
const UserProfile = (props) => {
  return (
    <Wrapper>
      <ProfilePhotoWrapper>
        <UserProfilePhoto Photo={props.Dummy.프로필사진} AltProps={props.Dummy.alt} />
      </ProfilePhotoWrapper>
      <ProfileUserWrapper>
        <UserProfileDetail ProfileDetail={props.Dummy} />
      </ProfileUserWrapper>
    </Wrapper>
  );
};

export default UserProfile;
