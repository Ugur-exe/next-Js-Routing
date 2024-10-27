'use client'
import React, { useEffect, useState } from 'react'
import { CircularProgress } from "@nextui-org/progress";

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 50000);


        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='flex items-center justify-center text-5xl'>
            {loading ? (
                <CircularProgress aria-label="Loading..." color="warning" />
            ) : (
                <p>Content Loaded</p>
            )}
        </div>
    )
}

export default Loading;
