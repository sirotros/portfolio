import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { nanoid } from "nanoid";
export default function projects() {
    const [projects,setProjects] = useState([
        {
            id:nanoid(),
            name: "Audiophile E-Commerce Website",
            github: "https://github.com/sirotros/audiophile-e-commerce",
            live: "https://audiophile-e-commerce-nine.vercel.app/",
            img: "/audiophile.png",
            content: "An e-commerce website that markets audio products"
          },
          {
            id:nanoid(),
            name: "Twitter app",
            github: "https://github.com/sirotros/twitter-app",
            live: "https://www.youtube.com/watch?v=B1KletWIh-E",
            img: "/twitter.png",
            content: "Twitter alike application made with React. This project use strapi backend"
          },
          {
            id:nanoid(),
            name: "Spotify Website Clone",
            github: "https://github.com/sirotros/spotify-website-clone",
            live: "https://spotify-website-clone.vercel.app/",
            img: "/spotify.png",
            content: "Spotify clone made with React."
          },
          {
            id:nanoid(),
            name: "Movie Website",
            github: "https://github.com/sirotros/movie-app",
            live: "https://movie-app-sirotros.vercel.app/",
            img: "/movie.png",
            content: "Movie website where you can see the details of the most rated movies and popular movies using MovieDb api. You can use it in Turkish and English with multiple language options."
          }
    
    ])
  return (
    <section className="container mx-auto mt-5 pb-lg-4 pb-sm-6 row">
      <Head>
        <title>Projects</title>
      </Head>
      {projects
        ? projects.map((project) => {
            return (
              <div key={project.id} className="col-md-6 mt-4">
                <h4> {project.name} </h4>
                <div>
                  <Link href={project.github} className="ms-2">
                    Github <AiOutlineLink className="ml-2" />
                  </Link>
                  <Link href={project.live} className="ms-2">
                    Live <AiOutlineLink className="ml-2" />
                  </Link>
                </div>
                <Image
                  src={project.img}
                  width={500}
                  height={300}
                  className="rounded my-2 w-100"
                  alt="projects image"
                />
                <p className="mt-2"> {project.content} </p>
              </div>
            );
          })
        : null}
    </section>
  );
}

