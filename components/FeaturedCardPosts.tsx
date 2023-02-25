import React from 'react'
import { Post } from '../types'
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    post: Post;
}

const FeaturedCardPosts = ({post}: Props) => {

    console.log(post)

    return (
        <section className="relative h-72">
            <div className="w-full h-full rounded-lg shadow-md absolute flex" 
            style={{ 
                background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${post.featuredImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                }}>
                
                {/* <div className="absolute rounded-lg bg-center bg-gradient-to-b  from-gray-400 via-gray-700 to-black w-full h-72" /> */}

                <div className="text-white font-bold flex flex-col rounded-lg p-4 items-center justify-center">
                    <p className="mb-2 text-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
                    <p className="text-center text-2xl mb-4">{post.title}</p>
                    <div className="flex absolute bottom-4 items-center gap-2 justify-center">
                        <Image 
                        unoptimized
                        alt={post.author.name}
                        src={post.author.photo.url}
                        className="align-middle drop-shadow-lg rounded-full w-[30px] h-[30px]"
                        width={30}
                        height={30}
                        />
                        <p className="inline align-middle text-white font-medium">{post.author.name}</p>
                    </div>
                </div>

            </div>
            <Link href={`/post/${post.slug}`}><span className="cursor-pointer w-full h-full absolute" /></Link>
        </section>
    )
}

export default FeaturedCardPosts