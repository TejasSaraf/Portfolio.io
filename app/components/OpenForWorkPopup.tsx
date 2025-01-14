"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function OpenForWorkPopup({ isOpen, onClose }: SearchPopupProps) {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75 backdrop-blur-sm"></div>
        </div>
        <div
          ref={searchRef}
          className="searchBox inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
        >
          <div className="Job relative">
            <span className="text-2xl text-black-600 ml-1 font-semibold">
              Job Preferences
            </span>
            <button
              onClick={onClose}
              className="absolute top-0 right-0 pr-3 flex items-center"
            >
              <X
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />
            </button>
            <span className="text-md lg:text-normal ml-1">
              My Job Preferences
            </span>
          </div>
          <div className="mt-4">
            <ul className="OpenToWork max-h-60 py-1 text-base ring-1 ring-green-500 ring-opacity-1.5 overflow-auto focus:outline-none sm:text-sm">
              <div className="text-green-500">Open To Work</div>
            </ul>
          </div>
          <div className="workDetails mt-4">
            <span className="text-md lg:text-normal ml-1">
              Job Titles: Software Developer, Software Engineer, FrontEnd
              Developer, Backend Developer, Full Stack Developer, Web Developer
            </span>
            <span className="text-md lg:text-normal ml-1">
              Location: Anywhere in US 🇺🇸
            </span>
            <span className="text-md lg:text-normal ml-1">
              Relocation: Willing to relocate
            </span>
            <div className="flex justify-center mt-4">
              <div>
                <a
                  href="https://drive.google.com/file/d/1GI2LMJTKWPw-Sku4NGn0wkcwxTbq4o-9/view?usp=sharing"
                  target="_blank"
                  className="cursor-pointer text-sm border border-primary px-2 py-1 flex gap-1 items-center rounded hover:bg-primary"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"></path>
                  </svg>
                  View Resume
                </a>
              </div>
            </div>
            <p className="mt-4 cursor-default flex justify-center items-center flex-wrap text-foreground-2">
              Liked my profile? Please message me on &nbsp;
              <a
                href="https://www.linkedin.com/in/saraf-tejas"
                target="_blank"
                className="underline cursor-pointer"
              >
                LinkedIn
              </a>
              &nbsp;or drop me an&nbsp;
              <a
                href="mailto:saraftejas12@gmail.com"
                target="_blank"
                className="underline cursor-pointer"
              >
                email
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenForWorkPopup;
