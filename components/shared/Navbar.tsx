import Link from 'next/link'
import { BiLogoFlickr } from "react-icons/bi";
import React from 'react'
import Profile from '../smallparts/Profile'
import { ModeToggle } from '../smallparts/Theme'
import Notification from '../smallparts/Notification';
import GlobalSearch from '../smallparts/GlobalSearch';

const Navbar = () => {
  return (
    <div className=' flex justify-between bg-white fixed z-50 w-full gap-5 p-3 dark:shadow-none sm:px-12 border-b border-black'>
       <Link href="/" className=' flex mt-2'>
       <BiLogoFlickr size={32} fill='#080e57df' />
         <span className=' text-xl font-semibold  dark:text-light-900 max-sm:hidden'>Bord<span className=' text-orange-600 font-extrabold'>Up</span></span>
       </Link>

       <GlobalSearch/>

       <div className=' flex items-center gap-2'>
            <ModeToggle/>
            <Notification/>
            <Profile/>
       </div>
    </div>
  )
}

export default Navbar;