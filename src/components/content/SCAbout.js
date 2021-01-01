import github from '../../styles/imgs/github-144.png';

const SCAbout = () => {
  return (
    <div className="sc-about">

      <span className="sc-about-name">
        🆂🅷🅸🆅🅰🅽🅶
        <hr/>
      </span>

      <span className="sc-social">

        <a href={'https://google.com'} target={'_blank'} className="sc-social-btns">
          <img src={github} alt={''} />
        </a>

        <a href={'https://google.com'} target={'_blank'} className="sc-social-btns">
          <img src={github} alt={''} />
        </a>

        <a href={'https://google.com'} target={'_blank'} className="sc-social-btns">
          <img src={github} alt={''} />
        </a>

        <a href={'https://google.com'} target={'_blank'} className="sc-social-btns">
          <img src={github} alt={''} />
        </a>

      </span>
    </div>
  )
}


export default SCAbout;
