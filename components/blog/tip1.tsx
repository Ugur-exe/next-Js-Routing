import { BlogsType } from '@/constants'
import { MyRouter } from '@/router/Router'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogTip1({ id, title, description, image, active }: BlogsType) {
    return (

        <div className='min-h-96 group border rounded-lg shadow-lg overflow-hidden p-2 transition duration-500'>
            <div>
                <Image alt={title} src={image} width={1024} height={768} className='w-full object-cover transition-transform transform group-hover:scale-105 duration-500' />
            </div>
            <div className='p-6 '>
                <h2 className='text-2xl font-bold mb-2 group-hover:text-red-600 transition duration-500'>{title}</h2>
                <p className='line-clamp-4'>{description}</p>
                <Link href={`${MyRouter.blogPage}/${id}`}>
                    <div className='inline-block w-full px-4 py-2 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 duration-300 transition mt-2'>
                        Detail
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogTip1