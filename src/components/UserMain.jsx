import React, { PureComponent } from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import UserTablist from './UserTablist';
import UserArticle from './UserArticle';

export class UserMain extends PureComponent {
  render() {
    return (
      <div>
        <Main>
          <DivMain>
            <UserProfile />
            <UserTablist />
            <UserArticle />
          </DivMain>
        </Main>
      </div>
    );
  }
}

const DivMain = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  margin: 0 auto 30px;
  margin-bottom: 0;
  max-width: 935px;
  padding: 30px 20px 0 20px;
  width: calc(100% - 40px);
`;

const Main = styled.main`
  align-items: stretch;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
`;

export default UserMain;
