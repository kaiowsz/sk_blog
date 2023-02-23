import type { NextPage } from 'next'
import Head from 'next/head'

import { PostCard, Categories, PostWidget } from '../components'

const Home: NextPage = () => {

  const posts = [
    {
      title: "React Test",
      excerpt: "Learn React JS by buying my course of $100,000."
    },
    {
      title: "Second Post",
      excerpt: "Learn Next just reading the documentation for free (you can do it to learn react also)."
    },
  ]

  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-200">
      <Head>
        <title>SK Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <div>
              <PostCard post={post} key={post.title} />
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>


      </main>



    </div>
  )
}

export default Home
