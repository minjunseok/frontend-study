
import './App.css'
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import odung from './assets/images/odung.png'
import Even from './components/Even'
import { useState, useEffect ,useRef} from 'react';



function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // 1. 마운트 : 탄생

  useEffect(()=>{
    console.log("mount");
  },[]);

  // 2. 업데이트 : 변화, 리렌더링

  useEffect(()=> {
    if(!isMount.current) {

      isMount.current = true;
      return;

    }
    console.log("update");
  });


  // 3. 언마운트 : 죽음


  const onClickButton = (value)=>{

    setCount(count + value);
    // console.log(count);

  };

  return (
   
    <div className="App">
       <img src={odung} alt="odung" />
      <h1>오둥이 카운터🐤</h1>

      <section>
        <input 
        value={input}
         onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>

      <section>
        <Viewer count={count} />
        {count % 2 === 0? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>

  );
};

export default App;
