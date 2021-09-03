import "./main.css";
import React, {useState} from 'react';
import styled from 'styled-components';

const Main = () => { 
  
  
  return (
    <main id="contents" class="index-main">
      <section class="banner">
        <div class="banner-area">
          <div class="text-area">
            <span class="title"><span class="word">항</span>상 흔적을 남기는</span>
           
          </div>
          <div class="effect-text">
            <p> 개발자 문준호 입니다.</p><br></br>
          </div>
          <div class="effect-text2">
          <span class="title"><span class="word">기</span>록하는 남자</span>
          </div>
          <img class="logo" src="https://i.ibb.co/TPKwx9v/logo.png"></img>
          
        </div>
      </section>
      <section class="my-skills" id="my-content">
        <div>
        <h2>My Skills</h2>
        <p>제일 잘하는것들로 파트별로 나누어봤습니다.<br></br>저를 더 자세히 소개하기위해 준비한 프로젝트도 있습니다.</p>
        <ul class="skill-img">
          <li>
            <div>
              <img src="https://i.ibb.co/6Jwtyc3/frontend.png"></img>
              <h4>Frontend</h4>
              <p>
                HTML5·CSS·JAVASCRIPT<br></br>React 개발
              </p>
            </div>
          </li>
          <li>
            <div>
              <img src="https://i.ibb.co/8c1FBBX/backend.png"></img>
              <h4>Backend</h4>
              <p>
                Node.js·Express개발<br></br>Mysql DB 모델링
              </p>
            </div>
            </li>
        </ul>
        </div>
        
      </section>
      <section class="my-project" id="my-content">
        <div>
        <h2>My Project</h2>
        </div>
      </section>

      
    </main>

    
  );
};

export default Main;
