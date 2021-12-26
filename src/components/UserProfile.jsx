import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserProfile extends PureComponent {
  render() {
    return (
      <div>
        <Header>
          <DivAA>
            <DivAB>
              <DivAC>
                <Button>
                  <Img
                    alt="프로필 사진 바꾸기"
                    src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                    width="150px"
                    height="150px"
                  ></Img>
                </Button>
              </DivAC>
            </DivAB>
          </DivAA>
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
const Img = styled.img`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  height: 100%;
  padding: 0;
  width: 100%;
`;

const Header = styled.header`
  align-items: stretch;
  display: flex;
  flex-direction: rows;
  margin-bottom: 44px;
`;

const DivAC = styled.div`
  background-color: #fafafa;
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
`;

const DivAB = styled.div`
  display: block;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
`;

const DivAA = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 30px;
  -webkit-flex-basis: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
`;

export default UserProfile;
