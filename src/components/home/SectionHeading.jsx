import React from 'react'

const SectionHeading = ({heading, para}) => {
  return (
    <section className='py-10'>
            <div className="container m-auto">
                <div className="heading-wrapper">
                    <h2 className='text-center text-5xl font-bold'>{heading}</h2>
                    <p className='text-base text-center pt-5 w-2/4 m-auto'>{para}</p>
                </div>
            </div>
        </section>
  )
}

export default SectionHeading