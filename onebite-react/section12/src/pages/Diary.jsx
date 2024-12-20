import { useParams , useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../components/hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../components/hooks/usePageTitle";


const Diary = () => {

  const nav = useNavigate();
  const params = useParams();
  usePageTitle(`${params.id}번 일기`);

  const currentDiaryItem = useDiary(params.id);

  if(!currentDiaryItem) {
    return <div>데이터 로딩</div>;
  }

  const { createdDate , emotionId, content } = currentDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return <div>

    <Header
      title={`${title} 기록📖`}
      leftChild={
      <Button
         onClick={() => nav(-1)}
         text={"< 뒤로 가기"} />
    }
      rightChild={
      <Button
         onClick={() => nav(`/edit/${params.id}`)}
         text={"수정하기"} 
         />
        }
    />
    <Viewer emotionId={emotionId} content={content} />
  </div>;

};

export default Diary;