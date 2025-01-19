import '../css/Header.css';
import { Link } from 'react-scroll';

const Header = ({ isScrolled }) => {
  return (
    <section id="Header" className={`containner ${isScrolled ? "scrolled" : ""}`}>
      <div className='logo'>
        <Link to="header" smooth={true} duration={600}>SMJ's Portfolio</Link>
      </div>
      
      <div className='button'>
        <Link to="archiving" smooth={true} duration={600}>Archiving</Link>
        <Link to="skills" smooth={true} duration={600}>Skills</Link>
        <Link to="projects" smooth={true} duration={600}>Projects</Link>
        <Link to="career" smooth={true} duration={600}>Career</Link>
        <Link to="aboutMe" smooth={true} duration={600}>About Me</Link>
      </div>
    </section>
  );
};

export default Header;
