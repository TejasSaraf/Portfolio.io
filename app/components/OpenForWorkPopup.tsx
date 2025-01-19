"use client";

import { useEffect, useRef } from "react";
import { X } from 'lucide-react';
import Link from "next/link";

interface OpenForWorkPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function OpenForWorkPopup({ isOpen, onClose }: OpenForWorkPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div
          ref={popupRef}
          className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-800 shadow-xl"
        >
          <div className="relative">
            <h2 className="text-2xl text-gray-900 dark:text-white font-semibold mb-2">
              Job Preferences
            </h2>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-100"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <p className="text-md text-gray-600 dark:text-gray-300">
              My Job Preferences
            </p>
          </div>
          <div className="mt-4">
            <div className="openToWork py-2 px-4 rounded-lg">
              <span className="font-semibold">Open To Work</span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Job Titles:</strong> Software Developer, Software Engineer, Frontend
              Developer, Backend Developer, Full Stack Developer, Web Developer
            </p>
            <p>
              <strong>Location:</strong> Anywhere in US 🇺🇸
            </p>
            <p>
              <strong>Relocation:</strong> Willing to relocate
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Link
              href="https://drive.google.com/file/d/1GI2LMJTKWPw-Sku4NGn0wkcwxTbq4o-9/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-800"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 -960 960 960"
              >
                <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"></path>
              </svg>
              View Resume
            </Link>
          </div>
          <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
            Liked my profile? Please message me on{" "}
            <Link
              href="https://www.linkedin.com/in/saraf-tejas"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              LinkedIn
            </Link>{" "}
            or drop me an{" "}
            <Link
              href="mailto:saraftejas12@gmail.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              email
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default OpenForWorkPopup;

