import { Link } from "react-router-dom"

const Navbar = () => {
  return (


    
    <div className="navbar-containner">

      <div className="navbar-button">
      <Link to="/login">
        <button>로그인</button>
      </Link >
      <Link to="/findinfo">
        <button>아이디/비밀번호 찾기</button>
      </Link >
      <Link to="/join">
        <button>회원가입</button>
      </Link >
      
    

      </div>

    </div>
  
   

    
  );
};

export default Navbar
