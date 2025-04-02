import React from 'react';
import Nav from './Nav';



function Login({dark,toggle}) {
  return (
    <>
    
    <Nav 
    showprofile={false}
    showsearch={false} 
    showcontent={false}
    dark={dark}
    toggle={toggle}/>
    <form>
    <div className={` h-screen w-screen flex flex-col justify-center items-center pt-7 ${dark ? 'bg-black text-white' : 'bg-white text-black '} transition-all duration-1000 ease-in-out`}>
      <img src='https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/30/b7eb4f88-4a93-4b68-beac-982d29be81671698648116564-Flat_500--1-.jpg 'className='md:h-[160px] md:w-[400px] w-[320px] h-[144px]'></img>
        <div className={` md:w-[400px] w-[320px] p-10 ${dark ? 'bg-black text-white border border-slate-200' : 'bg-white text-black shadow-lg'} transition-all duration-1000 ease-in-out`}>
        <div className='flex gap-[7px]'>
          <p className='font-[sk] text-[20px]'>Login</p>
          <p className=' text-[20px] opacity-25'>or</p>
          <p className='font-[sk] text-[20px]'>Signup</p>
         
        </div>
        <div className={`flex items-center border border-slate-400 mt-5 focus:border focus:border-red-800 `}>
          <p className='bg-slate-100 text-black p-2 opacity-35'>+91</p>
          <p className="border-r-2 py-3 border-gray-500 opacity-55"></p>

        <input type='tel'pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"className='w-full p-2 outline-none 'placeholder='Mobile number'required>
        
       </input>
       </div>
      <p className='md:text-[12px] text-[11px] mt-8'> By continuing, I agree to the <a className='text-[#FC427B] font-[sk]' href="">Terms of Use</a> & <a className='text-[#FC427B] font-[sk]' href="">Privacy policy</a></p>
     <button className='bg-[#FC427B] text-white font-[sk] p-2 mt-5 w-full uppercase'>Continue</button>
      <p className='mt-8 text-[13px] '>Having trouble logging in? <a className='text-red-400 font-[sk]' href=''>Get help</a></p>
        </div>
       
  
    </div>
  </form>
    </>
  )
}

export default Login


