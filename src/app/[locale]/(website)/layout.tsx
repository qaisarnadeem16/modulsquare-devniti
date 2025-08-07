import BackToTopButton from '@/components/common/back-to-top';
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import React from 'react'

export default async function Layout({
  children
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
    return (
        <div>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            {children}
           <div className="">
             <BackToTopButton/>
           </div>
            <div className="">
                <Footer />
            </div>
        </div>
    )
}

