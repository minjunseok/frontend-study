
import './App.css'
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import odung from './assets/images/odung.png'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const onClickButton = (value)=>{

    setCount(count + value);

  }

  return (
   
    <div className="App">
       <img src={odung} alt="odung" />
      <h1>오둥이 카운터🐤</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>

  );
};

export default App;
