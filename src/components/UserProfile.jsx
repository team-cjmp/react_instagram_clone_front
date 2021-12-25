import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserProfile extends PureComponent {
  render() {
    return (
      <div>
        <Header>
          <DivAvatar>
            <div>avatar</div>
          </DivAvatar>
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

const DivAvatar = styled.div`
  margin-right: 30px;
  height: 150px;
  width: 150px;
`;

export default UserProfile;
