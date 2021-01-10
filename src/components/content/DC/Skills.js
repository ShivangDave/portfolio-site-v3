import SKILLS from './statics/skills'

const Skills = ({ skills }) => {

  const renderFiltered = skills.length > 0 ? true : false
  const renderSkills = renderFiltered ? skills.filter(key => Object.keys(SKILLS).includes(key)) : Object.keys(SKILLS)

  return (
    <div className="dc-main-grid-item">
      <div className="skills-parent">
        {
          renderSkills.map(k => (
            <img src={SKILLS[k]} key={k} alt={k} />
          ))
        }
      </div>
    </div>
  )
}

export default Skills;
