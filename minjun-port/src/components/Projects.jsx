import '../css/Projects.css';
import ProjectItem from './ProjectItem';
import mp1 from '../assets/miniproject1.png';
import mp2 from'../assets/miniproject2.png';
import mp3 from'../assets/miniproject3.png';
import mp4 from'../assets/miniproject4.png';
import mp5 from'../assets/miniproject5.png';
import tp1 from '../assets/teamproject1.png';
import tp2 from '../assets/commingsoon.png';



const Projects = () => {

   // 슬라이드 데이터: 각 프로젝트 데이터를 배열로 관리
   const projectItems = [
    { id: 1,
      date:'2025.1',
      title: '오둥이 가위바위보',
      description: '프로젝트 설명 1' ,
      img:mp1} ,
    { id: 2,
      date:'2025.1',
      title: '오둥이 날씨앱',
      description: '프로젝트 설명 2' ,
      img:mp5},
    { id: 3,
      date:'2024.12',
      title: '오둥이 TodoList',
      description: '프로젝트 설명 3' ,
      img:mp3}, 
    { id: 4,
      date:'2024.12',
      title: '오둥이 감정일기',
      description: '프로젝트 설명 4' ,
      img:mp4},

    { id: 5,
      date:'2024.11',
      title: '오둥이 카운터',
      description: '프로젝트 설명 5' ,
      img:mp2},
  
    { id: 6,
      date:'2024.5',
      title: '팀프로젝트 - 모여라',
      description: '프로젝트 설명 6' ,
      img:tp1},

    { id: 7,
      date:'2025.1~',
      title: '팀프로젝트 - 티케팅 앱',
      description: '프로젝트 설명 6' ,
      img:tp2}  

  ];


  return (
    <section id='Projects' className='project-section'>
      <h2>PROJECTS</h2>
      <div className="project-container">
        {projectItems.map((item) => (
            <ProjectItem key={item.id} item={item} />
          ))}
      </div>
     
    </section>
  )
}

export default Projects
