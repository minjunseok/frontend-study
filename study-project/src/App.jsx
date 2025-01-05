

import { useEffect , useState } from 'react'
import './App.css'


function App() {

  let counter = 0;

  const [value, setValue] = useState(0);
  const [count,setCount] = useState(0);


  const increase = () => {

    counter = counter + 1;
    // setCount(count + 1);
    setValue(value + 2);
    console.log("count는", counter, "count의 state는" , count);

  };
  

  useEffect(() => {

    console.log("useEffect1 호출");

  }, []
 );

 useEffect(() => {

  console.log("useEffect2 호출", count,value);

}, [count,value]
);



  return (
    <div>

        <div>
            버튼을 눌러보자
        </div>
          
        <div>
          state:{count}
        </div>


        <div>
            <button
             onClick={increase}>
              버튼
            </button>
        </div>
    </div>

  );
};

export default App
