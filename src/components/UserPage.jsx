import React, { PureComponent } from 'react';
import UserProfile from './UserProfile';

export class UserPage extends PureComponent {
  render() {
    return (
      <div>
        <main>
          <UserProfile />
          <div>
            <div>게시물</div>
            <div>저장됨</div>
            <div>태그됨</div>
          </div>
          <div>
            <article>
              <div>본문1</div>
              <div>본문2</div>
              <div>본문3</div>
              <div>본문4</div>
              <div>본문5</div>
              <div>본문6</div>
            </article>
          </div>
        </main>
        <footer>
          <div>
            <div>Meta</div>
            <div>소개</div>
            <div>블로그</div>
            <div>채용 정보</div>
            <div>도움말</div>
            <div>API</div>
            <div>개인정보처리방침</div>
            <div>약관</div>
            <div>인기 계정</div>
            <div>해시태그</div>
            <div>위치</div>
            <div>Instagram Lite</div>
          </div>
          <div>
            <div>한국어V</div>
            <div>(c) 2021 Instagram from Meta</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default UserPage;
