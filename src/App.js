import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import './App.css';

import  {ReactComponent as Bagel}  from './bagel.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJs, faSass, faLess, faNodeJs, faReact, faVuejs, faGitAlt, faNpm, faYarn,
  faPhp, faWordpress, faDrupal, faGrav, faMagento,
  faDocker, faAws, faAdobe } from '@fortawesome/free-brands-svg-icons';

  import Computer from './Computer';
  import Skills from './Skills';



const CursorPosition = (props) => {

  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false
    } = {},
    elementDimensions: {
      width = 0,
      height = 0
    } = {},
    isActive = false,
    isPositionOutside = false,
    position: {
      x = 0,
      y = 0
    } = {}
  } = props;


  return (
    <>
      <article>
      {/* <div className="example__label">
      {`x: ${x}`}<br />
      {`y: ${y}`}<br />
      {`width:: ${width}`}<br />
      {`height: ${height}`}<br />
      {`isActive: ${isActive}`}<br />
      {`isPositionOutside: ${isPositionOutside ? 'true' : 'false'}`}<br />
      {`isMouseDetected: ${isMouseDetected ? 'true' : 'false'}`}<br />
            {`isTouchDetected: ${isTouchDetected ? 'true' : 'false'}`}
    </div> */}
        <Bagel />
        <Skills />
        <div className="img">
          <img src="assets/avatar.jpg" alt=""/>
        </div>
        <h1>sebastien dumont<br />
        <div style={{display: 'flex', alignItems: 'flex-end'}}>
          <div style={{flex: '1 1 auto', display: 'flex'}}>
            <Computer />
          </div>
          <div style={{flex: '1 1 auto'}}>
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss3Alt} />
            <FontAwesomeIcon icon={faSass} />
            <FontAwesomeIcon icon={faLess} />
            <br />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faNodeJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faVuejs} />
            <FontAwesomeIcon icon={faNpm} />
            <FontAwesomeIcon icon={faYarn} />
            <FontAwesomeIcon icon={faGitAlt} />
            <br />
            <FontAwesomeIcon icon={faPhp} />
            <FontAwesomeIcon icon={faWordpress} />
            <FontAwesomeIcon icon={faGrav} />
            <FontAwesomeIcon icon={faDrupal} />
            <FontAwesomeIcon icon={faMagento} />
            <FontAwesomeIcon icon={faAdobe} />
          </div>
        </div>
        
        <br />
  <span>.occupation &#123;<em>content: "web-developper";</em><em>length: {new Date().getFullYear() - 2004}years;</em>&#125;</span></h1>
      </article>
        
      <video autoPlay loop id="video-background" muted plays-inline="true" poster="assets/poster.jpg">
        {/* <source src="AstonishingDifferentGuernseycow-mobile.mp4" type="video/mp4"> */}
        {/* <source src="/assets/nd07t8u0l3qx8mczuwlo.tablet.mp4" type="video/mp4" />
        <source src="http://toad-online.com/dist/video/Aloha-Mundo.mp4" /> */}
        {/* <source src="/assets/Words.mp4" type="video/mp4"></source> */}
        {/* <source src="DescriptiveEqualEgg-mobile.mp4" type="video/mp4">
        <source src="FarawayShockingAzurewingedmagpie-mobile.mp4" type="video/mp4"> */}
      </video>

      {/* <div id="follower" style={{left: x, top: y}}>
        <div id="circle1"></div>
        <span>scroll</span>  
      </div> */}
    </>
  );
}

const App = () => (
  <ReactCursorPosition>
      <CursorPosition />
  </ReactCursorPosition>
);

export default App;
