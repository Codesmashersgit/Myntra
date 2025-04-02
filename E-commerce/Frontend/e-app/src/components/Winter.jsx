import React from 'react'
import { useState, useEffect } from 'react';
function Winter() {
  const [winter, setWinter] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/api/winter/winter")
    .then(res=>res.json())
    .then(data=>setWinter(data))
    .catch(err=>console.log(err))

  },[]);
  return (
    <div>
        <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/10/18/12356b14-759f-4132-bc7e-2d203afc952b1729245835769-Get-Winter-Ready--1-.jpg'className='mt-7'></img>
        <div className='flex flex-wrap mt-5 justify-center gap-2'>
        {winter.map((src, index) => (
          <img
            key={index}
            src={src}
            className='md:h-[300px] h-[200px] object-contain cursor-pointer' 
           
          />
        ))}
      </div>
    </div>
  );
}



export default Winter