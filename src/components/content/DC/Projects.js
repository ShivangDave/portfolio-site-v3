import code from '../../../styles/imgs/skills/code-100.png';
import stack from '../../../styles/imgs/skills/stack-100.png';

const projects = require('./statics/projects.json');

const Projects = () => {

  return (
    <div className="dc-main-grid-item">
      <div className="projects-parent">
        {
          projects.projects.map(p => (
            <div className="project-card">
              <img src={p.img} alt={''} />
              <p> {p.title} </p>

              <div className="pinfo-container">
                <img src={stack} alt={''} />

                <a href={p.desc.url} target={'_blank'} rel="noreferrer">
                  <img src={code} alt={''} />
                </a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;
