
import { getAllPosts } from "../../lib/api";
import PostPreview from "../../components/PostPreview";

export const metadata = {
  title: 'CPSi.London Blog',
  description: 'The official blog of CPSi - The Igwe of London',
  keywords: ['CPSi.London', 'Black History of London', 'London Law', 'EduTech', 'web3', 'Black history app', 'Black London', 'Crown Prosecution Service', 'The Black Gates', 'Centreprise', 'Centerprise Trust', 'Centerpride', 'african history', 'Metaverse', 'miramid','The regiments of steel', 'kingsland high road', 'Lord of greater London']
}

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <div className="container mx-auto px-5">
      <main>
      <div className="h-32"></div>
        <h1 className="text-center text-3xl">All Posts</h1>
        <div className="h-12"></div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-32 gap-8">
          {posts.map((post, idx) => (
            <div key={idx}>
              <PostPreview post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}