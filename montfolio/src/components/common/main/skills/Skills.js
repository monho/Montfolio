import "../main.css";
import "../main_res.css"
const Skills = () => {
    return (
      <main id="contents" class="index-main">
        <section class="my-skills" id="my-content">
          <div>
          <h2>My Skills</h2>
          <p>제일 잘하는것들로 파트별로 나누어봤습니다.<br></br>저를 더 자세히 소개하기위해 준비한 프로젝트도 있습니다.</p>
          <ul class="skill-img">
            <li>
              <div>
                <img src="img/main-img/frontend.png"></img>
                <h4>Frontend</h4>
                <p>
                  HTML5·CSS·JAVASCRIPT<br></br>React 개발
                </p>
              </div>
            </li>

            <li>
              <div>
                <img src="img/main-img/backend.png"></img>
                <h4>Backend</h4>
                <p>
                  Node.js·Express개발<br></br>Mysql DB 모델링
                </p>
              </div>
              </li>
              <li>
              <div>
                <img src="img/main-img/devops.png"></img>
                <h4>Devops</h4>
                <p>
                  GitHub버전관리<br></br>Linux·AWS 서버 구축
                </p>
              </div>
              </li>
              
          </ul>
          </div>
          <div class="sub-div">
            <p class="sub-divp">"뇌 기억을 믿지말고 내 기록을 믿어라."</p>
          </div>
          
        </section>
    </main>

    );
  };

  export default Skills;
  