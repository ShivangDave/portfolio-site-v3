import SKILLS from './statics/skills'

const Skills = () => {

  return (
    <div className="dc-main-grid-item">
      <div className="skills-parent">
        {
          Object.keys(SKILLS).map(k => (
            <img src={SKILLS[k]} alt={k} />
          ))
        }
      </div>
    </div>
  )
}

export default Skills;
