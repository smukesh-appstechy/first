import React from 'react'
import { useState } from 'react'
import Todo from './Todo';

const About = () => {
  const [hasImage, SetHasImage] = useState(0);

  const images = [
   "https://images.pexels.com/photos/8952192/pexels-photo-8952192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/14996824/pexels-photo-14996824/free-photo-of-man-in-black-hoodie-with-skateboard-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/15447422/pexels-photo-15447422/free-photo-of-drone-shot-of-city-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=18"
  ]
 
  function nextStep (){
    SetHasImage(hasImage === images.length - 1 ? 0 : hasImage + 1);
  }
  
  function backstep(){
    SetHasImage(hasImage === 0 ? images.length - 1 : hasImage - 1)
  }



  // const [items, setItem] = useState([]);
  // const [editId, setEditId] = useState(null);
  // const [editText, setEditText] = useState("");
  // function addfunction(event){
  //   event.preventDefault();
  //   console.log("hi");
  //   const form = event.target;
  //   const input = form.item;
  //   const newItems = [...items, input.value];
  //   console.log(newItems);
  //   setItem(newItems);
  //   form.reset();
  // }

  // function deletetext(event){
  //   items.id.remove;
  // }

  return (
    <>
        <div className='container m-auto relative'>
          <button onClick={backstep} className='absolute left-[-20px] top-[50%]'><i className="fa-solid fa-angles-left"></i></button>
          <div className="image-wrapper flex justify-center">
          {images.map((image, index) =>
          hasImage === index && (
            <div key={image} className="slide">
              <img src={image} alt="" width="400px" height="500px"/>
            </div>
          ))}
          </div>
          <button  onClick={nextStep} className='absolute right-[-20px] top-[50%]'><i className="fa-solid fa-angles-right"></i></button>
        </div>

        {/* <div className="shoping-wrapper w-80 bg-slate-400 p-5 m-auto my-5">
          <h2 className='text-center'>items to buy</h2>
          <form action="" className='flex' onSubmit={addfunction}>
            <input className='border rounded-md border-gray-500 p-4 mr-5' type="text" name='item' required/>
            <input className='border rounded-md border-gray-500 bg-gray-800 text-white p-4' type="submit" value="Add" />
          </form>
          {items.map((item, index) =>(
            <p key={index} className='mt-5 flex justify-between items-center'>{item} <span> <button className='p-3 border rounded-md bg-slate-300 mr-3 ml-3'>Edit</button><button onClick={deletetext} className='p-3 border rounded-md bg-slate-300'>Delete</button></span></p>
          ))}
        </div> */}
        <Todo/>
    </>
  )
}



export default About