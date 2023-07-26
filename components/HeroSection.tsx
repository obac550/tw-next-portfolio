"use client" // this is a client component
import React from "react"
import Image from "next/image"
import NextLink from 'next/link';
import { Link } from "react-scroll/modules" 
import { HiArrowDown } from "react-icons/hi"

  /*
const bloglink = [
  {
    name: "Tech Mentoring Young People In Web 3.0 @EasyA_app Hackathon",
    description: "Members of team CPSi planned and delivered a pitch @EasyA_app hackathon among some of blockchains brightest. Superb job, well done all!",
    image: "/familyphotos.png",
    github: " ",
    link: "/blog",
  },
 {
    name: "Coming Soon",
    description:
      "Lots of lovely Lorem ipsum Torquent phasellus dis pharetra dignissim aptent nisl non luctus consequat sodales nibh fames",
    image: "/familyphotos.png",
    github: " ",
    link: " ",
  }, 
]*/

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile-card.png"
            alt="CPSi.London"
            width={360}
            height={360}
            className="bg-opacity-100" />
        </div>      
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">Hiya, I&#39;m CPSi</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
          I use my experience in{" "}<span className="font-semibold text-teal-600">Law, Education and Tech</span> to create digital learning experiences that enrich the lives of young Londoners.</p>
          <div className="flex flex-row justify-between w-[230px]">
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            Projects
          </Link>
        {/*   <NextLink
            href="/blog"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 text-center rounded shadow hover:bg-teal-700 w-[110px]">
            Blog
          </NextLink> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
