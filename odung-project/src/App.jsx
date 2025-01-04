
import './css/App.css';
import { useState , useEffect } from "react";
import { itemChoice } from "./utils/itemChoice";
import { rpcChoice } from "./utils/rpcChoice";
import { judgement } from "./utils/gameLogic";
import Result from "./components/Result";
import Header from "./components/Header";
import Box from './components/Box';
import Button from "./components/Button";


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

  // 컴퓨터와 관련된 state
  const [computerSelect,setComputerSelect] = useState(null);

  //게임 승패를 다루기 위한 state
  const [result, setResult] = useState("");

  //승리,패배 횟수를 카운팅 하기 위한 state
  const [winCount, setWinCount] = useState(0);
  const [loseCount, setLoseCount] = useState(0);


  // 승패를 증감하기 위한 카운트 함수

  const countResult = (userResult) => {


    if(userResult === "win") {

      setWinCount(winCount + 1);

    } else if(userResult === "lose") {

      setLoseCount(loseCount + 1);

    } else {

      return;

    };

};


  // 가위바위보 버튼 이벤트 핸들러 함수
  const playButtonClick =(userChoice)=>{

  setUserSelect(choice[userChoice]);

 

  let computerChoice = randomChoice(choice);

  setComputerSelect(computerChoice);

  const gameResult = judgement(choice[userChoice],computerChoice);

  setResult(gameResult);

  countResult(gameResult);

  


  };

  useEffect(() => {
  }, [winCount]);

  useEffect(() => {
  }, [loseCount]);

  


  

const resetCount =()=>{

  setWinCount(0);
  setLoseCount(0);

}





const randomChoice =()=>{


  // 객체의 key 값만 뽑아서 배열로 만들어준다.

  let itemArray = Object.keys(choice);

  //Math.random() 소수점의 랜덤한 수치를 하나 생성해준다.
  // Math.floor() = 소수점 아래에 있는 함수를 모두 버린다.

  let randomItem = Math.floor(Math.random() * itemArray.length);
  let final = itemArray[randomItem];



  return choice[final];


};



function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
useEffect(() => {
  setScreenSize();
});

  return (

    <div>

      <div className="app-wrapper">

        <div className="app-container">

           
            <Header />

            <div className='result-reset-container'>
              <div className='result-count'>
                승리 : {winCount}  패배 : {loseCount}
              </div>

              <div className='reset'>
              <button 
                onClick={resetCount}>
                  Reset
                </button>
              </div>
            </div>
          

          <div className='main'>
            <Box
            title="👉 당신"
            item={userSelect}
            result={result}
            />
            <Box
            title="💻 컴퓨터"
            item={computerSelect}
            result={result}
              />
          </div>

          <div className={`result${result ? 'visible' : ''}`}>
              <Result
              result={result}
            />
            </div>

    
        


          <div className='button'>

              <Button
              onClick={() => playButtonClick("scissors")}
              name="가위" 
              img={rpcChoice(3)}
              className='scissors'
              />

              <Button
              onClick={() => playButtonClick("rock")}
              name="바위"
              img={rpcChoice(1)}
              className='rock'
              />

                <Button
              onClick={() => playButtonClick("paper")}
              name="보"
              img={rpcChoice(2)}
              className='paper'
              />
      
          </div>

        </div>

      </div>

    </div>
    

   
    
  );
};

export default App;