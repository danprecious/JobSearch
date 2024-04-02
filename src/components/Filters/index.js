"use client"
import { countries } from '@/utils/dataModel';
import React, { useState } from 'react'
import { FaArrowDown, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Filters = () => {
  return (
    <div className='flex relative'>
       <SelectComp filterParam = "Country" /> 
       <SelectComp filterParam = "City" /> 
    </div>
  )
}
 
export default Filters;


const SelectComp = ({filterParam}) =>{

const [listOpen, setListOpen] = useState(false)

  const toggleList = () => {
    setListOpen(!listOpen)
  }


  return(
    <button onClick={toggleList} className='bg-stone-100 bg-white/10  backdrop-blur-lg z-50 shadow relative min-w-[50px] w-[100%] max-w-[220px] flex justify-between items-center p-2  rounded-[0.5em] dark:bg-stone-900'>
      <p>{filterParam}</p>
        {
          listOpen ? <FaAngleUp /> : <FaAngleDown />
        }    

        {listOpen ? <div className='dark:bg-stone-800 w-[100%] bg-stone-50  shadow  backdrop-blur-lg absolute h-[200px] rounded-[0.5em] top-12 left-0 z-50'>
          {
            countries.map((country, index) => {
              return(
                <div key={index} className='dark:text-gray-200 border-b-[1px] border-solid border-stone-300 dark:border-stone-700 p-1 text-stone-700 '>{country.country}</div>
              )
            })
          }
        </div> : ""}
    </button>
  )
}