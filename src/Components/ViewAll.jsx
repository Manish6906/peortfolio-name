import React from 'react'
import arrow from "../assets/Images/arrow.svg"
import RecruitmentOne from './RecruiterOne'

function ViewAll() {
  return (
    <div className="relative">

      <div className="flex flex-col">
        <RecruitmentOne index={0} />
        <RecruitmentOne index={0} />
        <RecruitmentOne index={0} />
      </div>

      <div className='text-white text-[14px] md:text-[16px] py-10'>
        <div className='flex gap-3 justify-center items-center'>
          <h1>View all Projects</h1>
          <img src={arrow} alt='arrow' className='lg:h-10 lg:w-10 cursor-pointer' />
        </div>
      </div>

    </div>
  )
}

export default ViewAll