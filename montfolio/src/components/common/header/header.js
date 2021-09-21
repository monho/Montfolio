import "./header.css";
import React, { useState } from 'react';

const Header = () => {
     
    return (
      <header>
            <div>
              <h1>
                <a href="/">
                {/* 로고 */}
                  <img src="img/header-img/logo.png"></img> 
                </a>
              </h1>
              <nav class="lnb menu">
	              <ul>
                  <li><a href="/about" class="">내소개</a></li>
                  <li><a href="/project" class="">프로젝트</a></li>
                  <li><a href="https://github.com/monho" target="_blank">GITHUB</a></li>
	            </ul>

                
	            </nav>
              <button id="burger" type="button">
              <span></span>
              <span></span>
              <span></span>
	          </button>
            </div>
      </header>
    );
}

export default Header;