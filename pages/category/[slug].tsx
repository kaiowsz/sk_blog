import React from 'react'
import { useRouter } from 'next/router'
import { PostCard, Categories, Loader } from '../../components'
import { getCategories, getCategoryPost } from '../../services'
import { ParsedUrlQuery } from 'querystring'
import { GetStaticProps, GetStaticPaths } from 'next'

const CategoryDetails = ({posts}: any) => {

    console.log(posts)

    const router = useRouter()

    if(router.isFallback) {
        return <Loader />
    }

    return (
    <main className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                {posts.map((post: any, index: number) => (
                    <PostCard post={post.node} key={index} />
                ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                    <Categories />
                </div>
            </div>
        </div>

    </main>
    )
}

export default CategoryDetails

export const getStaticPaths: GetStaticPaths = async () => {

    const categories = await getCategories();
    
    return {
        paths: categories.map(({slug}: any) => ({params: {slug}})),
        fallback: true,
    }
}

interface IParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async (context) => {

    const {slug} = context.params as IParams

    const posts = await getCategoryPost(slug)
    return {
        props: { 
            posts,
            revalidate: 86400, // per day
        }
    }
}