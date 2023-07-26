import React from "react"
import Image from "next/image"
import Link from "next/link"
import { getAllPosts } from "../lib/api";
import PostPreview from "../components/PostPreview";
import PostHero from "../components/PostHero";

const BlogSection = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const recentPosts = posts.slice(0, 2);
  return (
    <section id="blog">
 <div className="space-y-4">
<h1 className="text-center font-bold text-4xl">
    Blog
<hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
</h1>
<div className="h-12"></div>
<Link href="/blog"
className="text-2xl hover:text-gray-300 hover:underline">
More Posts...
</Link>
</div>
<div className="h-6"></div> 

 <PostHero />  

 <p className="text-3xl mb-6">Recent Posts</p>
 <div className="grid md:grid-cols-2 grid-cols-1 mx-auto md:gap-32 gap-8">
{recentPosts.map((post) => (
<div key={post.title}>
<PostPreview post={post} />
</div>
))}
</div>
<div className="h-16"></div> 
<div className="h-16"></div>
<Link href="/blog"
className="text-2xl hover:text-gray-300 hover:underline">
Read More...
</Link>
</section>
    )
  }
  
  export default BlogSection