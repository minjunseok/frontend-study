import '../css/Skills.css';
import SkillItem from './SkillItem';
import '../assets/devIcon1.png';
import '../assets/devIcon2.png';
import '../assets/devIcon3.png';
import '../assets/devIcon4.png';
import '../assets/devIcon5.png';


const Skills = () => {
  const skillsData = [
    { img:'../assets/devIcon1.png', category: 'Language', skills: ['HTML', 'CSS', 'JavaScript', 'Java'] },
    { category: 'FrontEnd', skills: ['React.js', 'React Query', 'Redux', 'Axios', 'React Hook Form'] },
    { category: 'BackEnd', skills: ['Spring Boot', 'MyBatis'] },
    { category: 'Development Tools', skills: ['Node.js', 'Vercel', 'Naver Cloud', 'Docker', 'Jenkins', 'IntelliJ'] },
    { category: 'Environment', skills: ['Gradle'] },
    { category: 'ETC', skills: ['Figma', 'Slack', 'Discord', 'GitHub', 'exERD', 'VS Code'] }
  ];

  return (
    <section id='Skills' className='container'>
      <SkillItem
        skillsData={skillsData}
      />
      <SkillItem
        skillsData={skillsData}
      />
      <SkillItem
        skillsData={skillsData}
      />
      <SkillItem
        skillsData={skillsData}
      />
    </section>
  );
};

export default Skills;
