import '../css/SkillItem.css';

const SkillItem = ({skillsData}) => {

  const colorPalette = [
    "#FFB6C1", "#FFD700", "#98FB98", "#AFEEEE", "#ADD8E6",
    "#87CEFA", "#FF69B4", "#CD5C5C", "#FFDAB9", "#E6E6FA",
    "#FFA07A", "#20B2AA", "#B0C4DE", "#FFC0CB", "#DDA0DD",
    "#FAFAD2", "#B0E0E6", "#40E0D0", "#FF6347", "#8FBC8F",
    "#DAA520", "#EEE8AA", "#7FFFD4", "#FFDEAD"
  ];


  return (
    <div>
       
      <div className='skills-content'>
      <h1>SKILLS</h1>
        {skillsData.map((skill, index) => (
          <div key={index} className='skill-category'>
            <img src={skill.img} className='skill-icon' />
            <h4> {skill.category} </h4>
            <div className="skills-list">
              {skill.skills.map((skillName, idx) => (
                <span
                  key={idx}
                  className={`skill-box color-${(index * skill.skills.length + idx) % colorPalette.length}`}
                >
                  {skillName}
                </span>
              ))}
            </div>
            
          </div>  
        ))}
      </div>
    </div>
  )
}

export default SkillItem
