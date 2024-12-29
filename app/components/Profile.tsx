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
            className="w-48 h-48 rounded-full"
            src="/Avatar.jpeg"
            alt="Tejas Saraf Avatar"
          />
        </div>
        <span className="text font-medium text-lg">Tejas Saraf</span>
        <span className="block text-gray-500">Software Developer | Ex - Jio Platforms</span>
        <span className="block text-gray-500">Chicago, IL, United States</span>
        <motion.button
          className="button flex items-center gap-2 border border-primary px-2 py-1 rounded-2xl font-thin hover:underline"
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

