import '../css/AboutMe.css';
import AboutItem from './AboutItem';
const AboutMe = () => {
  return (

    
    <section id='AboutMe' className='containner'>
      <div className='title'>
        <h1>ABOUT ME</h1>
      </div>
        <div className='content'>
          <div className='myPhoto'>
            <img src='src/assets/MyPhoto.jpeg'></img>
          </div>
          <div className='items-grid'>
            <AboutItem icon='src/assets/user-Icon.png' label='이름' value='석민준' />
            <AboutItem icon='src/assets/mail-Icon.png' label='E-mail' value='tjralswnssla@naver.com'/> 
            <AboutItem icon='src/assets/date-Icon.png' label='생년월일' value='95.05.26'/>
            <AboutItem icon='src/assets/phone-Icon.png' label='연락처' value='010-3835-8722'/>
            <AboutItem icon='src/assets/edu-Icon.png' label='학력' value='동서울대학교 디지털전자과'/>
            <AboutItem icon='src/assets/location-Icon.png' label='지역' value='성남시 수정구'/>
          </div>
        </div>
     
      

      
      
    </section>
  )
}

export default AboutMe
