
import { useState } from 'react'; 

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개


const Register=()=>{


  const [name , setName] = useState("이름을 입력해주세요");

  const onChangeName = (e)=>{

    setName(e.target.value);


  }

  return (
  
  <div>
    <input
     value={name}
     onChange={onChangeName}
     placeholder={"이름"}
      />
      {name}
  </div>
  );
};

export default Register;