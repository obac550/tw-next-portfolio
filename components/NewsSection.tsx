import React from "react"
import type { NextPage } from "next";
import Carousel from "./Carousel";
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Rodocodo up for an Award!",
    description: "Rodocodo founded by Chi Dire has been shortlisted as a finalist in the Fair Education Alliance Awards. Rodocodo helps primary teachers introduce coding skills to classes in a fun, easy 'no-code' way.",
    image: "/familyphotos.png",
    github: " ",
    hashtags: "#FairEducationAlliance #edutech #teachertools #smartapp",
    link: "Outstanding work Chi and a good day to you Sir",
  },
   /*   {
    name: "Coming Soon - CENTERPRIDE",
    description:
      "Rising from the ashes of Centerprise Trust in Kingsland High Road is Centerprise - A metaverse space for young people to interact, learn and grow in a secure trusted environment",
    image: "/thankfulthoughts.png",
    github: " ",
    link: "12",
  },  
  {
    name: "Coming Soon",
    description: "Lots of lovely Lorem ipsum Torquent phasellus dis pharetra dignissim aptent nisl non luctus consequat sodales nibh fames",
    image: "/platoio.png",
    github: " ",
    link: "2",
  },
  {
    name: "Coming Soon",
    description:
      "Lots of lovely Lorem ipsum Torquent phasellus dis pharetra dignissim aptent nisl non luctus consequat sodales nibh fames",
    image: "/familyphotos.png",
    github: " ",
    link: "3",
  }, */ 
]

const NewsSection: NextPage = () => {

  let urlLinks: string[][] = [
    [
      "https://polydot.network/assets/img/rodocodo-0.jpg",
      "https://polydot.network/assets/img/rodocodo-2.jpg",
      "https://polydot.network/assets/img/rodocodo-1.jpg",
      "https://polydot.network/assets/img/rodocodo-3.jpg",
    ]/* ,
    [
      "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
      "https://polydot.network/assets/img/cpsi-london-tech-mentoring-web3-hackathon.png",
      "https://polydot.network/assets/img/easya-polkadot-hackathon-london-2023.png",
      "https://polydot.network/assets/img/cpsi-mentees-with-hackathon-hosts-dom-and-phil-kwok.png",
    ],
    [
      "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
      "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
      "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
      "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
    ],[
      "https://polydot.network/assets/img/mentoring-team-cpsi-london-at-hackathon.png",
      "https://polydot.network/assets/img/cpsi-london-tech-mentoring-web3-hackathon.png",
      "https://polydot.network/assets/img/easya-polkadot-hackathon-london-2023.png",
      "https://polydot.network/assets/img/cpsi-mentees-with-hackathon-hosts-dom-and-phil-kwok.png",
    ] */

  ]

  return (
    
    <section id="projects">
      <div className="h-32"></div>
      <h1 className="my-10 text-center font-bold text-4xl">
        News<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
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

        {(urlLinks[idx]).map((src, i) => {
          return (
            // 👇 style each individual slide.
            // relative - needed since we use the fill prop from next/image component
            // h-64 - arbitrary height
            // flex[0_0_100%]
            //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
            //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
            <div className="relative h-64 flex-[0_0_100%]" key={i}>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              <Image src={src} fill className="object-cover rounded-lg" alt="Rodocodo gets an award nomination" />
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
                  <div className="mt-0 md:w-1/2">
                    <h1 className="text-3xl font-bold mb-6 my-[-10]">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 text-xl">
                        {project.hashtags}
                   {/*    <Link href={project.github} target="_blank">
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
                      </Link> */}
                    </div>
                  </div>
                </div>
         {/*        <div className="h-16"></div>
                <div className="relative py-16 h-72 flex-[0_0_100%] bg-slate-500">one more</div>
                <div className="h-16"></div>
                <div className="relative py-16 h-72 flex-[0_0_100%] bg-slate-500">two more</div> */}
              </SlideUp>
             
            </div>
          )
        })}
      </div>


    </section>
  )
}

export default NewsSection
