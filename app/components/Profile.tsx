"use client";

import { motion } from 'framer-motion';

function Profile() {
  return (
    <div className="profile">
      <a
        href="#"
        className="aboutContainer block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="avatar bg-primary/25 rounded-full ring ring-primary ring-offset-4 ring-offset-background">
          <img
            className="profilePicture rounded-full"
            src="/Avatar.jpeg"
            alt="Tejas Saraf Avatar"
          />
        </div>
        <div className="profileContent">
          <div className="name">
          <p className="title text text-lg">Tejas Saraf</p>
          <svg className="verified w-5 h-5 fill-primary" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg"><path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z"></path></svg>
          </div>
        <span className="designation block text-gray-500">Software Developer | Ex - Jio Platforms</span>
        <span className="location block text-gray-500">Chicago, IL, United States | Contact Info</span>
        </div>
        <motion.button
          className="openForWorkButton button flex items-center gap-2 border border-primary px-2 py-1 rounded-2xl font-thin hover:underline"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:rc:"
          data-state="closed"
          animate={{
            scale: [1, 1.05, 1],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          <motion.span 
            className="relative flex h-3 w-3"
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </motion.span>
          Open for work
        </motion.button>
      </a>
    </div>
  );
}

export default Profile;

