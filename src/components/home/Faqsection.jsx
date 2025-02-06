import React, { useState } from 'react'

const Faqsection = ({heading, answer, isOpen, index, setOpenindex, openIndex}) => {

  const toggleFaq = (index) => {
    console.log("hgfgghfgh",openIndex);
    
    setOpenindex(openIndex === index ? null : index);
  };
    
  return (
    <>
    <div className='mb-5 border-b border-[#E3F2FD]'>
        <h2 className='text-xl py-5 flex justify-between' onClick={()=>{toggleFaq(index)}}>{heading} {isOpen ?  <i className="fa-solid fa-chevron-up"></i> :  <i className="fa-solid fa-chevron-down"></i>} </h2>
        {isOpen && <p className='text-md py-5 '>{answer}</p>}
    </div>

    </>
  )
}

export default Faqsection