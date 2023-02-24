import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components'
import { getPosts } from '../services'
import { Post } from '../types'

interface NodePost {
  node: Post
}

interface HomeProps {
  posts: NodePost[]
}


const Home = ({posts}: HomeProps) => {

  return (
    <main className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post:any) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []


  return {
    props: {
      posts
    }
  }
}

export default Home
