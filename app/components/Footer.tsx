"use client";
import Image from "next/image";

function Footer() {
  return (
    <div className="footerSection">
      <div className="contact">
        <a
          href="mailto:saraftejas12@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt="" src="/Gmail.png" width={100} height={100}></Image>
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
          <Image alt="" src="/Linkedin.svg" width={100} height={100}></Image>
        </a>

        <a href="https://x.com/TejasRajendraS1">
          <Image alt="" src="/Twitter.svg" width={100} height={100}></Image>
        </a>

        <a href="https://leetcode.com/u/TejasSaraf/">
          <Image alt="" src="/leetcode.svg" width={100} height={100}></Image>
        </a>
      </div>

      <div className="flex mb-2 gap-1 text-sm text-gray-500 dark:text-gray-400">
        <div>Tejas Saraf</div>
        <div> • </div>
        <div>© 2025</div>
        <div> • </div>
        <a href="/">Software Developer</a>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          >
            Built with Tailwind Nextjs Theme
          </a>
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default Footer;
