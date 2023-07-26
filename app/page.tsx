import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import BlogSection from "@/components/BlogSection"
import NewsSection from "@/components/NewsSection"


import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import PostHero from "../components/PostHero";
import Link from "next/link";

export const metadata = {
  title: {
    default: 'CPSi.London Law, EduTech Developer and Mentor',
    template: '%s',
  },
  description: 'This site is a gateway to a network built to educate and empower in a secure network built on cultural connectivity',
  keywords: ['CPSi.London', 'Black History of London', 'London Law', 'EduTech', 'web3', 'Black history app', 'Black London', 'Crown Prosecution Service', 'The Black Gate', 'Centreprise', 'Centerprise Trust', 'Centerpride', 'african history', 'Metaverse', 'miramid','The regiments of steel', 'boy better know better', 'Fair Education Alliance', 'kingsland high road', 'Lord of greater London']

}



export default function Home() {

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
     {/*  <BlogSection /> */}
      <ProjectsSection />
      <NewsSection />
    </main>
  )
}

  