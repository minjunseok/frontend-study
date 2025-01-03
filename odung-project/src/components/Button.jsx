


const Button = (props) => {


  return (
    <div>
      <button
      onClick={props.onClick}>
      <img src={props.img} />
      </button>
    </div>
  )
}

export default Button
