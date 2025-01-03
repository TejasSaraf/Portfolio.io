"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { CSSProperties } from "react";
import Image from 'next/image';

const container: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '1rem',
  width: '100%'
};

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
    <div className="experience">
      <h1>Experience</h1>

      <div className="jio">
        <Image className="jioLogo" src="/Reliance_Jio_Logo.png" 
        alt="Reliance Jio Logo" 
        width={200} 
        height={100} />
        <div className="jioDetails">
          <span>Software Developer</span>
          <span>Jio Platforms Limited</span>
          <span>Oct 2023 - July 2024</span>
          <span>Mumbai, India</span>
          <div style={container}>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, jio: !prev.jio }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.jio ? "Hide Details" : "Show Details"}
            </motion.button>
            <AnimatePresence>
              {visibleSections.jio && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <span>Developed a Resizing feature for camera feed on Immersive Screen Share using AngularJS and Typescript, integrating Agora RESTful service API and WebRTC API; optimized API calls with 5.5s query intervals.</span><br></br>
                  <span>Revamped JioEvents&apos; New Host UI by resolving 50+ critical observations, significantly enhance the experience.</span><br></br>
                  <span>Enabled drag-resize on camera feeds with ngx-drag-resize library, improving host background visibility by 99.9%.</span><br></br>
                  <span>Streamlined OTP verification with unifying email/phone fields, dynamically updating API payloads for a seamless user experience for over 10,000+ customers.</span><br></br>
                  <span>Contributed to front-end feature development, CI/CD pipeline setup, and application deployment on GCP (Google Cloud Platform), achieving 80% live event success rates.</span><br></br>
                  <span>Delivered dynamic components using Angular Routes, NgModule, RxJS, Reactive Forms, Observables, and Services.</span><br></br>
                  <span>Integrated IFrame for Host Control, enabling attendee-side rendering with real-time event previews.</span><br></br>
                  <span>Maintained frontend performance by 5% by resolving 20 cross browser production bugs through effective debugging.</span><br></br>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="eliteSoftwares">
        <Image className="eliteSoftwaresLogo" src="/elitesoftwares.jpg" 
        alt="Elite Softwares Logo" 
        width={200} 
        height={100} />
        <div className="eliteDetails">
          <span>Web Developer Intern</span>
          <span>Elite Softwares</span>
          <span>Jan 2023 - Nov 2023</span>
          <span>Pune, India</span>
          <div style={container}>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, elite: !prev.elite }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.elite ? "Hide Details" : "Show Details"}
            </motion.button>
            <AnimatePresence>
              {visibleSections.elite && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <span>Designed College ERP features for faculty, enabling profile updates and improving usability and control.</span>
                  <span>Boosted feature efficiency by 25% by building &quot;create task&quot; and &quot;mark attendance&quot; functions with ReactJS & Redux</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="gravitechDreams">
        <Image className="gravitechDreamsLogo" src="/gravitechDreams.png" 
        alt="Gravitech Dreams Logo" 
        width={200} 
        height={100} />
        <div className="gravitechDetails">
          <span>Software Engineer Intern</span>
          <span>Gravitech Dreams Pvt Ltd</span>
          <span>Jan 2023 - June 2023</span>
          <span>Pune, India</span>
          <div style={container}>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, gravitech: !prev.gravitech }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.gravitech ? "Hide Details" : "Show Details"}
            </motion.button>
            <AnimatePresence>
              {visibleSections.gravitech && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <span>Enhanced a social media handler app with NodeJS, JavaScript, & MySQL, improving user engagement significantly.</span>
                  <span>Automated post scheduling for 5 platforms while ensuring SDLC compliance for reliable performance.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="exposysLabs">
        <Image className="exposysLabsLogo" src="/exposys.jpg" 
        alt="Exposys Labs Logo" 
        width={200} 
        height={100} />
        <div className="exposysDetails">
          <span>Web Developer Intern</span>
          <span>Exposys Data Labs</span>
          <span>Dec 2021 - Jan 2022</span>
          <span>Remote</span>
          <div style={container}>
            <motion.button
              style={button}
              onClick={() => setVisibleSections(prev => ({ ...prev, exposys: !prev.exposys }))}
              whileTap={{ y: 1 }}
            >
              {visibleSections.exposys ? "Hide Details" : "Show Details"}
            </motion.button>
            <AnimatePresence>
              {visibleSections.exposys && (
                <motion.div
                  className="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <span>Built a responsive blogging website with CRUD for admin users using Python, tripling page views for the platform.</span>
                  <span>Developed content management features, empowering users to create and customize blogs effortlessly.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;