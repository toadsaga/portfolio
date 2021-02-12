import React from 'react';
import ReactCursorPosition from 'react-cursor-position';
import TextLoop from "react-text-loop";
import './App.scss';
import { useScrollPosition, useClickOutside } from './hooks';

import { ReactComponent as Bagel } from './bagel.svg';

import Computer from './Computer';
import Skills from './Skills';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faBrain, faLock } from '@fortawesome/free-solid-svg-icons';
import { VscGithubAlt } from "react-icons/vsc";

const CursorPosition = (props) => {
    // const {
    //   detectedEnvironment: {
    //     isMouseDetected = false,
    //     isTouchDetected = false
    //   } = {},
    //   elementDimensions: {
    //     width = 0,
    //     height = 0
    //   } = {},
    //   isActive = false,
    //   isPositionOutside = false,
    //   position: {
    //     x = 0,
    //     y = 0
    //   } = {}
    // } = props;
    const clickRef = React.useRef();
    const close = () => setPrivateAccess(false);
    useClickOutside(clickRef, close);

    const [titles, setTitles] = React.useState([
        'digital crafter',
        'frontend architect',
        'frontend developer',
        'UI developer',
        'application developer',
    ]);
    
    const [hoverTitle, setHoverTitle] = React.useState(null);

    const [interval, setInterval] = React.useState(3000);
    const [zoom, setZoom] = React.useState(4);
    const [privateAccess, setPrivateAccess] = React.useState(false);

    // const randomTitle = () => {
    //     let arr = titles;
    //     arr = arr.filter((item) => item !== title);
    //     setTitle(arr[Math.floor(Math.random() * arr.length)]);
    // };

    const handlePrivateSpace = () => {
      setPrivateAccess(true);
    }

    useScrollPosition(({ prevPos, currPos }) => {
        const delta = currPos.y * -1 > window.innerHeight ? 1 : 4 + currPos.y / (window.innerHeight / 10);
        setZoom(delta <= 1 ? 1 : delta * 1.2);
    });
    return (
        <>
            <Bagel />
            {/* <div
                className='layer'
                style={{
                    transform: `scale(${4 / zoom})`,
                    // opacity: `calc(${zoom <= 1 ? 1 : zoom * 1.2} / 4 - .25)`
                }}>
                <div
                    className='html'
                    style={{
                        position: 'absolute',
                        top: '10%',
                        left: '-10%',
                    }}>
                    &lt;html&thinsp;/&gt;
                </div>
                <div
                    className='html'
                    style={{
                        fontSize: '10vh',
                        position: 'absolute',
                        bottom: '50%',
                        whiteSpace: 'nowrap',
                        opacity: `calc( ${4 / zoom} - 0.8)`,
                        left: '60%',
                    }}>
                    import &#123; Packages &#125; from
                </div>
            </div> */}
            <article className='home'>
                <div
                    className={`home-inner ${privateAccess ? 'home--privateAccess' : ''}`}
                    style={
                        {
                            // transform: `translateY(calc(100vh - ${zoom * 20}vh)) scale(calc(${zoom} / 4))`,
                            // transform: `scale(calc(5 / ${zoom}))`,
                            // opacity: `calc(${zoom <= 1 ? 1 : zoom * 1.2} / 4 - .25)`
                        }
                    }>
                    <div className='inner'>
                        <h1>sebastien dumont</h1>
                        <h2 onMouseEnter={() => setInterval(0)} onMouseLeave={() => setInterval(3000)}>
                            &#123;&nbsp;
                            <TextLoop interval={interval} springConfig={{ stiffness: 180, damping: 12 }} mask fade={false}>
                              { 
                                hoverTitle
                                    ? (<span className="glitched" data-glitch={hoverTitle}>{hoverTitle}</span>)
                                    : titles.map((title, i) => <React.Fragment key={i}><span className="glitched" data-glitch={title}>{title}</span></React.Fragment>)
                              }
                            </TextLoop>
                            &nbsp;&#125;
                        </h2>
                        <nav>
                            <ul>
                                <li
                                    onMouseEnter={() => setHoverTitle('skillset')}
                                    onMouseLeave={() => setHoverTitle(null)}
                                    style={{margin: '.5em'}}>
                                    <FontAwesomeIcon icon={faBrain} color="white" />
                                </li>
                                <li
                                    onMouseEnter={() => setHoverTitle('experience')}
                                    onMouseLeave={() => setHoverTitle(null)}
                                    onClick={() => window.open('https://www.linkedin.com/in/sebastiendumont/')}
                                    style={{margin: '.5em'}}>
                                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                                </li>
                                <li
                                    onMouseEnter={() => setHoverTitle('experience')}
                                    onMouseLeave={() => setHoverTitle(null)}
                                    onClick={() => window.open('https://www.linkedin.com/in/sebastiendumont/')}
                                    style={{margin: '.5em'}}>
                                    <VscGithubAlt color="white" />
                                </li>
                                <li
                                    onMouseEnter={() => setHoverTitle('restricted area')}
                                    onMouseLeave={() => setHoverTitle(null)}
                                    onClick={handlePrivateSpace}
                                    style={{margin: '.5em'}}>
                                    <FontAwesomeIcon icon={faLock} color="white"  /></li>
                            </ul>
                        </nav>
                    </div>
                    {
                      privateAccess && (
                        <div ref={clickRef} style={{position: 'relative', display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '2em auto 0', zIndex: 2}}>
                          <input placeholder="password" style={{dispaly: 'block', textAlign: 'center', fontSize: '6em', margin: '1em auto', caretColor: 'white'}} type="text" autoFocus/>
                          <div>Hit &lt;enter&gt; to submit</div>
                        </div>
                      )
                    }
                    
                </div>
            </article>
            {/* <article className='about' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                <div className='inner' style={{ transform: `translateY(-${zoom * 20}vh) scale(${zoom})` }}>
                    <Computer />
                </div>
            </article>
            <Skills /> */}
        </>
    );
};

const App = () => (
    <ReactCursorPosition>
        <CursorPosition />
    </ReactCursorPosition>
);

export default App;
