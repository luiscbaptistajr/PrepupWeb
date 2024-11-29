// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import imgPhone from './assets/phone.svg'
// import imgLogo from './images/PrepUpLogo.svg'
// import imgJobFinder from './images/JobFinder.svg'
// import imgInterviewSim from './images/InterviewSimulator.svg'
// import imgStarMaster from './images/STARMaster.svg'
// import viteLogo from '/vite.svg'
// import Image from './components/image'

import React from 'react';

import DevCard from './components/devcard';
import DesignerCard from './components/designercard';
import './App.css'

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  // const [count, setCount] = useState(0)
  // const URI = window.location.origin;

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">m
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      {/* Header */}
      <header className='width-full flex flex-nowrap justify-between'>
        <div className='w-full justify-start lg:w-1/3'>
          <a href="/" target="_blank">
            <img src="./images/PrepUpLogo.svg" className="logo flex-auto" alt="PrepUp logo" />
          </a>
        </div>
        
        <div className='width-2/3 justify-end self-center'>
          <ul className='nav grid grid-flow-col gap-4 justify-stretch'>
            <li className='body-link nav'><a href="#features">Features</a></li>
            <li className='body-link nav'><a href="#team">The Team</a></li>
            <li className='downloadBtn'><a href="" download>Download Proposal</a></li>
          </ul>
        </div>
        
        
      </header>

      {/* Main */}
      <main>

        {/* HERO SECTION */}
        <FadeInSection>
        <section className='hero-container py-14'>
          <div className='py-2.5 intro'>
            <h2>Practice interviews anywhere, on the go!</h2>
            <p className='body-text-sub'>Interviews may be daunting, but you&#39;ll never have to practice them alone.</p> 
            <p className='body-text-sub'>PrepUp is your inteview companion on-the-go!</p>
          </div>
          
          <div className='w-full flex flex-wrap xl:flex-nowrap justify-center mt-15 relative right-10'>
            <img src="./images/phone.png"  className="w-50 lg:w-1/3 flex-none relative right-21" alt="React logo" />
            <div className='self-start relative top-5'>
              <h4 className='header-title-h4 pb-2'>Learn about PrepUp</h4>
              {/* <img src="https://placehold.co/600x400" alt="" /> */}
              <iframe width="620" height="420" src="https://www.youtube.com/embed/jsgmtHCwTFI?si=0ZZW2MtL8mxCJX00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
          </div>
          
        </section>

        </FadeInSection>
          
        {/* FEATURES SECTION */}
          
        <FadeInSection>
        <section className='lg:px-24 py-14' id="features">
          <div className='grid grid-rows-2 grid-flow-col gap-4 lg:flex justify-between'>
            <div className='self-center w-full lg:w-1/2 text-left'>
              <h3 className='header-title-h3'>Interview Simulator</h3>
              <p className='body-text-sub grid-row-start-1 lg:grid-row-2'>Easily practice anywhere with AI-generated quick.</p>
            </div>
            <img src="./images/InterviewSimulator.svg" className="w-full lg:w-1/3" alt="Man holding the phone" />
          </div>

          <div className='grid grid-rows-2 grid-flow-col gap-4 lg:flex justify-between'>
            <img src="./images/JobFinder.svg" className="w-60" alt="Magnifying glass to find job" />
            <div className='w-full col-start-1 self-center lg:w-1/2 lg:row-start-2 text-left'>
              <h3 className='header-title-h3'>Job Finder</h3>
              <p className='body-text-sub'>Quickly browse through lists of tailored job roles based on your past or current occupation.</p>
            </div>
          </div>

          <div className='grid grid-rows-2 grid-flow-col gap-4 lg:flex justify-between'>
            <div className='w-full self-center lg:w-1/2 text-left'>
              <h3 className='header-title-h3'>S.T.A.R Master</h3>
              <p className='body-text-sub'>Want to test answering situational tasks? Take the Situation/Task/Action/Result (S.T.A.R.) Master!</p>
            </div>
            <img src="./images/STARMaster.svg" className="w-full  lg:w-1/3" alt="Star in a bubble" />
          </div>
          
        </section>
        </FadeInSection>

        {/* TEAM SECTION */}

        <FadeInSection>
        <section className='py-10' id="team">
          <h2>Meet Our Team</h2>
          <p className='py-10 body-text-sub'>Highly professional and capable  of running your business across all digital channels</p>

          <div className='flex justify-center'>
            
              <img src='./images/bts/PUBTS-01.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-02.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-03.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-04.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-05.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-06.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-07.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-09.jpg' className="w-80" alt="React logo" />
              <img src='./images/bts/PUBTS-11.jpg' className="w-80" alt="React logo" />
            
          </div>

        </section>
        </FadeInSection>

        <FadeInSection>
        <section>
          <h2 className='py-24'>Development Team</h2>

          <DevCard />

          <h2 className='py-24'>Design Team</h2>

          <DesignerCard />
          
        </section>
        </FadeInSection>
        
      </main>

      {/* Footer */}
      <footer className='grid rid-row-1 grid-flow-row align-center lg:mt-24 lg:mb-15 lg:grid lg:grid-col-1 lg:grid-flow-col lg:gap-4 lg:align-center'>
        <div>
          <img src="./images/PrepUpLogo.svg" className="logo flex-auto" alt="PrepUp logo" />
          <p className="body-text-copy">&copy; 2024 PrepUp. All rights reserved.</p>
        </div>
        
        <div>
            <p className='body-text-p1 text-right'>Download Our Proposal Now!</p>
            <p className='body-text-p1 text-right'><small>Start preparing for future inteviews with Prep</small></p>
          </div>
        <div>
          

          <div>
            <span className='downloadBtn'>
              <a href="" download>Download</a></span>
            {/* <a href="/" className=''>Download Proposal</a> */}
          </div>
        </div>

      </footer>
    </>
  )
}

export default App