"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";

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
      backgroundColor: "var(--sk-body-link-color, #06c)",
      color: "white",
      scale: 1.05,
      borderRadius: "25px",
      padding: "0px  10px",
    },
    inactive: {
      backgroundColor: "#E5E7EB",
      color: "black",
      scale: 1,
      border: "1px solid var(--sk-body-link-color, #06c)",
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
                    Result-driven and dedicated Software Developer with 1+ years
                    hands-on experience across diverse organizations and
                    projects. I have a strong foundation in Full Stack
                    Development, API optimization, cloud integrations. I have
                    successfully engineered solutions that enhance user
                    experience, streamlined workflows, and improved operational
                    efficiency.
                  </motion.span>
                  <motion.span layout>
                    Currently pursuing a Master&apos;s in Information Technology
                    and Management specializing in Software Development at
                    Illinois Institute of Technology. I was a former Software
                    Developer at Jio Platforms Limited where I led UI revamps,
                    optimized API integrations, and boosted live event success
                    rate by 80% for JioEvents using cutting-edge tools like
                    Angular, Typescript, WebRTC and Google Cloud Platform.
                  </motion.span>
                  <motion.span layout>
                    Proficient in a wide range of programming languages,
                    including Java, Python, C++, Javascript, React as well as
                    various database frameworks and web services.
                  </motion.span>
                  <motion.span layout>
                    Adept at contributing to open source projects, collaborating
                    with cross-functional teams and managing client escalations.
                    I am poised to contribute my expertise to drive the success
                    of cutting-edge software projects.
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
                    Software Developer with experience in building scalable web
                    applications and serverless architectures using Angular,
                    React, NextJs, AWS, GCP, MySQL and various backend
                    frameworks.
                  </motion.span>
                  <motion.li layout>
                    1 years of experience in Software Development.
                  </motion.li>
                  <motion.li layout>
                    Masters in Information Technology and Management
                  </motion.li>
                  <motion.li layout>
                    Open Source Software Developer Enthusiast
                  </motion.li>
                  <div className="recruiterResource">
                    <a
                      href="https://drive.google.com/file/d/1GI2LMJTKWPw-Sku4NGn0wkcwxTbq4o-9/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="icon"
                        alt=""
                        src="/resume.png"
                        width={100}
                        height={100}
                      ></Image>
                    </a>

                    <a href="https://github.com/TejasSaraf">
                      <Image
                        className="icon"
                        alt=""
                        src="/Github.svg"
                        width={100}
                        height={100}
                      ></Image>
                    </a>

                    <a href="https://www.linkedin.com/in/saraf-tejas">
                      <Image
                        alt=""
                        src="/Linkedin.svg"
                        width={100}
                        height={100}
                      ></Image>
                    </a>

                    <a href="https://leetcode.com/u/TejasSaraf/">
                      <Image
                        alt=""
                        src="/leetcode.svg"
                        width={100}
                        height={100}
                      ></Image>
                    </a>
                  </div>
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
