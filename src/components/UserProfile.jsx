import React, { PureComponent } from 'react';

export class UserProfile extends PureComponent {
  render() {
    return (
      <div>
        <header>
          <div>avatar</div>
          <section>
            <div>profile</div>
            <div>stat</div>
            <div>bio</div>
          </section>
        </header>
      </div>
    );
  }
}

export default UserProfile;
