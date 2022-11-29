import React, { useState } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";
import Head from "next/head";
export default function skills() {
  const [skills, setSkills] = useState([
    {
      id: nanoid(),
      icon: "/skills/html.png",
      title: "HTML",
    },
    {
      id: nanoid(),
      icon: "/skills/css-3.png",
      title: "CSS",
    },
    {
      id: nanoid(),
      icon: "/skills/sass.png",
      title: "SASS",
    },
    {
      id: nanoid(),
      icon: "/skills/bootstrap.png",
      title: "BOOTSTRAP",
    },
    {
      id: nanoid(),
      icon: "/skills/tailwind.png",
      title: "TAILWIND",
    },
    {
      id: nanoid(),
      icon: "/skills/js.png",
      title: "JAVASCRIPT",
    },
    {
      id: nanoid(),
      icon: "/skills/react.png",
      title: "REACT",
    },
  ]);
  return (
    <section>
      <Head>
        <title> Skills </title>
      </Head>
      <div className="w-75 mx-auto my-lg-10 d-flex flex-wrap flex-sm-column flex-md-row">
        {skills
          ? skills.map((skill) => {
              return (
                <div
                  className="w-25 my-4 d-flex align-items-center mx-sm-5 mx-md-0"
                  key={skill.id}
                >
                  <Image
                    src={skill.icon}
                    width={50}
                    height={50}
                    alt="skills image"
                  />
                  <span className="ms-3">{skill.title}</span>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
}
