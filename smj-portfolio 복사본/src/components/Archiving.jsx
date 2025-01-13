import '../css/Archiving.css';


import LinkBox from './LinkBox';

const linkItems = [
  {
  img: 'https://velog.velcdn.com/images/jonghyun0429p/post/17372183-14dd-41c2-ae97-738bd25c9276/image.png',
  content: '소스 코드 보관소',
  link: 'https://github.com/minjunseok'
  },
  {
    img: 'https://velog.velcdn.com/images/hyeongjun/post/5fff0129-f29b-4dfa-b28b-f3af0e11ed4f/image.png',
    content: '개발 관련 학습 및 학습 내용 공유 블로그',
    link: 'https://velog.io/@minjunseok/posts'
  }
];


const Archiving = () => {
  return (
    <section id='Archiving' className='archive-containner'>
      
        <h1>ARCHIVING</h1>
        <div className='archive-content'>
        {linkItems.map((item, index) => (
            <LinkBox
              key={index}
              img={item.img}
              content={item.content}
              link={item.link}
            />
          ))}
      </div>
      
  </section>
  )
}

export default Archiving
