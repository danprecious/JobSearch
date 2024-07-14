import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <div className='md:border-[1px] border-opacity-30 rounded-lg border-solid border-zinc-500 px-4 flex'>
      <div className="flex items-center justify-center text-sm text-zinc-500"><FaSearch /></div>
      <input type='search' placeholder='quick search...' className='hidden px-4 bg-transparent md:flex py-1 w-[100%] font-thin' />
    </div>
  )
}

export default Search
