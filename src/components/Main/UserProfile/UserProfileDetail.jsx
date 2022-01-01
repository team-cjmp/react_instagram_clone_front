import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0%;
  flex-grow: 2;
  height: 100%;
  justify-content: space-between;
`;
const Profile1 = styled.div`
  display: flex;
  gap: 40px;
  & button {
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #0095f6;
    color: #ffffff;
    cursor: pointer;
    display: block;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 18px;
    padding: 5px 9px;
    font-weight: bold;
  }
  & h2 {
    font-weight: 100;
    line-height: 32px;
  }
`;
const Profile2 = styled.div`
  gap: 40px;
  display: flex;
`;
const Profile3 = styled.div`
  display: flex;
  gap: 40px;
`;

const UserProfileDetail = (props) => {
  const { 아이디, 게시물, 팔로워, 팔로우, 닉네임 } = props.ProfileDetail;
  return (
    <Wrapper>
      <Profile1>
        <h2>{아이디}</h2>
        <button>팔로우</button>
        <div>...</div>
      </Profile1>
      <Profile2>
        <div>게시물 {게시물}</div>
        <div>팔로워 {팔로워}</div>
        <div>팔로우 {팔로우}</div>
      </Profile2>
      <Profile3>{닉네임}</Profile3>
    </Wrapper>
  );
};

export default UserProfileDetail;
