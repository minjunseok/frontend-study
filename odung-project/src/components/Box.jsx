
const Box = (props) => {

  let result;

  if(
    props.title === "💻 컴퓨터" &&
    props.result !== "draw" &&
    props.result !== "") {
      result = props.result === "win" ? "lose" : "win";
    } else {
      result = props.result;
    }

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
          <img 
          className="item-img"
          src={props.item && props.item.img}/>
      <h2>{result}</h2>
    </div>
    
  );
};

export default Box
