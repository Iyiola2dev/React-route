import { useState } from "react";
import data from "../assets/mockData.json";
import { useParams } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  //   const [blogPosts] = useState(data?.blogPosts);

  const singlePost = data.blogPosts?.find((post) => post?.id == slug);
  if (!singlePost) {
    return <h1>Post not found</h1>;
  }
  return (
    <div className="bg-white p-40 flex flex-col items-center justify-center gap-10">
      <Link to={"/blog"}>
        <div className="flex justify-center items-center cursor-pointer">
        <FaHome />
        <h3>/BLOG PAGE</h3>
        </div>
        
      </Link>

      <div className="overflow-hidden h-[24rem] w-fit  relative">
        <img src={singlePost.image} alt="" className="object-contain" />
        <div className="absolute w-full top-0 px-[3rem] z-30 text-white bg-yellow-50/20">
          <h2 className="text-black text-3xl font-bold text-center">
            {singlePost.title}
          </h2>

          <p className="text-black text-lg text-center">
            {singlePost.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
