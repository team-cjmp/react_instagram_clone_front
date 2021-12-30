import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Search = styled.input`
  flex-basis:300px;
  background-color: rgba(250, 250, 250,1);
  padding: 10px 20px;
  font-size:14px
  outline: none;
  border: 1px solid rgba(219, 219, 219,1);
  
  &:focus{
      outline:none
  }
  &:placeholder-shown {
    font-size: 14px;
  }
`;
function NavSearch() {
  const [userSearch, setUserSearch] = useState('');
  const onChange = ({ target: { value } }) => {
    setUserSearch(value);
  };

  return (
    <Wrapper>
      <Search onChange={onChange} placeholder="검색" />
      <div id="test">{userSearch}</div>
    </Wrapper>
  );
}

export default NavSearch;
