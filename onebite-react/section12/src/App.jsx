import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import Button from "./components/Button";
import { getOdungImage } from "./util/get-odung-image"
import Header from "./components/Header";

function App() {
  // 1 . "/" : 모든 일기를 조회하는 Home 페이지
  // 2. "new" : 새로운 일기를 작성하는 New 페이지
  // 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

  const nav = useNavigate();

  const onClickButton = () =>{

    nav("/new");

  };

  return (
    /* Routes 컴포넌트 내부엔 Routte 컴포넌트만 들어갈 수가 있다.
      Header나 Footer 같은 모든 페이지의 공통적으로 사용되는 요소가 아닌 것들은 Routes 컴포넌트 외부에 배치한다. */

    <>

   
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />

      {/* <img src={getOdungImage(6)} /> */}

      <Button 
        text={"123"} 
        onClick={() => {
          console.log("123번 버튼 클릭!");
      }}
      />

      <Button 
        text={"123"} 
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭!");
      }}
      />

      <Button 
      text={"123"} 
      type={"NEGATIVE"}
      onClick={() => {
        console.log("123번 버튼 클릭!");
      }}
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
