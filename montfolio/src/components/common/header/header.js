import "./header.css";
import React from 'react'
import styled from 'styled-components'
import MONTFLOIO from './header-img/logo.png'
const Header = () => {
    return (
      <Common>
        <LogoImg src={MONTFLOIO}/>

        <ContlorBox >
          <Contlor href='/connect'>내 소개</Contlor>
          <Contlor href='/login'>프로젝트</Contlor>
          <Contlor href='/signup'>GITHUB</Contlor>
      </ContlorBox>
      </Common>
    );
  };

  const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 210px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
  }
    `



    const LogoImg = styled.img`
`


const ContlorBox = styled.div`
    display: flex;
    margin-right:60%;
    align-items:center;
    line-height: 10%;
    @media screen and (max-width: 500px) {
        
      flex-direction: column;
      align-items:flex-end;
      display: none;
  }
`

const Contlor = styled.a`
    margin: 10px;
    text-decoration: none;
    color: black;
    `
  export default Header;
  