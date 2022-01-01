import React from 'react';
import styled from 'styled-components';
const ProfilePhoto = styled.div`
  display: flex;
  background-color: #fafafa;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 50%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
`;
const UserProfilePhoto = ({ Photo, AltProps }) => {
  return (
    <ProfilePhoto>
      <img src={Photo} width={'150px'} height={'150px'} alt={AltProps} />
    </ProfilePhoto>
  );
};

export default UserProfilePhoto;
