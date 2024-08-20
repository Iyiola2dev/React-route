import React from 'react'
import { Link } from 'react-router-dom'


const BlogCard = ({post}) => {
  return (

        <div className='flex flex-col gap-2 justify-between'>
            <img className='h-60 object-cover ' src={post.image} alt="" />
            <div className='flex flex-col gap-1'>
            <h2 className='text-lg font-semibold'>{post.title}</h2>
            <h3>{post.description}</h3>
            </div>
            <Link to={ `${post.id}`}>
            <button className='w-fit px-3 py-1 rounded-lg text-white bg-blue-400'>Read More</button>
            </Link>
            
    </div>
  )
}

export default BlogCard