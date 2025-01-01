

import { useState } from "react";
import './App.css';
import Box from './components/Box';
import Button from "./components/Button";
import { itemChoice } from "./utils/itemChoice";


// 1. 박스 두개 (타이틀, 사진정보, 결과값)

// 2. 가위 바위 보 버튼

// 3. 버튼 클릭시 클릭한 값이 보여야함.

// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.

// 5. 3,4 결과를 가지고 누가 이겼는지 승패판독

// 6. 승패결과에 따라 테두리색 변경 승리 - 초록 , 패배 - 빨강, 무승부 - 검정






const choice = {

  rock: {
    name: "rock",
    img :itemChoice(1)
  },
  
  scissors: {
    name: "scissors",
    img :itemChoice(3)

  },

  paper: {
    name: "paper",
    img : itemChoice(2)

  }
};




function App() {
  
  

  // 가위바위보마다 다르게 보여주기 위해 설정한 state
  const [userSelect, setUserSelect] = useState(null);

  // 가위바위보 버튼 이벤트 핸들러 함수
  const playButtonClick =(userChoice)=>{

  setUserSelect(choice[userChoice]);

}

  return (
    <div>
      <div className='main'>
      <Box
       title="당신"
       item={userSelect}
       />
      <Box
       title="컴퓨터"
        />
    </div>

    <div className='button'>
      <Button
        onClick={() => playButtonClick("scissors")}
        name="가위" />
         <Button
        onClick={() => playButtonClick("rock")}
        name="바위" />
          <Button
        onClick={() => playButtonClick("paper")}
        name="보" />
    
    </div>
  
    </div>
    

   
    
  );
}

export default App;