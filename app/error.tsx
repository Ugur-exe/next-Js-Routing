'use client';

import React, { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.log(error);

    }, [error])

    return (
        <div>
            <h2>Somthing went wrong!</h2>
            <button onClick={() => reset()}> Try Again</button>
        </div>
    )
}
