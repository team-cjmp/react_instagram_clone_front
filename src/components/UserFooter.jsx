import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserFooter extends PureComponent {
  render() {
    return (
      <div>
        <Footer>
          <FlexCorporate>
            <Menu>
              <a
                href="https://about.facebook.com/meta"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>Meta</div>
              </a>
            </Menu>
            <Menu>
              <a
                href="https://about.instagram.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>소개</div>
              </a>
            </Menu>
            <Menu>
              <a
                href="https://about.instagram.com/blog/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>블로그</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /about/jobs/">
                <div>채용 정보</div>
              </a>
            </Menu>
            <Menu>
              <a
                href="https://help.instagram.com/"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>도움말</div>
              </a>
            </Menu>
            <Menu>
              <a
                href="https://developers.facebook.com/docs/instagram"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <div>API</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /legal/privacy/">
                <div>개인정보처리방침</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /legal/terms/">
                <div>약관</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /directory/profiles/">
                <div>인기 계정</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /directory/hashtags/">
                <div>해시태그</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /explore/locations/">
                <div>위치</div>
              </a>
            </Menu>
            <Menu>
              <a href="# /web/lite/">
                <div>Instagram Lite</div>
              </a>
            </Menu>
          </FlexCorporate>
          <FlexCopyright>
            <div>한국어V</div>
            <div style={{ marginLeft: '16px' }}>(c) 2021 Instagram from Meta</div>
          </FlexCopyright>
        </Footer>
      </div>
    );
  }
}

const Footer = styled.footer`
  align-items: stretch;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  flex-direction: column;
  margin-bottom: 52px;
  margin-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

const FlexCorporate = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const FlexCopyright = styled.div`
  display: flex;
  margin: 12px 0 12px 0;
  justify-content: center;
`;

const Menu = styled.div`
  margin: 0 8px 12px 8px;
  font: inherit;
  justify-content: flex-start;
  font-size: 14px;
  line-height: 18px;
`;

export default UserFooter;
