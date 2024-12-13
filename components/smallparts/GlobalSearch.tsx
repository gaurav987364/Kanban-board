"use client"
import React from 'react'
import { Input } from '../ui/input';
import { BiSearch } from 'react-icons/bi';

const GlobalSearch = () => {
  return (
    <div className=' relative w-full max-w-[600px] max-lg:hidden'>
        <div className=' border border-gray-800/30 relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'>
            <BiSearch size={30}/>
            <Input 
              type='text' 
              value=""
              onChange={(e) => {console.log(e.target.value)}}  // Placeholder for handling search input change
              placeholder='Search for anything...' 
              className='border-none bg-transparent shadow-none'
            />
        </div>
        {/* //suggestions */}
    </div>
  )
}

export default GlobalSearch