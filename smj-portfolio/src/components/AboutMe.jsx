import '../css/AboutMe.css';
import AboutItem from './AboutItem';
import myphoto from '../assets/myphoto.jpeg';
import icon1 from '../assets/user-Icon.png';
import icon2 from '../assets/mail-Icon.png';
import icon3 from '../assets/date-Icon.png';
import icon4 from '../assets/phone-Icon.png';
import icon5 from '../assets/edu-Icon.png';
import icon7 from '../assets/testicon.png'
const AboutMe = () => {
  return (

    
    <section id='AboutMe' className='containner'>
      <div className='eng-title-wrap'>
        <h1>ABOUT ME</h1>
      </div>
        <div className='content'>
          <div className='myPhoto'>
            <img src={myphoto}></img>
          </div>
          <div className='items-grid'>
            <AboutItem icon={icon1} label='이름' value='석민준' />
            <AboutItem icon={icon2} label='E-mail' value='tjralswnssla@naver.com'/> 
            <AboutItem icon={icon3} label='생년월일' value='95.05.26'/>
            <AboutItem icon={icon4} label='연락처' value='010-3835-8722'/>
            <AboutItem icon={icon5} label='학력' value='동서울대학교 디지털전자과'/>
            <AboutItem icon={icon7} label='지역' value='성남시 수정구'/>
          </div>
        </div>
     
      

      
      
    </section>
  )
}

export default AboutMe
