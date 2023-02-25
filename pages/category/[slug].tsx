import React from 'react'
import { useRouter } from 'next/router'
import { PostCard, Categories, Loader } from '../../components'


const CategoryDetails = ({posts}: any) => {

    const router = useRouter()

    if(router.isFallback) {
        return <Loader />
    }

    return (
    <main>

        
    </main>
    )
}

export default CategoryDetails