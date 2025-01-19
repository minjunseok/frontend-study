import '../css/Modal.css';
import { useState, useEffect } from 'react';

const Modal = ({ project, onClose }) => {

  const [isActive, setIsActive] = useState(false);

  // 모달이 열릴 때 활성화
  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleClose = () => {
    setIsActive(false); // 애니메이션 종료를 위해 비활성화
    setTimeout(() => {
      onClose(); // 비활성화 후 부모 상태 업데이트
    }, 300); // CSS 애니메이션 시간(0.3s)과 동일
  };

  return (
     <div
      className={`modal-overlay ${isActive ? 'active' : ''}`}
      onClick={handleClose} // 바깥 클릭 시 닫기
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='modal-content-title'>{project.title}</div>
        <div className='modal-content-date'>{project.date}</div>
        <div className='modal-content-label1'>💻 프로젝트 설명 : </div>
        <div className='modal-content-description'>{project.description}</div>
        <div className='modal-content-label2'>🤔 프로젝트 목적 : </div>
        <div className='modal-content-review'>{project.review}</div>
        <div className='modal-content-label2'>💡 프로젝트 후기 : </div>
        <div className='modal-content-meaning'>{project.meaning}</div>
        
        <div className='modal-content-label3'>🛠️ 사용된 기술 : </div>
        <div className='modal-content-skill'>{project.skill}</div>
        <div className='modal-content-link1'>
          <h4>배포:</h4>
          <a
          href={project.link1} // 외부 링크 URL
          target="_blank" // 새 탭에서 열기
          rel="noopener noreferrer" // 보안 상 권장 속성
          >
          {project.link1}
          </a>
        </div>
        <div className='modal-content-link2'>
          <h4>소스:</h4>
          <a
          href={project.link2} // 외부 링크 URL
          target="_blank" // 새 탭에서 열기
          rel="noopener noreferrer" // 보안 상 권장 속성
          >
          {project.link2}
          </a>
        </div>
    
      </div>
    </div>
  );
};

export default Modal; 