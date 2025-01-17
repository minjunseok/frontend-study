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
      date:'2025.1',
      title: '오둥이 가위바위보',
      description: '컴퓨터와 하는 오둥이 가위바위보' ,
      link:'https://rocksicssorspaper.vercel.app',
      img:mp1,
      skill:'React.js,Vercel,Vite'} ,
    { id: 2,
      date:'2025.1',
      title: '오둥이 날씨앱',
      description: 'OpenWeather API를 활용한 미세먼지 및 날씨 확인 앱' ,
      link:'',
      img:mp5,
      skill:'React.js,Vercel,Vite'},
    { id: 3,
      date:'2024.12',
      title: '오둥이 TodoList',
      description: '그날 할일을 기록하는 TodoList' ,
      link:'https://todolist-pi-bay.vercel.app',
      img:mp3,
      skill:'React.js,Vercel,Vite'}, 
    { id: 4,
      date:'2024.12',
      title: '오둥이 감정일기',
      description: '로컬 환경에서 실행가능한 그날의 감정을 적는 작은 일기장' ,
      link:'https://odung-diary.vercel.app',
      img:mp4,
      skill:'React.js,Vercel,Vite'},

    { id: 5,
      date:'2024.11',
      title: '오둥이 카운터',
      description: '수치 증감을 할 수 있는 간단한 미니 프로젝트' ,
      link:'https://odungcounter.vercel.app',
      img:mp2,
      skill:'React.js,Vercel,Vite'},
  
    { id: 6,
      date:'2024.5',
      title: '6인 팀프로젝트 - 모여라',
      description: '취미 생활을 함께 하고싶은 사람을 모집하는 모임 커뮤니티 앱' ,
      link:'https://www.canva.com/design/DAF-C55y6iw/7qxwsNKIJG8s-4a64r2i3A/view?utm_content=DAF-C55y6iw&utm_campaign=designshare&utm_medium=link&utm_source=editor#1',
      img:tp1,
      skill:'MyBatis,Spring Boot,NaverCloud,JQuery,BootStrap,MySQL'},

    { id: 7,
      date:'2025.1~',
      title: '5인 팀프로젝트 - 티케팅 앱',
      description: '티켓 리셀 매물과 양도 매물을 쉽게 확인 할 수 있는 애플리케이션' ,
      link:'',
      img:tp2,
      skill:'Spring Boot,Reactj.js,MySQL,TailWind CSS,Figma'}  

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
