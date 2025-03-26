//rfc
import React from 'react'

export default function hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto '>
      <div className='flex flex-col gap-4'>
        <p>It's time to get</p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Your Belly <span className='text-blue-400'>FIT</span></h1>
        </div>
        <p className='text-sm md:text-base font-light'>Transform your fitness journey with <span className='text-blue-400'>Fitness-Studio</span>, the all-in-one app designed to help you stay consistent, track progress, and <span className='text-blue-400'>achieve your fitness goals</span></p>
        <button className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-100 border-solid blueshadow duration-200'><p>Accept & Begin</p></button>
    </div>
  )
}
