
const Button = (props) => {
  return (
    <div>
      <button
      onClick={props.onClick}
      >{props.name}</button>
    </div>
  )
}

export default Button
