import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  flex: 1;
`;
const Search = styled.input`
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  padding: 10px 20px;
  font-size:14px
  outline: none;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
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
