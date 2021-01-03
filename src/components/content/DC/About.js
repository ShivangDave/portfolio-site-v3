import avatar from '../../../styles/imgs/about/avatar.jpeg';
import apps from '../../../styles/imgs/about/apps-100.png';
import board from '../../../styles/imgs/about/board-100.png';
import cloud from '../../../styles/imgs/about/cloud-100.png';

const About = () => {
  return (
    <div className="dc-main-grid-item">

      <section className="info-container">
        <p className="info-icon-parent">
          <img src={apps} alt={''} />
          Software Engineer
        </p>

        <p className="info-icon-parent">
          <img src={board} alt={''} />
          Educator
        </p>

        <p className="info-icon-parent">
          <img src={cloud} alt={''} />
          Cloud Enthusiast
        </p>
      </section>

      

    </div>
  )
}

export default About;
