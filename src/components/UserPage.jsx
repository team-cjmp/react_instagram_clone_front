import React, { PureComponent } from 'react';

export class UserPage extends PureComponent {
  render() {
    return (
      <main>
        <div>
          <div>avatar</div>
          <section>
            <div>profile</div>
            <div>stat</div>
            <div>bio</div>
          </section>
        </div>
        <div>
          <div>게시물</div>
          <div>저장됨</div>
          <div>태그됨</div>
        </div>
        <div>
          <div>본문1</div>
          <div>본문2</div>
          <div>본문3</div>
        </div>
      </main>
    );
  }
}

export default UserPage;
