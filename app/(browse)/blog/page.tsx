'use client';
import BlogTip1 from '@/components/blog/tip1';
import BlogTip2 from '@/components/blog/tip2';
import { Blogs, BlogsType } from '@/constants';
import React, { useEffect, useState } from 'react'

const BlogPage = () => {
    const [blog, setBlog] = useState<BlogsType[]>([])
    useEffect(() => {
        setBlog(Blogs)
    }, [])

    return (
        <>
            <div className='container mx-auto mt-8'>
                <h2 className='text-2xl font-semibold text-center'> Tip 1 </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        blog && blog.map((data, index) => (
                            <BlogTip1 key={index} {...data} />
                        ))
                    }
                </div>
            </div>
            <div className='container mx-auto mt-8'>
                <h2 className='text-2xl font-semibold text-center'> Tip 2 </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        blog && blog.map((data, index) => (
                            <BlogTip2 key={index} {...data} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogPage
