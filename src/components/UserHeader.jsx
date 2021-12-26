import React, { PureComponent } from 'react';
import styled from 'styled-components';
import UserAvatar from './UserAvatar';

export class UserProfile extends PureComponent {
  render() {
    return (
      <div>
        <Header>
          <UserAvatar />
          <section>
            <div>profile</div>
            <div>stat</div>
            <div>bio</div>
          </section>
        </Header>
      </div>
    );
  }
}

const Header = styled.header`
  align-items: stretch;
  display: flex;
  flex-direction: rows;
  margin-bottom: 44px;
`;

export default UserProfile;
