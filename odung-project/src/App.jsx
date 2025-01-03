

import { useState } from "react";
import './css/App.css';
import Box from './components/Box';
import Button from "./components/Button";
import { itemChoice } from "./utils/itemChoice";
import Result from "./components/Result";


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
  const [computerSelect,setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  // 가위바위보 버튼 이벤트 핸들러 함수
  const playButtonClick =(userChoice)=>{

  setUserSelect(choice[userChoice]);

  let computerChoice = randomChoice();

  setComputerSelect(computerChoice);

  setResult(judgement(choice[userChoice],computerChoice));




  };

  
  

const judgement = (user, computer) =>{

  console.log("user", user, "computer", computer );
  console.log(user.name, computer.name);

  if(user.name === computer.name) {

    return "draw";

  } else if(user.name === "rock") return computer.name === "scissors" ? "win" : "lose";
    else if(user.name === "paper") return computer.name === "rock" ? "win" : "lose";
    else if(user.name === "scissors") return computer.name === "paper" ? "win" : "lose";
  
}





const randomChoice =()=>{


  // 객체의 key 값만 뽑아서 배열로 만들어준다.

  let itemArray = Object.keys(choice);

  console.log("item array", itemArray);

  //Math.random() 소수점의 랜덤한 수치를 하나 생성해준다.
  // Math.floor() = 소수점 아래에 있는 함수를 모두 버린다.

  let randomItem = Math.floor(Math.random() * itemArray.length);
  let final = itemArray[randomItem];


  console.log("random value", randomItem);
  console.log("final" ,final);

  return choice[final];


};


  return (

    <div>
      <div className="app-container">

        <div className='main'>
          <Box
          title="당신"
          item={userSelect}
          result={result}
          />
          <Box
          title="컴퓨터"
          item={computerSelect}
          result={result}
            />
      </div>

        
          <Result
          result={result}
          />
      


        <div className='button'>

            <Button
            onClick={() => playButtonClick("scissors")}
            name="가위" 
            img='src/assets/sicssors.jpg'
            className='scissors'
            />

            <Button
            onClick={() => playButtonClick("rock")}
            name="바위"
            img='src/assets/rock.jpg'
            className='rock'
            />
            
              <Button
            onClick={() => playButtonClick("paper")}
            name="보"
            img='src/assets/paper.jpg'
            className='paper'
            />
    
        </div>

      </div>
  
    </div>
    

   
    
  );
};

export default App;