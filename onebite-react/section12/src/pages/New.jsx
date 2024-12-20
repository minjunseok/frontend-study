import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate  } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DiaryDispatchContext } from "../App";




const New = () => {
  
  const { onCreate } = useContext(DiaryDispatchContext);

  const nav = useNavigate();



  useEffect(()=> {

    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = "새 일기 쓰기";
  }, []);

  const onSubmit = (input) => {
  
    onCreate(
     input.createdDate.getTime(),
     input.emotionId,
     input.content
    );
    
    nav('/', {replace: true});

  };

  return (
    <div>
      <Header
        title={"새 일기 작성"} 
        leftChild={
        <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit}/>
    
    </div>
  );
};

export default New;