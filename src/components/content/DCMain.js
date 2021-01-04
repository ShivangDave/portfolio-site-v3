import About from './DC/About';
import Skills from './DC/Skills';
import Projects from './DC/Projects';

const DCMain = () => {
  return (
    <div className="dc-main">
      <div className="dc-main-grid">

        <About />
        <hr className="dc-hr"/>

        <Projects />
        <Skills />
        <hr className="dc-hr"/>

        © All Rights Reserved.
      </div>
    </div>
  )
}


export default DCMain;
