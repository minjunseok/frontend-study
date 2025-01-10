
import './App.css'
import AboutMe from './components/AboutMe';
import Archiving from './components/Archiving';
import Banner from './components/Banner';
import Career from './components/Career';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';




// 1. UI디자인
// 2. 헤더쪽 버튼을 누르면 해당 섹션으로 애니매이션과 함께 이동한다.
// 3. Archiving 내 버튼을 누르면 해당 사이트로 이동
// 4. 프로젝트 섹션에서 캐러셀로 작업한 프로젝트 사진들 보여줌
// 5. 프로젝트 섹션에서 해당 캐러셀 이미지를 누르면 해당 프로젝트의 관련된 정모가 담긴 모달창 출력

function App() {

  const [isScrolled, setIsScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // 스크롤 위치에 따라 상태 변경
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // 이벤트 리스너 정리
    };
  }, []);


  return (
  
    <div>
      <div>
        <Element name="header">
          <Header isScrolled={isScrolled} /> {/* isScrolled 전달 */}
        </Element>
          <Banner/>
        <Element name="aboutMe">
          <AboutMe />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="archiving">
          <Archiving />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="career">
          <Career />
        </Element>
        <Footer />
      </div>


    </div>
  );
};

export default App;
