import '../css/ProjectItem.css';

const ProjectItem = ( {item, onClick} ) => {


  // 모달 내 보여져야 할 것

  // 프로젝트 제목
  // 프로젝트 배포 날짜
  
  // >프로젝트 한줄 설명
  // 프로젝트 디테일 설명
  // 프로젝트 배포 사이트 링크
  // 사용 기술들

  return (
    <div className="projectitem-containner" onClick={() => onClick(item)}>
      <img src={item.img} alt={item.title} className="project-image" />
      <p className="project-date">{item.date}</p>
      <div className="project-title">{item.title}</div>
      <p className="project-description">{item.description}</p>
      
    </div>
  );
};

export default ProjectItem
