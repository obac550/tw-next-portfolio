import React from "react"
import Image from "next/image"
import Link from "next/link"
import { getAllPosts } from "../lib/api";
import PostPreview from "./PostPreview";
import PostHero from "../components/PostHero";

const BlogPostHeader = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const recentPosts = posts.slice(0, 2);
  return (
   
 <div className="space-y-4">
<h1 className="text-center font-bold text-4xl">
Tony
<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
</h1>
<PostPreview post={{}} />
</div>

      )
  }
  
  export default BlogPostHeader