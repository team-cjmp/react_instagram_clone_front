import React from 'react';
import styled from 'styled-components';
import Container from '../../../UI/Container';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  min-width: 0%;
  flex-grow: 0;
  justify-content: center;
  align-items: stretch;
`;
const Profile1 = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
  justify-content: space-around;
  item-aligns: center;
  & button {
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #0095f6;
    color: #ffffff;
    cursor: point;
    display: block;
    text-align: center;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 18px;
    padding: 5px 9px;
    font-weight: bold;
  }
`;
const Profile2 = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
  justify-content: space-around;
  item-aligns: center;
`;
const Profile3 = styled.div`
  display: flex;
  gap: 30px;
  flex: 1;
  justify-content: space-around;
  item-aligns: center;
`;

const UserProfileDetail = (props) => {
  const { 아이디, 게시물, 팔로워, 팔로우, 닉네임 } = props.ProfileDetail;
  return (
    <Container>
      <Wrapper>
        <Profile1>
          <span>{아이디}</span>
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
    </Container>
  );
};

export default UserProfileDetail;
