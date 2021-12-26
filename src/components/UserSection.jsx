import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserSection extends PureComponent {
  render() {
    return (
      <Section>
        <DivAA>
          <H2>Username</H2>
          <DivAB>
            <DivAC>
              <A href="/accounts/edit/" tabindex="0">
                프로필 편집
              </A>
            </DivAC>
          </DivAB>
          <DivBA>
            <Button type="button">
              <div>
                <svg
                  aria-label="옵션"
                  class="_8-yf5 "
                  color="#262626"
                  fill="#262626"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </div>
            </Button>
          </DivBA>
        </DivAA>
        <Ul>
          <Li>
            <SpanA>
              게시물<SpanB>10</SpanB>
            </SpanA>
          </Li>
          <Li>
            <span>
              팔로워<span>22</span>
            </span>
          </Li>
          <Li>
            <span>
              팔로우<span>38</span>
            </span>
          </Li>
        </Ul>
        <DivCA>
          <H1>bio</H1>
          <br />
        </DivCA>
      </Section>
    );
  }
}

const H1 = styled.h1`
  margin: 0px;
  padding: 0px;
`;

const DivCA = styled.div`
  font-size: 16px;
  line-height: 24px;
  word-wrap: break-word;
  display: block;
`;

const SpanB = styled.span`
  color: rgba(var(--i1d, 38, 38, 38), 1);
  font-weight: 600;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const SpanA = styled.span`
  color: inherit;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
`;

const Li = styled.li`
  margin-left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 16px;
  margin-right: 40px;
  font: inherit;
  vertical-align: baseline;
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const Ul = styled.ul`
  margin-bottom: 20px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  list-style: none;
  padding-left: 0px;
`;

const Button = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background: 0 0;
  border: 0;
  cursor: pointer;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 8px;
  padding-inline-start: 0px;
`;

const DivBA = styled.div`
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-shrink: 0;
  margin-left: 5px;
`;

const A = styled.a`
  user-select: auto;
  appearance: none;
  background: 0 0;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  width: auto;
`;

const DivAC = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: stretch;
  align-items: stretch;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: relative;
`;

const DivAB = styled.div`
  -webkit-box-flex: 0;
  -webkit-box-align: stretch;
  -webkit-box-pack: start;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  font-size: 28px;
  line-height: 32px;
  margin: -5px 0 -6px;
  font-weight: 300;
  color: rgba(var(--i1d, 38, 38, 38), 1);
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DivAA = styled.div`
  -webkit-box-align: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  align-items: center;
  align-items: stretch;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  min-width: 0;
`;

const Section = styled.section`
  color: rgba(var(--i1d, 38, 38, 38), 1);
  flex-basis: 30px;
  -webkit-box-flex: 2;
  flex-grow: 2;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default UserSection;
