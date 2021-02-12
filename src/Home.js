import React from 'react';
// import ReactCursorPosition from 'react-cursor-position';
import TextLoop from "react-text-loop";
// import { RiCodeSSlashFill, RiLinkedinBoxLine, RiGithubLine, RiAdminLine } from "react-icons/ri";
import { RiLinkedinBoxLine, RiAdminLine } from "react-icons/ri";
import { useClickOutside } from './hooks';

import './App.scss';
// import Skills from './Skills';

const App = (props) => {

    const clickRef = React.useRef();
    const close = () => setPrivateAccess(false);
    useClickOutside(clickRef, close);

    const titles = [
        'digital crafter',
        'frontend architect',
        'frontend developer',
        'UI developer',
        'application developer',
    ];
    
    // const [hoverTitle, setHoverTitle] = React.useState(null);
    const [interval, setInterval] = React.useState(3000);
    const [privateAccess, setPrivateAccess] = React.useState(false);

    const handlePrivateSpace = () => setPrivateAccess(true);

    return (
        <>
            <section className={`home ${privateAccess ? 'home--privateAccess' : ''}`}>
                <div className='inner'>
                    <h1>sebastien dumont</h1>
                    <h2 onMouseEnter={() => setInterval(0)} onMouseLeave={() => setInterval(3000)}>
                        <TextLoop interval={interval} springConfig={{ stiffness: 180, damping: 12 }} mask fade={false}>
                            { 
                            // hoverTitle
                            //     ? (<span className="glitched" data-glitch={hoverTitle}>{hoverTitle}</span>)
                            //     : titles.map((title, i) => <React.Fragment key={i}><span className="glitched" data-glitch={title}>{title}</span></React.Fragment>)
                                titles.map((title, i) => <React.Fragment key={i}><span className="glitched" data-glitch={title}>{title}</span></React.Fragment>)
                            }
                        </TextLoop>
                    </h2>
                    <nav>
                        <ul>
                            {/* <li
                                // onMouseEnter={() => setHoverTitle('skillset')}
                                // onMouseLeave={() => setHoverTitle(null)}
                                >
                                <RiCodeSSlashFill color="white" />
                                <span>skillset</span>
                            </li> */}
                            <li
                                // onMouseEnter={() => setHoverTitle('experience')}
                                // onMouseLeave={() => setHoverTitle(null)}
                                onClick={() => window.open('https://www.linkedin.com/in/sebastiendumont/')}>
                                <RiLinkedinBoxLine color="white" />
                                <span>work</span>
                            </li>
                            {/* <li
                                onMouseEnter={() => setHoverTitle('experience')}
                                onMouseLeave={() => setHoverTitle(null)}
                                onClick={() => window.open('https://www.linkedin.com/in/sebastiendumont/')}>
                                <RiGithubLine color="white" />
                                <span>showcase</span>
                            </li> */}
                            <li
                                // onMouseEnter={() => setHoverTitle('restricted area')}
                                // onMouseLeave={() => setHoverTitle(null)}
                                onClick={handlePrivateSpace}>
                                <RiAdminLine color="white"  />
                                <span>private</span>
                            </li>
                        </ul>
                    </nav>
                
                    {
                        privateAccess && (
                        <form>
                            <div className="form-item">
                                <RiAdminLine color="white"  />
                                <input placeholder="password" type="password" autoFocus ref={clickRef}/>
                            </div>
                            <div className="form-helper">Hit &lt;enter&gt; to submit</div>
                        </form>
                        )
                    }
                </div>
            </section>
            {/* <Skills /> */}
        </>
    );
};

// const App = () => (
//     <ReactCursorPosition>
//         <CursorPosition />
//     </ReactCursorPosition>
// );

export default App;
