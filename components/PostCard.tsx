import { NextPage } from 'next';
import React from 'react'

interface PostProps {
    post: {
        title: any;
        excerpt: any;
    }
}

const PostCard: NextPage<PostProps> = ({post}) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard