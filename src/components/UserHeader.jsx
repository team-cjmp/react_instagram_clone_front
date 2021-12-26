import React, { PureComponent } from 'react';
import styled from 'styled-components';
import UserAvatar from './UserAvatar';
import UserSection from './UserSection';

export class UserHeader extends PureComponent {
  render() {
    return (
      <div>
        <Header>
          <UserAvatar />
          <UserSection />
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

export default UserHeader;
