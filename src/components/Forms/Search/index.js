import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='md:border-[1px] rounded-[2em] border-solid border-zinc-500 px-4 flex'>
      <div className="flex items-center justify-center text-darkShade"><FaSearch /></div>
      <input type='search' placeholder='Search...' className='hidden px-4 bg-transparent md:flex py-2 w-[100%]' />
    </div>
  )
}

export default Search
