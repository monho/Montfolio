import "../main.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";


const Project = () => {
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
              <ul class="soloproject">
                <li>
                  <a href="#">
                    <img src="img/main-img/montfolio.png"></img>
                 
                  <div class="title">문트폴리오 개인 포트폴리오<br></br>Node.js,React.js,Mysql
                    <br></br>
                    <br></br>
                   <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
                  </div>
                  </a>
                </li>
                <li>
                <a href="#">
                    <img src="img/main-img/frultinven.png"></img>
                 
                  <div class="title">플룻인벤 - 청과 재고관리 시스템<br></br>Node.js,React.js,Mysql
                    <br></br>
                    <br></br>
                   <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
                  </div>
                  </a>
                </li>
                <li>
                <a href="#">
                    <img src="img/main-img/mylist.png"></img>
                 
                  <div class="title">마이리스트 - 간편 다이어리 앱<br></br>Node.js,React.js,Mysql
                    <br></br>
                    <br></br>
                   <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
                  </div>
                  </a>
                </li>
              </ul>
              <a class="more" href="/blog/post">프로젝트 더 보기</a>
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
          <div class="soloproject-div">
          <p>다수의 구성원들과 함께 제작한 프로젝트입니다.</p>
          <p>실제 배포하여 운영중에 있는 프로젝트도 있습니다.</p>
          <ul class="soloproject">
            <li>
              <a href="#">
                <img src="img/main-img/montfolio.png"></img>
             
              <div class="title">문트폴리오 개인 포트폴리오<br></br>Node.js,React.js,Mysql
                <br></br>
                <br></br>
               <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
              </div>
              </a>
            </li>
            <li>
            <a href="#">
                <img src="img/main-img/frultinven.png"></img>
             
              <div class="title">플룻인벤 - 청과 재고관리 시스템<br></br>Node.js,React.js,Mysql
                <br></br>
                <br></br>
               <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
              </div>
              </a>
            </li>
            <li>
            <a href="#">
                <img src="img/main-img/mylist.png"></img>
             
              <div class="title">마이리스트 - 간편 다이어리 앱<br></br>Node.js,React.js,Mysql
                <br></br>
                <br></br>
               <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
              </div>
              </a>
            </li>
          </ul>
          <a class="more" href="#">프로젝트 더 보기</a>
        </div>
        )
    }
];
const tabClickHandler=(index)=>{
  setActiveIndex(index)
}


    return (
        
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

    );
  };

  export default Project;
  