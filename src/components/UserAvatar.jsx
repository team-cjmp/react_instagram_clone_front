import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserAvatar extends PureComponent {
  render() {
    return (
      <DivA>
        <DivB>
          <DivC>
            <Button>
              <Img
                alt="프로필 사진 바꾸기"
                src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                width="150px"
                height="150px"
              ></Img>
            </Button>
          </DivC>
        </DivB>
      </DivA>
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

const DivC = styled.div`
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

const DivB = styled.div`
  display: block;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
`;

const DivA = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 30px;
  -webkit-flex-basis: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
`;

export default UserAvatar;
