import React, { FC } from 'react'
import moment from 'moment';
import Link from 'next/link';

interface PostProps {
    post: any
}

const PostCard: FC<PostProps> = ({post}) => {

  console.log(post)

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img 
        className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        src={post?.featuredImage?.url} 
        alt={post.title} />
      </div>
    </div>
  )
}

export default PostCard