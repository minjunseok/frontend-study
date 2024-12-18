import "./EmotionItem.css";
import { getOdungImage } from "../util/get-odung-image";


const EmotionItem = ({
  emotionId,
  emotionName ,
  isSelected ,
  onClick 
})=> {

  return <div
   onClick={onClick}
   className={`EmotionItem ${
    
    isSelected ? `EmotionItem_on_${emotionId}` : ""

  }`}

  >

    <img className="emotion_img" src={getOdungImage(emotionId)} />
    <div className="emotion_name">{emotionName}</div>

    </div>;

};

export default EmotionItem;