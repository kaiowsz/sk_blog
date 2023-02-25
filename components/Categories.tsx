import React, {FC, useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

interface Category {
  name: string;
  slug: string;
}

const Categories: FC = () => {
  
  const [categories, setCategories] = useState<Category[] | []>([])

  useEffect(() => {
    getCategories()
      .then(newCategories => setCategories(newCategories))
  }, [])

  return (
    <aside className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>

      {categories.map(category => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 hover:text-gray-600 transition duration-400">
            {category.name}
          </span>
        </Link>

      ))}
    
    </aside>
  )
}

export default Categories