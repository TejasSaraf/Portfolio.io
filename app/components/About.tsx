"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

function About() {
  const [activeSection, setActiveSection] = useState("everyone");

  const fadeInOut = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  const buttonVariants = {
    active: {
      backgroundColor: "hsl(265 83% 57%)",
      color: "white",
      scale: 1.05,
      borderRadius: "25px",
      padding: "0px  10px",
    },
    inactive: {
      backgroundColor: "#E5E7EB",
      color: "black",
      scale: 1,
      border: "1px solid hsl(265 83% 57%)",
      borderRadius: "25px",
      padding: "0px  10px",
    },
  };

  return (
    <div id="about" className="about">
      <div className="aboutTitle">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960">
          <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path>
        </svg>
        <span className="h1">About</span>
      </div>

      <LayoutGroup>
        <div className="aboutCategories">
          {["everyone", "recruiter"].map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className="aboutButtons capitalize"
              variants={buttonVariants}
              animate={activeSection === section ? "active" : "inactive"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              {section}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            {...fadeInOut}
            className="grid grid-cols-1 gap-6"
            layout
          >
            {activeSection === "everyone" && (
              <motion.div
                className="everyoneContent"
                whileHover={{ y: -5 }}
                layout
              >
                <div className="everyone">
                  <motion.span layout>
                    As a driven Software Developer with hands-on experience
                    across web and software development, I'm passionate about
                    crafting high-performance applications that improve user
                    experiences. Currently pursuing a Master's in Information
                    Technology and Management at Illinois Institute of
                    Technology, I bring over a year of professional experience
                    in diverse roles within established organizations like Jio
                    Platforms Limited, where I led impactful projects improving
                    and streamlining frontend features.
                  </motion.span>
                  <motion.span layout>
                    I thrive in collaborative, agile environments and am
                    constantly motivated by challenges that allow me to
                    innovate. I'm also proud to hold a patent in quantum
                    computing, contributing to advancements in qubit-based
                    processing for transformative industries like AI and Quantum
                    Computing.
                  </motion.span>
                  <motion.span layout>
                    Key skills include Java, JavaScript, Angular, React, and
                    Typescript, along with database management and cloud
                    technologies like AWS and Docker. I'm adept at Full-stack
                    development, Front-End development, backend services, and
                    integrating REST APIs to drive results. I look forward to
                    connecting with others in the industry, exploring
                    collaboration opportunities, or discussing roles where I can
                    make a meaningful impact.
                  </motion.span>
                  <motion.span layout>
                    Let's connect—reach out if you're looking for a tech-driven
                    professional ready to tackle complex problems and drive
                    innovation!
                  </motion.span>
                </div>
              </motion.div>
            )}
            {activeSection === "recruiter" && (
              <motion.div
                className="recruiterContent"
                whileHover={{ y: -5 }}
                layout
              >
                <div className="everyone">
                  <motion.span layout>
                    Software Developer with experience in building scalable web applications and serverless architectures using Angular, React, NextJs, AWS, GCP, MySQL and various backend frameworks.
                  </motion.span>
                  <motion.li layout>
                    1 years of experience in Software Development.
                  </motion.li>
                  <motion.li layout>
                    Master's in Information Technology and Management
                  </motion.li>
                  <motion.li layout>
                    Open Source Software Developer Enthusiast 
                  </motion.li>
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}

export default About;
