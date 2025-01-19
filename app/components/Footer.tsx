'use client'

import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="footerSection">
      <div className="contact">
        <a
          href="mailto:saraftejas12@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="Gmail" src="/Gmail.png" width={100} height={100} />
        </a>

        <a href="https://github.com/TejasSaraf" target="_blank" rel="noopener noreferrer">
          <Image
            className="icon"
            alt="GitHub"
            src="/Github.svg"
            width={100}
            height={100}
          />
        </a>

        <a href="https://www.linkedin.com/in/saraf-tejas" target="_blank" rel="noopener noreferrer">
          <Image alt="LinkedIn" src="/Linkedin.svg" width={100} height={100} />
        </a>

        <a href="https://x.com/TejasRajendraS1" target="_blank" rel="noopener noreferrer">
          <Image alt="Twitter" src="/Twitter.svg" width={100} height={100} />
        </a>

        <a href="https://leetcode.com/u/TejasSaraf/" target="_blank" rel="noopener noreferrer">
          <Image alt="LeetCode" src="/leetcode.svg" width={100} height={100} />
        </a>
      </div>

      <div className="footerContents flex mb-2 gap-1 text-sm text-gray-500 dark:text-gray-400">
        <div>Tejas Saraf</div>
        <div> • </div>
        <div>© 2025</div>
        <div> • </div>
        <Link href="/">Software Developer</Link>
      </div>

      <div className="footerContents text-sm text-gray-500 dark:text-gray-400">
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >
            Built with Tailwind Nextjs Theme
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer

