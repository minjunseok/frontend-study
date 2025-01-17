import '../css/Career.css';
import img1 from '../assets/ncamp.png';
import img2 from '../assets/udemy.png';
import img3 from '../assets/crn.png';

const Career = () => {
  return (
    
    <section id='Career' className='career-container'>
      <div className='career-title'>CAREER</div>

      <div className='career-content-wrapper'>
          <div className='career-img'>
            <img src={img1} alt='ncamp'/>
            <img src={img2} alt='udemy'/>
            <img src={img3} alt='crn'/>
          </div>


          
          <div className='career-content'>



        <div className='job-containner'>


          <div className='edu-content'>
              <div className='title1'>
                학력
              </div>
                <ul>
                  <li>
                    동서울대학교 디지털전자과 졸업&nbsp;&nbsp;
                    <a>
                      2014.03 ~ 2019.02
                    </a>
                  </li>
                  
                </ul>
          </div>
          
        



          <div className='company-content'>
            <div className='title2'>
              사회활동
            </div>
            <ul>
              <li>
               
                신도리코(주)광명사무기 기술영업
                <a>
                &nbsp;&nbsp;2019.08 ~ 2023.10
                </a>
              <br/>
              - 고객사별 관리 및 CS, 사무기기 유지보수, 차량 이용 외부 현장 지원,
              <br/>
              &nbsp;&nbsp;&nbsp;사무기기와 사무기기 소모품 유상 대여 및 판매
              </li>
              
              
              <br/>
              <li>
               
                건설업 형틀공 <a>
                &nbsp;&nbsp;2015.07 ~ 2019.03
                </a></li>
            </ul>
          </div>
         
        </div>



        <br/>
        <div className='develop-content'>
          <div className='develop-content-title'>
            교육 내역
          </div>
       
          <div className='ncp-content'>
            <ul>
              <li>
                네이버클라우드 클라우드 기반 웹 데브옵스 개발자 과정/ 네이버클라우드 주최
              </li>
          
                <a>
                2023.11 ~ 2024.06
                </a>
            
              <br/>
              <br/>
              <h4>
              [교육 내용]
              <br/>
              - 웹 애플리케이션 팀 프로젝트 진행 (6인)
              <br/>
              &nbsp;&nbsp;&nbsp;팀장 역할 및 앱 내 커뮤니티 부분 CRUD, UI 프론트엔드, 프로토타입 구현 담당
              <br/>
              -JAVA,HTML,CSS,JavaScript,데이터베이스 및 네트워크,스레드 프로그래밍,서버 렌더링 방식 웹프로그래밍<br/>
              &nbsp;&nbsp;&nbsp;,스프링 부트,스프링 프레임워크,스프링 데이터,,
              API  프로그래밍
              <br/>
              </h4>
            
            </ul>
          </div>

          <div className='onebite-content'>
            <ul>
            <li>Udemy - 2024 리뉴얼 한입 크기로 잘라먹는 React.js 강의<br/></li>
            <a>2024.07 ~ 2024.09 </a>
            <br/>
            <br/>
            <h4>
              [교육 내용]
              <br/>
              - SPA, MPA, 서버, 클라이언트, 터미널 등 웹 CS지식 이해
              <br/>
              - JavaScript, Node.js, React.js 개발 관련 개념 학습
              <br/>
              - HTML, CSS 경험
              </h4>
            </ul>
          </div>
          <div className='crn-content'>
            <ul>
            
              <li>(2024 최신 업데이트) 리액트: 프론트엔드 개발자로 가는 마지막단계 강의<br/></li>
              <a>2024.10 ~ 진행중</a>
              <br/>

            <br/>
            <h4>
              [교육 내용]
              <br/>
              - React.js 기반 프로젝트 5가지 진행
              <br/>
              - Redux, React Query, Axios 등 현업 개발 라이브러리 활용
              <br/>
            </h4>
           
            
            </ul>
          </div>

          <div className='teamproject-content'>
            <ul>
      
              <li> 진행중 - 팀 사이드 프로젝트 (5인)</li>
              <a> 
                2024.11.30 ~
              </a>
              <h4>
                 - 스프링 부트 , React.js,클라우드 웹 애플리케이션 프로젝트
              </h4>
              
            </ul>
          </div>
         
        </div>


      </div>
    </div>
  </section>
  );
};

export default Career
