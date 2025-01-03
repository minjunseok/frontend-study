import '../css/Result.css'


const Result = (props) => {

  let message;

  if(props.result === "win") {

    message = "당신이 이겼습니다!👏";

  } else if(props.result === "lose") {

    message = "당신이 졌습니다!🥲";

  } else if(props.result === "draw") {

    message = "비겼습니다! 🙂";

  } else {

    return;

 
  }



  return (
    <div className={`result ${props.result}`}>
      {message}
    </div>
  )
}

export default Result
