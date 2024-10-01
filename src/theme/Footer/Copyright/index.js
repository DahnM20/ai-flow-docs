import React from "react";
import Copyright from "@theme-original/Footer/Copyright";
import { FaGithub, FaX, FaXTwitter } from "react-icons/fa6";

export default function CopyrightWrapper(props) {
  return (
    <>
      <section className="py-2 text-center">
        <div className="flex justify-center items-center space-x-7">
          <a
            href="https://twitter.com/DahnM20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-teal-300 transition-colors duration-300 flex flex-col items-center"
          >
            <FaXTwitter size={30} className="mb-2" />
          </a>

          <a
            href="https://github.com/DahnM20/ai-flow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 hover:text-teal-300 transition-colors duration-300 flex flex-col items-center"
          >
            <FaGithub size={30} className="mb-2" />
          </a>
        </div>
      </section>
      <Copyright {...props} />
    </>
  );
}
