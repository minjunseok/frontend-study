import '../css/Projects.css';
import ProjectItem from './ProjectItem';
import mp1 from '../assets/miniproject1.png';
import mp2 from'../assets/miniproject2.png';
import mp3 from'../assets/miniproject3.png';
import mp4 from'../assets/miniproject4.png';
import mp5 from'../assets/miniproject5.png';
import tp1 from '../assets/teamproject1.png';
import tp2 from '../assets/commingsoon.png';




const Projects = ({ setSelectedProject }) => {

   // 슬라이드 데이터: 각 프로젝트 데이터를 배열로 관리
   const projectItems = [

    { id: 1,
      date:'2025.1~',
      title: '5인 팀프로젝트 - Tickke',
      description: '티켓 리셀 매물과 양도 매물을 쉽게 확인 할 수 있는 애플리케이션' ,
      review: '티켓 매물 관련 다양한 앱을 뒤져봐야하는 번거로움을 해소하기 위하여 기획',
      meaning: '미완성 앱으로 전반적인 앱의 UI 파트와,Front End 소스 담당 구현 예정',
      link1:'',
      link2:'https://github.com/Team-Tikke',
      img:tp2,
      skill:'Spring Boot,TypeScript,React.js,MariaDB,TailWind CSS,Figma'} ,

      { id: 1,
        date:'2025.1.5 ~ 2025.1.7',
        title: '토이 프로젝트 - 오둥이 날씨앱',
        description: 'OpenWeather API를 활용한 미세먼지 및 날씨 확인 앱' ,
        review: 'React.js 학습 및 API 활용법 학습을 위해 프로젝트 진행',
        meaning: 'React.js 프로젝트 내에서 사용자 위치 기반 API 활용방법 학습',
        link1:'https://weatherproject-taupe.vercel.app/',
        link2:'https://github.com/minjunseok/frontend-study/tree/master/weatherproject',
        img:mp5,
        skill:'React.js,Vercel,Vite'},

    { id: 2,
      date:'2025.1.2~ 2025.1.4',
      title: '토이 프로젝트 - 오둥이 가위바위보',
      description: '컴퓨터와 하는 오둥이 가위바위보' ,
      review: 'React.js와 vercel 의 배포 기능 학습 목적',
      meaning: `전반적인 React.js 학습, React의 핵심적인 기능 컴포넌트 단위의 기능 구현,\n 
      상태관리 메서드 등 React Hook등을 간단한 미니 프로젝트를 통해 학습`,
      link1:'https://rocksicssorspaper.vercel.app',
      link2:'https://github.com/minjunseok/frontend-study/tree/master/odung-project',
      img:mp1,
      skill:'React.js,Vercel,Vite'} ,
    
    { id: 3,
      date:'2024.11.24 ~ 2024.12.7',
      title: '토이 프로젝트 - 오둥이 TodoList',
      description: '그날 할일을 기록하는 TodoList' ,
      review:'React.js을 이용한 그날 할 일 리스트 기록 앱',
      meaning: 'Raect.js 커스텀 훅을 이용한 useReducer 기능 등 기본적인 활용법 학습 ',
      link1:'https://todolist-pi-bay.vercel.app',
      link2:'https://github.com/minjunseok/frontend-study/tree/master/onebite-react/section09',
      img:mp3,
      skill:'React.js,Vercel,Vite'}, 

    { id: 4,
      date:'2024.12.12 ~ 2024.12.20',
      title: '토이 프로젝트 - 오둥이 감정일기',
      description: '로컬 환경에서 실행가능한 그날의 감정을 적는 작은 일기장' ,
      review:`React.js의 전반적인 기능과 로컬 실행환경 구축 방법 학습 목적 토이 프로젝트`, 
      meaning: `라우팅,useReducer,Context 등의 활용법과
      로컬 실행 환경 구현 방법 학습`,
      link1:'https://odung-diary.vercel.app',
      link2:'https://github.com/minjunseok/frontend-study/blob/master/onebite-react/section12',
      img:mp4,
      skill:'React.js,Vercel,Vite'},

    { id: 5,
      date:'2024.11.20 ~ 2024.11.20',
      title: '토이 프로젝트 -오둥이 카운터',
      description: '수치 증감을 할 수 있는 간단한 미니 프로젝트' ,
      review:'React.js 기초를 다지기 위한 학습 목적 토이 프로젝트',
      meaning: 'useState를 활용한 간단한 수치 증감 앱 구현을 통해 React.js 학습',
      link1:'https://odungcounter.vercel.app',
      link2:'https://github.com/minjunseok/frontend-study/tree/master/onebite-react/section05',
      img:mp2,
      skill:'React.js,Vercel,Vite'},
  
    { id: 6,
      date:'2024.3.4~2024.5.27',
      title: '6인 팀프로젝트 - 모여라',
      description: '취미 생활을 함께 하고싶은 사람을 모집하는 모임 커뮤니티 앱' ,
      review:`스프링 부트 학습 및 각종 API 활용법, RESTful 설계 방식,\n
       네이버 클라우드 서비스를 이용한 편리한 서버 운영 방식의 대한 학습 목적`,
      meaning: '팀 프로젝트 진행을 통하여 개발자 협업 환경 체험,클라우드 기반 풀스택 자바 웹 애플리케이션 구현방법 학습',
      link1:'https://www.canva.com/design/DAF-C55y6iw/7qxwsNKIJG8s-4a64r2i3A/view?utm_content=DAF-C55y6iw&utm_campaign=designshare&utm_medium=link&utm_source=editor#1',
      link2:'https://github.com/minjunseok/team-project',
      img:tp1,
      skill:'MyBatis,Spring Boot,NaverCloud,JQuery,BootStrap,MySQL'},

    

  ];


  return (
    <section id="Projects" className="project-section">
      <div className='eng-title-wrap'>
        PROJECTS
      </div>
      
      <div className="project-container">
        {projectItems.map((item) => (
          <ProjectItem
            key={item.id}
            item={item}
            onClick={() =>setSelectedProject(item)} // 클릭 시 실행
          />
        ))}
      </div>
    </section>
  );
};

export default Projects
