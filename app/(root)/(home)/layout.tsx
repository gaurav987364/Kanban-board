import LeftSideBar from '@/components/shared/LeftSideBar'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
        <Navbar/>
        <div className=' flex'>
            {/* leftsidebar */}
            <LeftSideBar/>
            <section className=' flex min-h-screen flex-1 flex-col px-2 pb-6 max-md:pb-14 pt-20 sm:px-14'>
                <div className=' mx-auto w-full max-w-6xl'>
                  {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default layout