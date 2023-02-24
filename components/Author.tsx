import React from 'react'
import { Author } from '../types'
import Image from 'next/image';

interface PropsAuthor {
  author: Author;
}

const Author = ({author}: PropsAuthor) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-40">
      <div className="absolute left-0 right-0 -top-14 flex justify-center">
        <Image 
        src={author.photo.url} 
        alt={author.name} 
        className="w-[100px] h-[100px] align-middle rounded-full" 
        unoptimized 
        width={100} height={100} />
      </div>
        <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
        <p className="text-white text-lg">{author.bio}</p>
    </div>
  )
}

export default Author