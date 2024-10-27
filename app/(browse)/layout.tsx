import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

interface BrowseLayoutProps {
    children: React.ReactNode
}

const BrowseLayout = ({ children }: BrowseLayoutProps) => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BrowseLayout
