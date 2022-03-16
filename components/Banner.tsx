import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center justify-between bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
            <h1 className='text-6xl font-serif max-w-xl'> 
                <span className='underline decoration-black decoration-4'>Medium</span> {" "}
                is a place to write, read, and connect
            </h1>
            <h2>It's easy and free to post your thinking on any topic and connect with millions of reader</h2>
        </div>

        <img
            className='hidden md:inline-flex h-32 lg:h-full'
            src='https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png'
            alt="logo"
        />
    </div>
  )
}

export default Banner