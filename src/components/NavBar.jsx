import React from 'react'
import styled from 'styled-components'

function Navbar() {
    const NavWrapper = styled.div`
    width:100%;
    height:60px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap:10px;
    
    `
    const HomeLogo = styled.div`
    flex:1;
    `
    const NavSearch = styled.div`
        flex:1;

    `
    const NavIcons = styled.div`
        flex:1;

    `
    return (
        <>
        <NavWrapper>
            <HomeLogo>이미지</HomeLogo>
            <NavSearch>검색</NavSearch>
            <NavIcons>아이콘</NavIcons>
        </NavWrapper>
        </>
    )
}

export default Navbar
