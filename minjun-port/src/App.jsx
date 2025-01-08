
import './App.css'
import AboutMe from './components/AboutMe'
import Archiving from './components/Archiving'
import Banner from './components/Banner'
import Career from './components/Career'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Element } from 'react-scroll';





// 1. UI디자인
// ()
// 2. 헤더쪽 버튼을 누르면 해당 섹션으로 애니매이션과 함께 이동한다.
// 3. Archiving 내 버튼을 누르면 해당 사이트로 이동
// 4. Project를 보여주는 섹션이 있으며 프로젝트 이미지를 볼 수 있는 모달 버튼 존재

function App() {

  return (
  
    <div>
      <div>
        <Element name="header">
          <Header/>
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
