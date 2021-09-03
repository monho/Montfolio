import "./main.css";
import React, { useState } from 'react';

const Main = () => { 


  const [activeIndex, setActiveIndex] = useState(0);
  const tabCont=[
    {
        tabTitle:(
            <li className={activeIndex===0 ? "is-active" : "in-none"} onClick={()=>tabClickHandler(0)}>
                <p class="tabiteam">개인 프로젝트</p>
            </li>
        ),
        tabCont:(
            <div class="soloproject-div">
              <p>여러가지 언어를 학습하고 상황에 맞게 대응하기 위한 프로젝트 입니다.</p>
              <p>실제 배포하여 운영중에 있는 프로젝트도 있습니다.</p>
              <ul>
                <li>
                  <a>
                    <img src="https://i.ibb.co/25cct65/3.png"></img>
                  </a>
                  <div class="title">문트폴리오 개인 포트폴리오<br></br>Node.js,React.js,Mysql</div>
                  
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
        )
    },
    {
        tabTitle:(
            <li className={activeIndex===1 ? "is-active" : "in-none"} onClick={()=>tabClickHandler(1)}>
              <p class="tabiteam"> 팀 프로젝트</p> 
            </li>
        ),
        tabCont:(
            <div>탭2 내용</div>
        )
    }
];
const tabClickHandler=(index)=>{
  setActiveIndex(index)
}


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
          <ul className="tabs is-boxed">
	          {tabCont.map((section, index)=>{
		        return section.tabTitle
	       })}
          </ul>
          <div>
	    { tabCont[activeIndex].tabCont }
    </div>




        </div>
      </section>

      
    </main>

    
  );
}
  
  
 

export default Main;
