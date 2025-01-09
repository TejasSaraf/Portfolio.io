"use client";

import { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Code,
  FolderGit2,
  GraduationCap,
  Icon,
  Info,
  Search,
  User,
  X,
} from "lucide-react";
import Link from "next/link";

const components = [
  "Intro",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Education",
];

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredComponents, setFilteredComponents] = useState(components);
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
    const filtered = components.filter((component) =>
      component.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredComponents(filtered);
  }, [searchQuery]);

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleComponentClick = (component: string) => {
    onClose();
    // Smooth scroll below the navbar
    const element = document.getElementById(component.toLowerCase());
    const navbarHeight = 5.5 * 16;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight, // Adjust scroll position based on navbar height
        behavior: "smooth",
      });
    }
  };

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
          <div className="searchBar relative">
            <input
              type="search"
              className="w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-customPurple focus:border-customPurple sm:text-sm"
              placeholder="Search components..."
              aria-label="Search components"
              onChange={handleSearchChange}
              value={searchQuery}
              autoFocus
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <button
              onClick={onClose}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-4">
            <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              <span className="Sections">Sections</span>
              {filteredComponents.map((component) => {
                let Icon;
                switch (component.toLowerCase()) {
                  case "intro":
                    Icon = User;
                    break;
                  case "about":
                    Icon = Info;
                    break;
                  case "experience":
                    Icon = Briefcase;
                    break;
                  case "skills":
                    Icon = Code;
                    break;
                  case "projects":
                    Icon = FolderGit2;
                    break;
                  case "education":
                    Icon = GraduationCap;
                    break;
                  default:
                    Icon = Search;
                }

                return (
                  <li
                    key={component}
                    className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
                  >
                    <a
                      href={`#${component.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleComponentClick(component);
                      }}
                      className="block p-2 hover:bg-gray-100 rounded transition duration-200 flex items-center"
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {component}
                    </a>
                  </li>
                );
              })}

              <span className="Sections py-1">Links</span>
              <div
                className="overflow-hidden p-1 text-foreground [&amp;_[cmdk-group-heading]]:px-2 [&amp;_[cmdk-group-heading]]:py-1.5 [&amp;_[cmdk-group-heading]]:text-xs [&amp;_[cmdk-group-heading]]:font-medium [&amp;_[cmdk-group-heading]]:text-primary"
                cmdk-group=""
                role="presentation"
                data-value="Links"
              >
                <div
                  className="Links"
                  cmdk-group-items=""
                  role="group"
                  aria-labelledby=":r37:"
                >
                  <Link
                    href="https://www.linkedin.com/in/saraf-tejas/"
                    target="_blank"
                    className="relative flex pl-[1.25rem] cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:pointer-events-none data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-5v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-5v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1GI2LMJTKWPw-Sku4NGn0wkcwxTbq4o-9/view?usp=sharing"
                    target="_blank"
                    className="relative flex pl-[1.25rem] cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:pointer-events-none data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 -960 960 960"
                    >
                      <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"></path>
                    </svg>
                    <span>Resume</span>
                  </Link>
                  <Link
                    href="https://github.com/TejasSaraf"
                    target="_blank"
                    className="relative flex pl-[1.25rem] cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:pointer-events-none data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                    </svg>
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://leetcode.com/u/TejasSaraf/"
                    target="_blank"
                    className="relative flex pl-[1.25rem] cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:pointer-events-none data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
                    </svg>
                    <span>LeetCode</span>
                  </Link>
                  <Link
                    href="https://x.com/TejasRajendraS1"
                    target="_blank"
                    className="relative flex pl-[1.25rem] cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:pointer-events-none data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <span>Twitter (X)</span>
                  </Link>
                  <Link
                    href="mailto:saraftejas12@gmail.com"
                    className="relative flex pl-[1.25rem] cursor-pointer gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled=true]:pointer-events-none data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 data-[selected='true']:underline data-[selected='true']:text-primary data-[selected='true']:bg-background"
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPopup;
