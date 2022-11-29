import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-100 bg-brown header">
      <div className="container d-flex justify-content-between flex-sm-column flex-md-row">
        <Link href="/" className="text-white mx-sm-auto mx-lg-0">
          YASİN ÖZGÜR ÇAKMAK
        </Link>
        <div className="mx-sm-auto mx-md-0" id="header-menu">
          <Link className="mx-lg-2 mx-sm-4 text-white" href="/">
            About
          </Link>
          <Link className="mx-lg-2 mx-sm-4 text-white" href="projects">
            Projects
          </Link>
          <Link className="mx-lg-2 mx-sm-4 text-white" href="skills">
            Skills
          </Link>
        </div>
      </div>
    </header>
  );
}
