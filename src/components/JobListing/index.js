import React from 'react'
import Card from '../cards';

const JobsListing = () => {
  return (
    <div className='md:w-[50%] rounded-3xl py-3 px-3 dark:bg-black bg-lightBg'>
      {/* <h1 className='sectionH1 font-bold text-zinc-700 '>Jobs Listing</h1> */}
      <div className=''>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default JobsListing;
