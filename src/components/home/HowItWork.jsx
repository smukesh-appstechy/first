import React from 'react'

const HowItWork = ({number, heading, paraTxt}) => {
  return (
    <>
    
    <div className="how-card bg-[#F1EDFD] p-10 text-center flex flex-col justify-start gap-5 rounded-xl">
        <h3 className='bg-[#D9CDF9] rounded-xl text-5xl font-bold py-3 text-purple px-6 inline-block w-fit m-auto mt-0'>{number}</h3>
        <h2 className='text-2xl font-bold'>{heading}</h2>
          <p className='flex-1'>{paraTxt}</p>
       </div>
    </>
  )
}

export default HowItWork