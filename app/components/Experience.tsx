"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { CSSProperties } from "react";
import Image from 'next/image';

const button: CSSProperties = {
  border: 'none',
  borderRadius: '4px',
  textDecoration: 'underline',
  color: 'black',
  cursor: 'pointer',
  marginBottom: '1rem'
};

function Experience() {
  const [visibleSections, setVisibleSections] = useState({
    jio: true,
    elite: true,
    gravitech: true,
    exposys: true
  });
  
  return (
    <div id='experience' className="experience">
      <div className="experienceLogo">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"></path></svg>
      <span className='h1'>Experience</span>
      </div>

      <div className="jio">
        <Image className="jioLogo" src="/Reliance_Jio_Logo.png" 
        alt="Reliance Jio Logo" 
        width={200} 
        height={100} />
        <div className="jioDetails">
          <h2>Software Developer</h2>
          <span>Jio Platforms Limited</span>
          <span>Oct 2023 - July 2024</span>
          <span>Mumbai, India</span>
            <AnimatePresence>
              {visibleSections.jio && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <li>Developed a Resizing feature for camera feed on Immersive Screen Share using AngularJS and Typescript, integrating Agora RESTful service API and WebRTC API; optimized API calls with 5.5s query intervals.</li>
                  <li>Revamped JioEvents&apos; New Host UI by resolving 50+ critical observations, significantly enhance the experience.</li>
                  <li>Enabled drag-resize on camera feeds with ngx-drag-resize library, improving host background visibility by 99.9%.</li>
                  <li>Streamlined OTP verification with unifying email/phone fields, dynamically updating API payloads for a seamless user experience for over 10,000+ customers.</li>
                  <li>Contributed to front-end feature development, CI/CD pipeline setup, and application deployment on GCP (Google Cloud Platform), achieving 80% live event success rates.</li>
                  <li>Delivered dynamic components using Angular Routes, NgModule, RxJS, Reactive Forms, Observables, and Services.</li>
                  <li>Integrated IFrame for Host Control, enabling attendee-side rendering with real-time event previews.</li>
                  <li>Maintained frontend performance by 5% by resolving 20 cross browser production bugs through effective debugging.</li>
                </motion.div>
              )}
            </AnimatePresence>
            <div className='details'>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, jio: !prev.jio }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.jio ? "Hide Details" : "Show Details"}
            </motion.button>
            </div>
        </div>
      </div>

      <div className="eliteSoftwares">
        <Image className="eliteSoftwaresLogo" src="/elitesoftwares.png" 
        alt="Elite Softwares Logo" 
        width={200} 
        height={100} />
        <div className="eliteDetails">
          <h2>Web Developer Intern</h2>
          <span>Elite Softwares</span>
          <span>Jan 2023 - Nov 2023</span>
          <span>Pune, India</span>
            <AnimatePresence>
              {visibleSections.elite && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <li>Designed College ERP features for faculty, enabling profile updates and improving usability and control.</li>
                  <li>Boosted feature efficiency by 25% by building &quot;create task&quot; and &quot;mark attendance&quot; functions with ReactJS & Redux</li>
                </motion.div>
              )}
            </AnimatePresence>
            <div className='details'>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, elite: !prev.elite }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.elite ? "Hide Details" : "Show Details"}
            </motion.button>
            </div>
        </div>
      </div>

      <div className="gravitechDreams">
        <Image className="gravitechDreamsLogo" src="/gravitechDreams.png" 
        alt="Gravitech Dreams Logo" 
        width={200} 
        height={100} />
        <div className="gravitechDetails">
          <h2>Software Engineer Intern</h2>
          <span>Gravitech Dreams Pvt Ltd</span>
          <span>Jan 2023 - June 2023</span>
          <span>Pune, India</span>
            <AnimatePresence>
              {visibleSections.gravitech && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <li>Enhanced a social media handler app with NodeJS, JavaScript, & MySQL, improving user engagement significantly.</li>
                  <li>Automated post scheduling for 5 platforms while ensuring SDLC compliance for reliable performance.</li>
                </motion.div>
              )}
            </AnimatePresence>
            <div className='details'>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, gravitech: !prev.gravitech }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.gravitech ? "Hide Details" : "Show Details"}
            </motion.button>
            </div>
        </div>
      </div>

      <div className="exposysLabs">
        <Image className="exposysLabsLogo" src="/exposys.jpg" 
        alt="Exposys Labs Logo" 
        width={200} 
        height={100} />
        <div className="exposysDetails">
          <h2>Web Developer Intern</h2>
          <span>Exposys Data Labs</span>
          <span>Dec 2021 - Jan 2022</span>
          <span>Remote</span>
            <AnimatePresence>
              {visibleSections.exposys && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <li>Built a responsive blogging website with CRUD for admin users using Python, tripling page views for the platform.</li>
                  <li>Developed content management features, empowering users to create and customize blogs effortlessly.</li>
                </motion.div>
              )}
            </AnimatePresence>
            <div className='details'>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, exposys: !prev.exposys }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.exposys ? "Hide Details" : "Show Details"}
            </motion.button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;