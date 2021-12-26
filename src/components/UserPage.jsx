import React, { PureComponent } from 'react';
import UserFooter from './UserFooter';
import UserMain from './UserMain';

export class UserPage extends PureComponent {
  render() {
    return (
      <div>
        <UserMain />
        <UserFooter />
      </div>
    );
  }
}

export default UserPage;
