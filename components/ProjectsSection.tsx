import React from "react"
import type { NextPage } from "next";
import Carousel from "./Carousel";
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Tech Mentoring Young People In Web 3.0 @EasyA_app Hackathon",
    description: "Members of team CPSi planned and delivered a pitch @EasyA_app hackathon among some of blockchains brightest. Superb job, well done all!",
    image: "/familyphotos.png",
    github: " ",
    link: " ",
  },
  /* {
    name: "Coming Soon",
    description:
      "Lots of lovely Lorem ipsum Torquent phasellus dis pharetra dignissim aptent nisl non luctus consequat sodales nibh fames",
    image: "/thankfulthoughts.png",
    github: " ",
    link: " ",
  },  
  {
    name: "Coming Soon",
    description: "Lots of lovely Lorem ipsum Torquent phasellus dis pharetra dignissim aptent nisl non luctus consequat sodales nibh fames",
    image: "/platoio.png",
    github: " ",
    link: " ",
  },
  {
    name: "Coming Soon",
    description:
      "Lots of lovely Lorem ipsum Torquent phasellus dis pharetra dignissim aptent nisl non luctus consequat sodales nibh fames",
    image: "/familyphotos.png",
    github: " ",
    link: " ",
  }, */
]

const ProjectsSection: NextPage = () => {
  const images = [
    "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
    "https://polydot.network/assets/img/cpsi-london-tech-mentoring-web3-hackathon.png",
    "https://polydot.network/assets/img/easya-polkadot-hackathon-london-2023.png",
    "https://polydot.network/assets/img/cpsi-mentees-with-hackathon-hosts-dom-and-phil-kwok.png",
  ];

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-400px 0px -400px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
             
                      {/* put the embla carousel in here */}
                    <div className="lg:w-3/4 mx-auto">
      <Carousel loop>
        {images.map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover" alt="alt" />
            </div>
          );
        })}
      </Carousel>
      </div>

       {/* put the embla carousel ends here */}
    {/*    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link> */}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6 my-[-10]">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
