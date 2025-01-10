import '../css/Skills.css';
import SkillItem from './SkillItem';
import devIcon1 from '../assets/devIcon1.png';
import devIcon2 from'../assets/devIcon2.png';
import devIcon3 from '../assets/devIcon3.png';
import devIcon4 from'../assets/devIcon4.png';
import devIcon5 from'../assets/devIcon5.png';
import devIcon6 from'../assets/devIcon6.png';


const Skills = () => {
  const skillsData = [
    { img: devIcon6, category: 'Language', skills: ['HTML', 'CSS', 'JavaScript', 'Java'] },
    { img: devIcon1, category: 'FrontEnd', skills: ['React.js', 'React Query', 'Redux', 'Axios', 'React Hook Form'] },
    { img: devIcon2, category: 'BackEnd', skills: ['Spring Boot', 'MyBatis'] },
    { img: devIcon4, category: 'Development Tools', skills: ['Vite','Node.js', 'Vercel', 'Naver Cloud', 'Docker', 'Jenkins', 'IntelliJ'] },
    { img: devIcon3, category: 'Environment', skills: ['Gradle'] },
    { img: devIcon5, category: 'ETC', skills: ['Figma', 'Slack', 'Discord', 'GitHub', 'exERD', 'VS Code'] }
  ];

  return (
    <section id='Skills' className='container'>
      <SkillItem
        skillsData={skillsData}
      />
    </section>
  );
};

export default Skills;
