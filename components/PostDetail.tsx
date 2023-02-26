// @ts-nocheck

import React from 'react'
import { PropsOnlyPost } from '../types'
import moment from 'moment'
import { RichText } from '@graphcms/rich-text-react-renderer'
import parse from "html-react-parser"

type GetContentFragmentType = (index: any, text: any, obj: any, type?: any) => JSX.Element

const PostDetail = ({post}: PropsOnlyPost) => {
  
  return (
    <section className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img 
        src={post.featuredImage.url} 
        alt={post.title}
        className="object-top h-full w-full rounded-t-lg"
        />
      </div>

      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          {/* probably can become a component  */}
          <div className="hidden lg:flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img 
            className="align-middle rounded-full h-[30px] w-[30px]"
            src={post.author.photo.url} 
            alt={post.author.name} />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>

        <RichText content={post.content?.raw.children} renderers={{
          h2: ({children}) => {
            return (
              <h1 className="font-bold text-3xl">{children}</h1>
            )
          },
          h3: ({children}) => {
            return (
              <h1 className="font-bold text-3xl">{children}</h1>
            )
          },
          h5: ({children}) => {
            return (
              <h1 className="font-bold text-2xl">{children}</h1>
            )
          },
          h6: ({children}) => {
            return (
              <h1 className="font-bold text-xl">{children}</h1>
            )
          },
          p: ({children}) => {
            return (
              <p className="my-2">{children}</p>
            )
          },
          img: ({altText, src}) => {
            return (
              <img src={src} alt={altText} className="my-6" />
            )
          },
          a: ({href, openInNewTab, title, children}) => {
            return (
              <a href={href} target={openInNewTab ? "_blank" : "_self"} className="underline hover:text-gray-600">{children}</a>
            )
          },
        }} />
      </div>
    </section>
  )
}

export default PostDetail