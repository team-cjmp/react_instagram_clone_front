import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserArticle extends PureComponent {
  render() {
    return (
      <div>
        <article>
          <DivA>
            {/* row */}
            <DivRow class="v1Nh3 kIKUG  _bz0w">
              <DivColumnMR>
                <a href="/p/CVxnrSbhkck/" tabindex="0">
                  <div class="eLAPa">
                    <div class="KL4Bh">
                      <Img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                      />
                    </div>
                    <div class="_9AhH0"></div>
                  </div>
                </a>
              </DivColumnMR>
              <DivColumnMR>
                <a href="/p/CVxnrSbhkck/" tabindex="0">
                  <div class="eLAPa">
                    <div class="KL4Bh">
                      <Img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                      />
                    </div>
                    <div class="_9AhH0"></div>
                  </div>
                </a>
              </DivColumnMR>
              <DivColumn>
                <a href="/p/CVxnrSbhkck/" tabindex="0">
                  <div class="eLAPa">
                    <div class="KL4Bh">
                      <Img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                      />
                    </div>
                    <div class="_9AhH0"></div>
                  </div>
                </a>
              </DivColumn>
            </DivRow>
            {/* row */}
            <DivRow class="v1Nh3 kIKUG  _bz0w">
              <DivColumnMR>
                <a href="/p/CVxnrSbhkck/" tabindex="0">
                  <div class="eLAPa">
                    <div class="KL4Bh">
                      <Img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                      />
                    </div>
                    <div class="_9AhH0"></div>
                  </div>
                </a>
              </DivColumnMR>
              <DivColumnMR>
                <a href="/p/CVxnrSbhkck/" tabindex="0">
                  <div class="eLAPa">
                    <div class="KL4Bh">
                      <Img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                      />
                    </div>
                    <div class="_9AhH0"></div>
                  </div>
                </a>
              </DivColumnMR>
              <DivColumn>
                <a href="/p/CVxnrSbhkck/" tabindex="0">
                  <div class="eLAPa">
                    <div class="KL4Bh">
                      <Img
                        alt=""
                        src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                      />
                    </div>
                    <div class="_9AhH0"></div>
                  </div>
                </a>
              </DivColumn>
            </DivRow>
          </DivA>
        </article>
      </div>
    );
  }
}

const DivColumnMR = styled.div`
  ...DivColumn;
  margin-right: 28px;
`;

const DivColumn = styled.div`
  -webkit-box-align: stretch;
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin: 0;
  padding: 0;
  -webkit-box-flex: 1;
  flex: 1 0 0%;
  display: block;
  position: relative;
  width: 100%;
`;

const DivRow = styled.div`
  -webkit-box-align: stretch;
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  margin-bottom: 28px;
`;

const DivA = styled.div`
  -webkit-box-align: stretch;
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  flex-direction: column;
  padding-bottom: 0px;
  padding-top: 0px;
`;

const Img = styled.img`
  width: 293px;
  height: 293px;
`;

export default UserArticle;
