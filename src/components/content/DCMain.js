import About from './DC/About';
import Education from './DC/Education';

const DCMain = () => {
  return (
    <div className="dc-main">
      <div className="dc-main-grid">

        <About />
        <hr className="dc-hr"/>

        <Education />
        <hr className="dc-hr"/>

        © All Rights Reserved.
      </div>
    </div>
  )
}


export default DCMain;
