import '../css/Header.css';
import { Link } from 'react-scroll';



const Header = ({isScrolled}) => {


  return (
    <section id="Header" className={`containner ${isScrolled ? "scrolled" : ""}`}>
      
      <div className='logo'>
        <Link to="header" smooth={true} duration={600}><button>SMJ's Portfolio</button></Link>
      </div>
      
      <div className='button'>
        <Link to="aboutMe" smooth={true} duration={600}><button>About Me</button></Link>
        <Link to="archiving" smooth={true} duration={600}><button>Archiving</button></Link>
        <Link to="career" smooth={true} duration={600}><button>Career</button></Link>
        <Link to="projects" smooth={true} duration={600}><button>Projects</button></Link>
        <Link to="skills" smooth={true} duration={600}><button>Skills</button></Link>
      </div>
    </section>
  );
};

export default Header;
