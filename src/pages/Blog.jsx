import { useState } from "react";
import  data  from "../assets/mockData.json";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogPosts] = useState(data.blogPosts);
  console.log(blogPosts);
  return (
    <div className="p-20 flex flex-col ">
      <h1 >Blog</h1>
      <div className="grid grid-cols-1 justify-items-center  md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
        {blogPosts.map((post) => (
            <BlogCard post={post} key={post.id} />
        
        ))}
      </div>
    </div>
  );
};

export default Blog;
