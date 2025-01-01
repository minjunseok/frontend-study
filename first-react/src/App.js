


import { useState } from 'react';
import './App.css';

function App() {


  let counter = 0;
  const [count , setCount] = useState(0);

  const increase = () => {

    counter = counter + 1;
    setCount(count + 1);
    console.log("counter는" , counter , "count state는" , count);

  }

  

  return (

    <div>
    
      <div>
        {counter}
      </div>

      <button onClick={increase}>클릭!</button>
      <div>state : {count}</div>

  </div> 

    

     
   
   
  );
}

export default App;
