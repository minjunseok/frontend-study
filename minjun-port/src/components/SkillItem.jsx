const SkillItem = ({skillsData}) => {
  return (
    <div>
       <h1>Skills</h1>
      <div className='content'>
        {skillsData.map((skill, index) => (
          <div key={index} className='skill-category'>
            <img src={skill.img}/>
            <h4> {skill.category} {skill.skills.join(' ')}</h4>
            
          </div>  
        ))}
      </div>
    </div>
  )
}

export default SkillItem
