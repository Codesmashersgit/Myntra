import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../app.css';


function Home() {
  const [imageurls1,setimageurls1] = useState([]);
  const [imageurls2,setimageurls2] = useState([]);
  const [imageurls3,setimageurls3] = useState([]);
  const [imageurls4,setimageurls4]= useState([]);
  const [imageurls5,setimageurls5]=  useState([]);
  const [imageurls6,setimageurls6]= useState([]);
  const [imageurls7,setimageurls7]= useState([]);

  const getslider = (slideshow,slidescroll) => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideshow,
    slidesToScroll:slidescroll,
    arrows: false,
    autoplay: true, 
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
const setting1= getslider(5,5);
const setting2= getslider(3,3);

  useEffect(()=>{
    fetch("http://localhost:8000/api/images1")
    .then(res=>res.json())
    .then(data=>setimageurls1(data))
    .catch(err=>console.log(err))


  },[]);
  useEffect(()=>{
    fetch("http://localhost:8000/api/images2")
    .then(res=>res.json())
    .then(data=>setimageurls2(data))
    .catch(err=>console.log(err))

  },[]);

  useEffect(()=>{
    fetch("http://localhost:8000/api/images3")
    .then(res=>res.json())
    .then(data=>setimageurls3(data))
    .catch(err=>console.log(err))
  },[]);

  useEffect(()=>{
    fetch("http://localhost:8000/api/images4")
    .then(res=>res.json())
    .then(data=>setimageurls4(data))
    .catch(err=>console.log(err))

  },[]);
  useEffect(()=>{
    fetch("http://localhost:8000/api/images5")
    .then(res=>res.json())
    .then(data=>setimageurls5(data))
    .catch(err=>console.log(err))
  
  },[]);

  useEffect(()=>{
    fetch("http://localhost:8000/api/images6")
    .then(res=>res.json())
    .then(data=>setimageurls6(data))
    .catch(err=>console.log(err))
  },[]);

  useEffect(()=>{
    fetch("http://localhost:8000/api/images7")
    .then(res=>res.json())
    .then(data=>setimageurls7(data))
    .catch(err=>console.log(err))
  },[])
  return (
    
      <div className={`pt-[123px] md:pt-0`}>
        <div className="flex">
        <a href="http://localhost:5173/category/11" target='_blank'><img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/22/UYTb09rd_11e4f9a1cc624efa9c638013041941e5.gif"
            className="md:mt-20 sm:mt-10 cursor-pointer lg:h-[400px] lg:flex mx-auto p-2 hidden"
          />
          </a>
         
             <div className="lg:hidden flex h-[100px] m-1 gap-2 overflow-x-auto scrollbar-hidden">
      
      {imageurls1.map((url,index) => (
        <img
          key={index}
          src={url}
          className="w-auto h-auto max-w-full cursor-pointer"
          
        />
      ))}
    </div> 
    </div>

          <div className="lg:hidden flex h-[100px] m-1 gap-2 overflow-x-auto scrollbar-hidden">
              {imageurls2.map((url,index) => (
                <img  loading='lazy'
                key={index}
                src={url}
                className="w-auto h-auto max-w-full cursor-pointer"
                
                />
              ))}
            </div>

            <div className="flex lg:hidden w-[90px] ">
              {imageurls3.map((url,index)=>(
                <img  loading='lazy'
                key={index} 
                src={url} className="cursor-pointer"
                />
              ))}
            </div>
            <div className=" flex flex-col lg:hidden ">
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/3/D8eVNGcK_1db27a5e87e442f487655249b4350970.jpg" />
          
            </div>
            <div className="lg:hidden ">
            <Slider {...setting2}>
            {imageurls4.map((url,index)=>(
              <img loading='lazy'
              key={index}
              src={url} className="cursor-pointer"
              />
              
            ))}
            </Slider>
            
            </div>

            <div className="flex flex-col lg:hidden">
            <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2025/FEBRUARY/25/A40Nmrrp_33cdac3ecbc64271a6567078bc3ba8fd.jpg" />
            </div>
            <div className="lg:hidden ">
              <Slider {...setting2}>
            {imageurls5.map((url,index)=>(
              <img loading='lazy' key={index}
              src={url} className="cursor-pointer "
              />
            ))}
            </Slider>
            </div>
            <div className="flex flex-wrap gap-1 justify-center ">
          <img
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/21/j8U3V53s_abca72da59a649159d1c101b49f6cb59.jpg"
            className="lg:w-[400px] w-full"
          />
          <img
            src="https://assets.myntassets.com/f_webp,w_207,c_limit,fl_progressive,dpr_2.0/assets/images/2024/OCTOBER/20/5DPPLf7C_59525f9fe6aa49198d8e093c6d944558.jpg"
            className="lg:w-[400px] w-full"
          />
        </div>
        <div className="flex justify-center items-center mx-auto mt-1 gap-1 ">
          <img
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/27/V6TQ6Yoo_fa0a38ddecb846b7a5d3b4aabf3614b3.jpg"
            className="w-[45%] "
          />
          <img
            src="https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/27/0LMGambr_3986e07730a64f9d8f1b7dd2b861208d.jpg"
            className="w-[45%] "
          />
        </div>
       
        
           <Slider {...setting1}>
  {imageurls6.map((url, index) => (
    <img key={index} src={url} className=" mt-3 md:h-[400px] md:w-[250px] cursor-pointer" />
  ))}
</Slider>
           
            
        
     
      </div>
      

      
    
  );
}

export default Home;
