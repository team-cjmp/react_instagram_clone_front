import React from 'react';
import styled from 'styled-components';
const ProfilePhoto = styled.div`
  display: flex;
`;

const IMG = styled.img`
  display: flex;
  background-color: #fafafa;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  height: 100%;
  margin-right: 30px;
  overflow: hidden;
  position: relative;
  -webkit-box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  border-radius: 50%;
`;

const UserProfilePhoto = ({ Photo, AltProps }) => {
  return (
    <ProfilePhoto>
      <IMG src={Photo} width={'150px'} height={'150px'} alt={AltProps} />
    </ProfilePhoto>
  );
};

export default UserProfilePhoto;
