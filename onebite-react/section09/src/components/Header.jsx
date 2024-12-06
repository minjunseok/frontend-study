import "./Header.css";
import odung1 from '../assets/images/odung1.png';
import odung2 from '../assets/images/odung2.png';

const Header = () => {


  return (

    <div className="Header">
      <div className="image-container-odung">
        <img src={odung1} alt="odung1" className="header-odung" />
        <img src={odung2} alt="odung2" className="header-odung" />
      </div>
      <h3>오늘 날짜는 🐥</h3>
      <h1>{new Date().toDateString()}</h1>
      </div>


  );
};

export default Header;