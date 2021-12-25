import React, { PureComponent } from 'react';
import styled from 'styled-components';
import UserProfile from './UserProfile';
import UserTablist from './UserTablist';
import UserArticle from './UserArticle';

export class UserMain extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <UserProfile />
          <UserTablist />
          <UserArticle />
        </main>
      </div>
    );
  }
}

export default UserMain;
