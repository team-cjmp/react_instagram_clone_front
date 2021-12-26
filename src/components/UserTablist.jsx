import React, { PureComponent } from 'react';
import styled from 'styled-components';

export class UserTablist extends PureComponent {
  render() {
    return (
      <Div>
        <A aria-selected="true" role="tab" href="/username/" tabindex="0">
          <span>
            <svg
              aria-label=""
              class="_8-yf5 "
              color="#262626"
              fill="#262626"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <rect
                fill="none"
                height="18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                width="18"
                x="3"
                y="3"
              ></rect>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="9.015"
                x2="9.015"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="14.985"
                x2="14.985"
                y1="3"
                y2="21"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="9.015"
                y2="9.015"
              ></line>
              <line
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                x1="21"
                x2="3"
                y1="14.985"
                y2="14.985"
              ></line>
            </svg>
            <Span>게시물</Span>
          </span>
        </A>
        <A aria-selected="false" role="tab" href="/username/saved/" tabindex="0">
          <div>
            <svg
              aria-label=""
              class="_8-yf5 "
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <polygon
                fill="none"
                points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></polygon>
            </svg>
            <Span>저장됨</Span>
          </div>
        </A>
        <AB aria-selected="false" role="tab" href="/username/tagged/" tabindex="0">
          <span>
            <svg
              aria-label=""
              class="_8-yf5 "
              color="#8e8e8e"
              fill="#8e8e8e"
              height="12"
              role="img"
              viewBox="0 0 24 24"
              width="12"
            >
              <path
                d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <path
                d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <circle
                cx="12.072"
                cy="11.075"
                fill="none"
                r="3.556"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></circle>
            </svg>
            <Span>태그됨</Span>
          </span>
        </AB>
      </Div>
    );
  }
}

const Span = styled.span`
  margin-left: 6px;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const A = styled.a`
  margin-right: 60px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 52px;
`;

const AB = styled.a`
  ...A;
  margin-right: 0px;
`;

const Div = styled.div`
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  align-items: center;
  border-top: 1px solid rgba(var(--b38, 219, 219, 219), 1);
  color: #8e8e8e;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  font-size: 12px;
  font-weight: 600;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 1px;
  text-align: center;
`;

export default UserTablist;
