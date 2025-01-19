import { Link } from "react-router-dom"

const Argreement = () => {
  return (
    <div className="agreement-containner">
      약관동의 페이지입니다.
      <input type="checkbox">
      </input>

      <Link to='/certification'>
        <button>다음</button>
      </Link>
    </div>


  )
}

export default Argreement
