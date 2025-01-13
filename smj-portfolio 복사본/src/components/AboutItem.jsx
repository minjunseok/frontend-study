import '../css/AboutItem.css';

const AboutItem = ({ icon, value, label }) => {
  return (
    <div>
      <div className='containner'>
        <div className='icon'>
          <img src={icon}></img>
        </div>
        <div className='text'>
        <h2>{label}</h2>
        <h3>{value}</h3>
      </div>
      </div>
    </div>
  )
}

export default AboutItem
