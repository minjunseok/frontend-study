const Button = ({color = "black", text,children}) => {


  //이벤트 객체


  const onClickButton = (e)=>{
    
    console.log(e);
    console.log(text);

  }

  console.log({color, text});
  return  (
  <button
  onClick={onClickButton}
  // onMouseEnter={onClickButton}


   style={{ color: color }}>

    {text} - {color.toUpperCase()}
    {children}
    </button>
    );
};


export default Button;