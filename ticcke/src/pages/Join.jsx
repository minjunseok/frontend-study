import { Link } from "react-router-dom";

const Join = () => {
  return (
    <div className="form">
      <h2 className="login-title">일반 회원가입 입니다</h2>

      <form className="login-form">

          {/* 아이디 입력 */}
          
        <div>
          <label htmlFor="username">아이디 : </label>
          <input
           type="text"
           id="username"
           placeholder="아이디를 입력해주세요"
           name='username'
           autoComplete='username' 
           required />
        </div>


          {/* 비밀번호 입력 */}
        <div>
          <label htmlFor="password">비밀번호 : </label>
          <input
           type="text"
           id="password"
           placeholder="비밀번호를 입력해주세요"
           name='password'
           autoComplete='password' 
           required />
        </div>

         {/* 비밀번호 확인 */}
         <div>
          <label htmlFor="password">비밀번호 확인 : </label>
          <input
           type="text"
           id="password"
           placeholder="비밀번호를 입력해주세요"
           name='password'
           autoComplete='password' 
           required />
        </div>

        {/* 이메일 */}
        <div>
          <label htmlFor="email">email : </label>
          <input
           type="text"
           id="email"
           placeholder="이메일을 입력해주세요"
           name='email'
           autoComplete='email' 
           required />
        </div>
      </form>

      <Link to='/agreement'>
        <button
         type='submit'
         className='btn btn-form btn-join'>회원 가입</button>

         
      </Link>
      
    </div>
  );
};

export default Join
