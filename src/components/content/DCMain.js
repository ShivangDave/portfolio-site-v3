import About from './DC/About';
import Skills from './DC/Skills';
import Projects from './DC/Projects';

import { useState } from 'react';
import SKILLS from './DC/statics/skills'

const DCMain = () => {

  const [ skills, setSkills ] = useState(SKILLS)

  const filterSkills = (tags) => {
    if(tags.length > 0){
      setSkills(tags)
    }else{
      setSkills(SKILLS)
    }
  }

  return (
    <div className="dc-main">
      <div className="dc-main-grid">

        <About />
        <hr className="dc-hr"/>

        <Projects filterSkills={filterSkills} />

        <Skills skills={skills} />
        <hr className="dc-hr"/>

        © All Rights Reserved.
      </div>
    </div>
  )
}


export default DCMain;
