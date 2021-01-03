import degree from '../../../styles/imgs/education/degree-100.png';
import grad from '../../../styles/imgs/education/m-graduation-100.png';

const Education = () => {
  return (
    <div className="dc-main-grid-item">

      <div className="education-container">
        <section>
          <img src={grad} alt={''}/>
          <p> M.S. Computer Science</p>
          <p> UH - Clear Lake </p>
          <p> January 2017 - December 2018</p>
        </section>

        <section>
          <img src={degree} alt={''}/>
          <p> B.E. Information Technology</p>
          <p> Gujarat Technological University </p>
          <p> June 2012 - June 2016</p>
        </section>
      </div>

      <a className="resume-btn" href="https://google.com" target="_blank" rel="noreferrer">
        RESUME
      </a>

    </div>
  )
}

export default Education;
