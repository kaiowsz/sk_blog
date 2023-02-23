import React, { FC } from 'react'

interface PostProps {
    post: {
        title: any;
        excerpt: any;
    }
}

const PostCard: FC<PostProps> = ({post}) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard