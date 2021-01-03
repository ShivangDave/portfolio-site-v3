import About from './DC/About';
import Skills from './DC/Skills';

const DCMain = () => {
  return (
    <div className="dc-main">
      <div className="dc-main-grid">

        <About />
        <hr className="dc-hr"/>

        <Skills />
        <hr className="dc-hr"/>

        © All Rights Reserved.
      </div>
    </div>
  )
}


export default DCMain;
