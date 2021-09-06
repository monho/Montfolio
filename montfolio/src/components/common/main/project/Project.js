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
                    
                   <FontAwesomeIcon icon={faArrowAltCircleRight} className="allow" />{" "}자세히 보기
                  </div>
                  </a>
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
  