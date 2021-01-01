import github from '../../styles/imgs/github-144.png';
import medium from '../../styles/imgs/medium-144.png';
import music from '../../styles/imgs/music-100.png';
import twitter from '../../styles/imgs/twitter-144.png';
import linkedin from '../../styles/imgs/linkedin-144.png';

const SCAbout = () => {
  return (
    <div className="sc-about">

      <span className="sc-name-social-container">

        <span className="sc-about-name">
          🆂🅷🅸🆅🅰🅽🅶
          <hr/>
        </span>

        <span className="sc-social">

          <a href={'https://github.com/shivangdave'} target={'_blank'} rel="noreferrer" className="sc-social-btns">
            <img src={github} alt={''} />
          </a>

          <a href={'https://shivang-dave.medium.com/'} target={'_blank'} rel="noreferrer" className="sc-social-btns">
            <img src={medium} alt={''} />
          </a>

          <a href={'https://music.apple.com/profile/shivangdave'} target={'_blank'} rel="noreferrer" className="sc-social-btns">
            <img src={music} alt={''} />
          </a>

          <a href={'https://twitter.com/@___Shivang___'} target={'_blank'} rel="noreferrer" className="sc-social-btns">
            <img src={twitter} alt={''} />
          </a>

          <a href={'https://linkedin.com/in/dshivang'} target={'_blank'} rel="noreferrer" className="sc-social-btns">
            <img src={linkedin} alt={''} />
          </a>

        </span>

      </span>
    </div>
  )
}


export default SCAbout;
