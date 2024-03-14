"use client"
import { jobs } from '@/utils/dataModel';
import { usePathname } from 'next/navigation';

const JobDetails = ({params: {jobdetails}}) => {

  console.log(params)

  return (
    <div className='w-[100%] md:w-[50%] py-5 px-4 hidden md:relative md:flex flex-col  bottom-0 h-[80%] md:rounded-none rounded-t-[2em] overflow-scroll md:overflow-hidden bg-lightBg dark:bg-darkShade md:dark:bg-darkBg '>
      <div className='flex justify-center flex-col items-center'>
        <p>LOGO</p>
        <h2 className='text-[1.5rem] font-bold'>Google</h2>
      </div>
      <div className='flex justify-center my-10 items-center'>
        <h2 className='text-[1.2rem] font-bold'>Front-End Developer</h2>
      </div>
    </div>
  )
}

export default JobDetails;
