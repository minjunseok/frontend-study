import "./App.css";
import { useReducer ,useRef , createContext} from "react";
import { Routes, Route } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getOdungImage } from "./util/get-odung-image"
import Edit from "./pages/Edit";

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId : 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId : 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {

  switch(action.type){

    case 'CREATE' :
       return [action.data, ...state];
    case 'UPDATE' :
       return state.map((item)=>
        // id값이 어떤 건 Number이고 어떤 건 Stirng 인 경우를 방지하기 위하여 형변환
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE' :
        // id값이 어떤 건 Number이고 어떤 건 Stirng 인 경우를 방지하기 위하여 형변환
      return state.filter((item)=> String(item.id) !== String(action.id));
    
    default:
      return state;
  };
  

};

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {


  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);


    // 새로운 일기 추가

    const onCreate = (createdDate , emotionId, content) => {

      dispatch({
        type:"CREATE",
        data : {
          
          id : idRef.current++,
          createdDate,
          emotionId,
          content,


        }
      })
    }

    // 기존 일기 수정

    const onUpdate = (id, createdDate, emotionId, content) => {

      dispatch({

        type :"UPDATE",
        data: {
          id,
          createdDate,
          emotionId,
          content

        },
      });
    };

    // 기존 일기 삭제

    const onDelete = (id) => {

      dispatch({
        type: "DELETE",
        id,
      });
    };

  return (

  


    <>

  

<DiaryStateContext.Provider value={data}>
  <DiaryDispatchContext.Provider
   value={{
    onCreate,
    onUpdate,
    onDelete,
   }}
   >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
  </DiaryDispatchContext.Provider>
</DiaryStateContext.Provider>

    </>
  );
}

export default App;
