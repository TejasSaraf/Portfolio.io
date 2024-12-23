"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Skills() {
  const [activeSection, setActiveSection] = useState('languages');
  
  const fadeInOut = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  const buttonVariants = {
    active: { 
      backgroundColor: 'hsl(265 83% 57%)',
      color: 'white',
      scale: 1.05,
      borderRadius: '25px',
      padding: '0px  10px'
    },
    inactive: { 
      backgroundColor: '#E5E7EB',
      color: 'black',
      scale: 1,
      border: '1px solid hsl(265 83% 57%)',
      borderRadius: '25px',
      padding: '0px  10px'
    }
  };
  
  return (
    <div className="skills">
      <section className='skillsSection'>
        <h1 className="text-3xl font-bold">Skills</h1>
        
        <div className="flex">
          {['languages', 'frontend', 'backend', 'tools'].map((section) => (
            <motion.button
              key={section}
              onClick={() => setActiveSection(section)}
              className="font-medium capitalize"
              variants={buttonVariants}
              animate={activeSection === section ? 'active' : 'inactive'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            {...fadeInOut}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6"
          >
            {/* Languages Section */}
            {activeSection === 'languages' && (
              <>
                {['Python', 'Java', 'Javascript', 'Typescript', 'HTML', 'CSS', 'C++'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <img
                        src={`/${skill.toLowerCase()}.png`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </>
            )}

            {/* Frontend Section */}
            {activeSection === 'frontend' && (
              <>
                {['Angular', 'react', 'next', 'html', 'css'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <img
                        src={`/${skill}.png`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">
                      {skill.charAt(0).toUpperCase() + skill.slice(1)}
                      {skill === 'react' && 'Js'}
                      {skill === 'next' && 'Js'}
                    </span>
                  </motion.div>
                ))}
              </>
            )}

            {/* Backend Section */}
            {activeSection === 'backend' && (
              <>
                {['Mysql', 'mongodb', 'express', 'node'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <img
                        src={`/${skill}.png`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">
                      {skill === 'express' ? 'ExpressJs' : 
                       skill === 'node' ? 'NodeJs' :
                       skill.toUpperCase()}
                    </span>
                  </motion.div>
                ))}
              </>
            )}

            {/* Tools Section */}
            {activeSection === 'tools' && (
              <>
                {['aws', 'gcp', 'git', 'github', 'kubernetes', 'docker', 'postman'].map((skill) => (
                  <motion.div
                    key={skill}
                    className="competencies hover:shadow-lg transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="logo">
                      <img
                        src={`/${skill}${skill === 'postman' ? '.svg' : '.png'}`}
                        alt={`${skill} Logo`}
                        className="object-contain"
                      />
                    </div>
                    <span className="font-medium">
                      {skill === 'aws' ? 'AWS' :
                       skill === 'gcp' ? 'GCP' :
                       skill.charAt(0).toUpperCase() + skill.slice(1)}
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