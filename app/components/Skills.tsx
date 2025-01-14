"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

function Skills() {
  const [activeSection, setActiveSection] = useState("current");

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
    <div id="skills" className="skills">
      <section className="skillsSection">
        <div className="skillsTitle">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 -960 960 960">
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"></path>
          </svg>
          <span className="h1">Skills</span>
        </div>

        <div className="categories">
          {["current", "languages", "frontend", "backend", "tools"].map(
            (section) => (
              <motion.button
                key={section}
                onClick={() => setActiveSection(section)}
                className="skillsButton capitalize"
                variants={buttonVariants}
                animate={activeSection === section ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
              </motion.button>
            )
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            {...fadeInOut}
            className="skillsContainer"
          >
            {/* Languages Section */}
            {activeSection === "current" && (
              <>
                {[
                  "Angular",
                  "react",
                  "next",
                  "Node",
                  "AWS",
                  "GCP",
                  "ngrx",
                  "rxjs",
                  "reactrouter",
                  "redux",
                  "mysql",
                  "express",
                  "git",
                  "github",
                  "docker",
                  "Python",
                  "Java",
                  "HTML",
                  "Javascript",
                  "Typescript",
                  "CSS",
                  "C++",
                  "Spring",
                  "C",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <Image
                        src={`/${skill.toLowerCase()}.png`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="skillsList">{skill}</span>
                  </motion.div>
                ))}
              </>
            )}

            {/* Languages Section */}
            {activeSection === "languages" && (
              <>
                {[
                  "Python",
                  "Java",
                  "Javascript",
                  "Typescript",
                  "HTML",
                  "CSS",
                  "C++",
                  "C",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <Image
                        src={`/${skill.toLowerCase()}.png`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="skillsList">{skill}</span>
                  </motion.div>
                ))}
              </>
            )}

            {/* Frontend Section */}
            {activeSection === "frontend" && (
              <>
                {[
                  "Angular",
                  "react",
                  "next",
                  "html",
                  "css",
                  "bootstrap",
                  "framermotion",
                  "jQuery",
                  "ngrx",
                  "reactrouter",
                  "redux",
                  "rxjs",
                  "sass",
                  "tailwind",
                  "webpack",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <Image
                        src={`/${skill}.png`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="skillsList">
                      {skill.charAt(0).toUpperCase() + skill.slice(1)}
                      {skill === "react" && "Js"}
                      {skill === "next" && "Js"}
                    </span>
                  </motion.div>
                ))}
              </>
            )}

            {/* Backend Section */}
            {activeSection === "backend" && (
              <>
                {["Mysql", "mongodb", "express", "node", "Firebase"].map(
                  (skill) => (
                    <motion.div
                      key={skill}
                      className="competencies hover:shadow-lg transition-shadow"
                      whileHover={{ y: -5 }}
                    >
                      <div className="logo">
                        <Image
                          src={`/${skill}.png`}
                          alt={`${skill} Logo`}
                          className="object-contain"
                        />
                      </div>
                      <span className="skillsList">
                        {skill === "express"
                          ? "ExpressJs"
                          : skill === "node"
                          ? "NodeJs"
                          : skill.toUpperCase()}
                      </span>
                    </motion.div>
                  )
                )}
              </>
            )}

            {/* Tools Section */}
            {activeSection === "tools" && (
              <>
                {[
                  "aws",
                  "gcp",
                  "git",
                  "github",
                  "kubernetes",
                  "docker",
                  "postman",
                  "NPM",
                  "JSON",
                  "GitHubActions",
                  "ESLint",
                  "openAI",
                  "Slack",
                  "Vercel",
                  "Vite",
                ].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <Image
                        src={`/${skill}${
                          skill === "postman" ? ".svg" : ".png"
                        }`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">
                      {skill === "aws"
                        ? "AWS"
                        : skill === "gcp"
                        ? "GCP"
                        : skill.charAt(0).toUpperCase() + skill.slice(1)}
                    </span>
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}

export default Skills;
