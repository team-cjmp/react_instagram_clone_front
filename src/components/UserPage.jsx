import React, { PureComponent } from 'react';
import UserProfile from './UserProfile';
import UserFooter from './UserFooter';
import UserTablist from './UserTablist';
import UserArticle from './UserArticle';

export class UserPage extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <UserProfile />
          <UserTablist />
          <UserArticle />
        </main>
        <UserFooter />
      </div>
    );
  }
}

export default UserPage;
