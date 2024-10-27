
import { Blogs, BlogsType } from '@/constants';
import { MyRouter } from '@/router/Router';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BlogDetailPage {
    params: {
        id: string
    }
}

export default async function BlogDetailPage({ params }: BlogDetailPage) {

    const { id } = await params;
    const blog = Blogs.find((blog) => blog.id === parseInt(id as string));

    if (!blog) {
        return <div className='container mx-auto'>
            <h2 className='text-4xl font-semibold text-center'>Not Found</h2>
            <Link href={`${MyRouter.blogPage}`}>
                <div className=' text-xl mt-4 bg-red-500 inline-block p-2 rounded-lg text-white items-center justify-center mx-auto  '> Back To Blog</div>
            </Link>
        </div>
    }
    const { id: itemId, title, description, image, active }: BlogsType = blog;
    return (
        <div className="container mx-auto mt-8 px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-hidden">
                    <Image
                        alt={title}
                        src={image}
                        width={1024}
                        height={768}
                        className="w-full  object-cover transition-transform transform hover:scale-105 duration-500"
                    />
                </div>

                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
                    <div className={`text-sm font-semibold mb-4 ${active ? 'text-green-600' : 'text-red-600'}`}>
                        {active ? 'Aktif' : 'Pasif'}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">{description}</p>

                    <Link href={MyRouter.blogPage} className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300">
                        Back to Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}
