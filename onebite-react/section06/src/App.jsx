
import './App.css'
import Viewer from "./components/Viewer"
import Controller from './components/Controller'
import odung from './assets/images/odung'

function App() {


  return (
   
    <div className="App">
       <img src={odung} alt="odung" />
      <h1>오둥이 카운터🐤</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </div>

  );
};

export default App;
