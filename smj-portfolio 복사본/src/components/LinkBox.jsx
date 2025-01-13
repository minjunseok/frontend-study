import '../css/LinkBox.css';

const LinkBox = ({ img, content, link }) => {

  const handleClick = () => {
    window.location.href = link; // 외부 링크로 이동
  };

  return (

    <div className="link-box"
      onClick={handleClick}>
        <div className='link-content'>
          <img src={img}></img>
          <h2>{content}</h2>
          <a href={link}>{link}</a>
      </div>
    </div>  
      
        

  );
};

export default LinkBox;