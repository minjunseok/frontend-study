import { useContext , useState , useEffect} from "react";
import { DiaryStateContext } from "../../App";
import { useNavigate } from "react-router-dom";


const useDiary = (id) => {

  const data = useContext(DiaryStateContext);
  const [currentDiaryItem, setCurrentItem] = useState();
  const nav = useNavigate();


  useEffect(()=>{

    const currentDiaryItem = data.find(

      // 모든 일기의 아이템 중에 id가 일치하는 아이템을 찾는다
  
        (item)=> String(item.id) === String(id)
      );
  
  
      if(!currentDiaryItem){
  
        window.alert("존재하지 않는 일기입니다.");
        nav("/", { replace: true });
  
      }
  
      setCurrentItem(currentDiaryItem);

  },[id]);

  return currentDiaryItem;

}

export default useDiary;