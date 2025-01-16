import React from 'react'
import allData from '../../../alldata.json'

const SectionHeading = () => {
  return (
    <section className='py-10'>
            <div className="container m-auto">
                <div className="heading-wrapper">
                    <h2 className='text-center text-5xl font-bold'>{allData.page.homepage.section.howItWork.heading.value}</h2>
                    <p className='text-base text-center pt-5 w-2/4 m-auto'>{allData.page.homepage.section.howItWork.headingPara.value}</p>
                </div>
            </div>
        </section>
  )
}

export default SectionHeading