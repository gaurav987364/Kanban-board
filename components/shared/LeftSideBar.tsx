"use client"
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <div className=' sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-20 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]'>
        <div className=' flex flex-1 flex-col gap-6'>
          {sidebarLinks?.map((item)=>{
            const isActive = (pathname.includes(item.route) && item.route.length > 1 || pathname === item.route);
            return(
              <Link key={item.label} href={item.route} className=' flex items-center justify-start gap-4 bg-transparent p-4'>
                {item.imgURL}
                <p className={`${isActive ? "font-bold" : "font-medium"} max-lg:hidden`}>{item.label}</p>
              </Link>
            )
          })}
        </div>
        <div className=' flex flex-col gap-2'>
            
        </div>
    </div>
  )
}

export default LeftSideBar;