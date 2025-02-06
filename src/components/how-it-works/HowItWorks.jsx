import React from 'react'
import { blogdata } from './BlogData'
import { useState } from 'react'

const HowItWorks = () => {

  let [addValue, setAddValue] = useState(null);

let addfunction = (a, b) =>{
    setAddValue(a + b)
}
  return (
    <>
    <div className='container m-auto py-10'>
    {blogdata.map((value, index) =>{
      return(
        <Blogpost pitem={value}/>
      )
    })}
    <button onClick={() => addfunction(4, 6)}>Add</button>
    <div>Add value: {addValue}</div>
    </div>
    </>
  )
}

export default HowItWorks

function Blogpost({pitem}){
  return(
<div>
        <h1>{pitem.title}</h1>
        <p>{pitem.body}</p>
  </div>
  )
}