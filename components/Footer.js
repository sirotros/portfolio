import React from "react";
import Link from "next/link";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="footer w-100 bg-secondary">
      <div className="container text-white d-flex align-items-center justify-content-between flex-sm-column flex-md-row">
        <div className="fs-5 my-sm-1 my-md-0">
          <Link className="mx-lg-2 mx-sm-4 text-white" href="https://github.com/sirotros">
            <FaGithub />
          </Link>
          <Link
            className="mx-lg-2 mx-sm-4 text-white"
            href="https://www.linkedin.com/in/yasinozgurcakmak/"
          >
            <FaLinkedin />
          </Link>
          <Link className="mx-lg-2 mx-sm-4 text-white" href="https://codepen.io/sirotros">
            <FaCodepen />
          </Link>
        </div>
        <p  className="my-sm-1 my-md-2">cakmakyasinozgur@gmail.com</p>
      </div>
    </footer>
  );
}
