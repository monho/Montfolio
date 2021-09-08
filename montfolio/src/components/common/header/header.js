import "./header.css";
import React, { useState } from 'react';
import styled from 'styled-components'
import MONTFLOIO from './header-img/logo.png'
import { IoIosMenu } from "react-icons/io";
const Header = () => {
  const [menu, setmenu] = useState(false)  
    return (
      <Common>
        <LogoImg src={MONTFLOIO}/>

        <ContlorBox menu={menu}>
          <Contlor href='/connect'>내 소개</Contlor>
          <Contlor href='/login'>프로젝트</Contlor>
          <Contlor href='/signup'>GITHUB</Contlor>
      </ContlorBox>
      <Menubar href='#' onClick={() => {setmenu(!menu)}}>
          <IoIosMenu></IoIosMenu>
      </Menubar>
      </Common>
    );
  };

  
  const Common = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 250px;
    @media screen and (max-width: 768px) {
      flex-direction: column;
  }
    `



    const LogoImg = styled.img`
`


const ContlorBox = styled.div`
    display: flex;
    
    
    margin-right:60%;
    align-items:center;
    justify-content: center;
    line-height: 10%;
    
    @media screen and (max-width: 768px) {
      width:241px;
      flex-direction: row;
      align-items:flex-end;
      display: ${({menu}) => {
         return menu === false ? 'none' : 'flex'
      }};
  }
`

const Contlor = styled.a`
    margin: 15px 25px 15px 0;
    text-decoration: none;
    color: black;
    flex-direction: column;
    `
const Menubar = styled.a`
    display: flex;
    align-items:center;
    font-size: 30px;
    position: absolute;
    right: 32px;
    height: 5%;
    @media screen and (min-width: 768px) {
        display: none;    
    }
`
  export default Header;
  