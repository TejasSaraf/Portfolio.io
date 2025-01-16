"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CSSProperties } from "react";
import Image from "next/image";

const button: CSSProperties = {
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginBottom: "1rem",
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.9,
      when: "beforeChildren",
      staggerChildren: 0.6,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.9,
      when: "afterChildren",
    },
  },
};

// Animation variants for individual list items
const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.9,
    },
  },
};

function Experience() {
  const [visibleSections, setVisibleSections] = useState({
    jio: false,
    elite: false,
    gravitech: false,
    exposys: false,
  });

  return (
    <div id="experience" className="experience">
      <div className="experienceLogo">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960">
          <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"></path>
        </svg>
        <span className="h1">Experience</span>
      </div>

      <div className="jio">
        <Image
          className="jioLogo"
          src="/Reliance_Jio_Logo.png"
          alt="Reliance Jio Logo"
          width={200}
          height={100}
        />
        <div className="jioDetails">
          <h2>Software Developer</h2>
          <span>Jio Platforms Limited</span>
          <span>Oct 2023 - July 2024</span>
          <span>Mumbai, India</span>
          <AnimatePresence mode="wait">
            {visibleSections.jio && (
              <motion.div
                className="content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ overflow: "hidden" }}
              >
                <motion.li variants={itemVariants}>
                  Developed a Resizing feature for camera feed on Immersive
                  Screen Share using AngularJS and Typescript, integrating Agora
                  RESTful service API and WebRTC API; optimized API calls with
                  5.5s query intervals.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Revamped JioEvents&apos; New Host UI by resolving 50+ critical
                  observations, significantly enhance the experience.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Enabled drag-resize on camera feeds with ngx-drag-resize
                  library, improving host background visibility by 99.9%.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Streamlined OTP verification with unifying email/phone fields,
                  dynamically updating API payloads for a seamless user
                  experience for over 10,000+ customers.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Contributed to front-end feature development, CI/CD pipeline
                  setup, and application deployment on GCP (Google Cloud
                  Platform), achieving 80% live event success rates.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Delivered dynamic components using Angular Routes, NgModule,
                  RxJS, Reactive Forms, Observables, and Services.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Integrated IFrame for Host Control, enabling attendee-side
                  rendering with real-time event previews.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Maintained frontend performance by 5% by resolving 20 cross
                  browser production bugs through effective debugging.
                </motion.li>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="details">
            <motion.button
              style={button}
              onClick={() =>
                setVisibleSections((prev) => ({ ...prev, jio: !prev.jio }))
              }
              whileTap={{ y: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {visibleSections.jio ? "Hide Details" : "Show Details"}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="eliteSoftwares">
        <Image
          className="eliteSoftwaresLogo"
          src="/elitesoftwares.png"
          alt="Elite Softwares Logo"
          width={200}
          height={100}
        />
        <div className="eliteDetails">
          <h2>Web Developer Intern</h2>
          <span>Elite Softwares</span>
          <span>Jan 2023 - Nov 2023</span>
          <span>Pune, India</span>
          <AnimatePresence mode="wait">
            {visibleSections.elite && (
              <motion.div
                className="content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ overflow: "hidden" }}
              >
                <motion.li variants={itemVariants}>
                  Designed College ERP features for faculty, enabling profile
                  updates and improving usability and control.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Boosted feature efficiency by 25% by building &quot;create
                  task&quot; and &quot;mark attendance&quot; functions with
                  ReactJS & Redux
                </motion.li>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="details">
            <motion.button
              style={button}
              onClick={() =>
                setVisibleSections((prev) => ({ ...prev, elite: !prev.elite }))
              }
              whileTap={{ y: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {visibleSections.elite ? "Hide Details" : "Show Details"}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="gravitechDreams">
        <Image
          className="gravitechDreamsLogo"
          src="/gravitechDreams.png"
          alt="Gravitech Dreams Logo"
          width={200}
          height={100}
        />
        <div className="gravitechDetails">
          <h2>Software Engineer Intern</h2>
          <span>Gravitech Dreams Pvt Ltd</span>
          <span>Jan 2023 - June 2023</span>
          <span>Pune, India</span>
          <AnimatePresence mode="wait">
            {visibleSections.gravitech && (
              <motion.div
                className="content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ overflow: "hidden" }}
              >
                <motion.li variants={itemVariants}>
                  Enhanced a social media handler app with NodeJS, JavaScript, &
                  MySQL, improving user engagement significantly.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Automated post scheduling for 5 platforms while ensuring SDLC
                  compliance for reliable performance.
                </motion.li>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="details">
            <motion.button
              style={button}
              onClick={() =>
                setVisibleSections((prev) => ({
                  ...prev,
                  gravitech: !prev.gravitech,
                }))
              }
              whileTap={{ y: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              {visibleSections.gravitech ? "Hide Details" : "Show Details"}
            </motion.button>
          </div>
        </div>
      </div>

      <div className="exposysLabs">
        <Image
          className="exposysLabsLogo"
          src="/exposys.jpg"
          alt="Exposys Labs Logo"
          width={200}
          height={100}
        />
        <div className="exposysDetails">
          <h2>Web Developer Intern</h2>
          <span>Exposys Data Labs</span>
          <span>Dec 2021 - Jan 2022</span>
          <span>Remote</span>
          <AnimatePresence mode="wait">
            {visibleSections.exposys && (
              <motion.div
                className="content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ overflow: "hidden" }}
              >
                <motion.li variants={itemVariants}>
                  Built a responsive blogging website with CRUD for admin users
                  using Python, tripling page views for the platform.
                </motion.li>
                <motion.li variants={itemVariants}>
                  Developed content management features, empowering users to
                  create and customize blogs effortlessly.
                </motion.li>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="details">
            <motion.button
              style={button}
              onClick={() =>
                setVisibleSections((prev) => ({
                  ...prev,
                  exposys: !prev.exposys,
                }))
              }
              whileTap={{ y: 1 }}
              whileHover={{ scale: 1.05 }}
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
