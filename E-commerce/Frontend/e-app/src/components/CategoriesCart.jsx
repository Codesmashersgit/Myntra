import React from 'react';
import { useState, useEffect } from 'react';

function CategoriesCart() {
  const [categoriescart, setCategoriescart] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8000/api/categorycart/categorycart")
    .then(res=>res.json())
    .then(data=>setCategoriescart(data))
    .catch(err=>console.log(err))


  },[]);
  return (
    <div className={`mt-7`}>
      <img
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/10/21/2ba89f75-c0bd-42df-ad7e-296196b9af7d1729500354323-Categories-To-Cart.jpg'
        className='w-full object-contain'
      />
      <div className='flex flex-wrap mt-5 justify-center gap-2'>
       {categoriescart.map((src, index) => (
       
          <img  loading='lazy'
            key={index}
            src={src}
            className='md:h-[300px] h-[200px] object-contain cursor-pointer' 

          />
       
        ))}
      </div>
      <img src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/18/CH3OJp88_77193d7b8a4c4a2289a48f5bbda182de.jpg' className='md:w-[1300px] md:h-[250px] h-[70px] w-full mt-7 mx-auto mb-14'></img>
    </div>
  );
}

export default CategoriesCart;
