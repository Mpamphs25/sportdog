import React, { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react';
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa';

export default function SliderBig({bets}) {
  const [betSlider,setBetSLider] = useState(bets)
  const [current,setCurrent] = useState(0)

  const slideRight = () => {
    
    current >= betSlider.length-3 ? setCurrent(0) : setCurrent(current+3) 
}

const slideLeft = () => {
    current <= 0 ? setCurrent(betSlider.length-3) : setCurrent(current-3)
}

useEffect(()=>{
  let slideId = setInterval(()=> {
      slideRight()
  },5000)
  return ()=> clearInterval(slideId)
},[current])
return (
  
  <div className=' mx-auto flex justify-center items-end  gap-3 '>

    {
       betSlider.map((bet,index)=>{
           const {title,slug} = bet
           if(index=== current || index === current+1 || index === current+2 ){
            return (
             
                  <div className='md:w-1/4  lg:1/3'>  
                  <div>
                   <img className="w-full  relative" src="/images/ball.jpg" alt={title}/> 
                  </div>                
                  <div className='  p-3  relative'>
                      <div className='flex'>
                        <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' >Ποδοσφαιρο</span>
                        <time className='text-sm text-white ml-auto -mt-3 '>14-6-2023 11:11</time>
                      </div>
                    
                      <div className='flex flex-col  h-32 justify-start  '>
                          <Link href={route('article.index', {article:slug})}> 
                          <h2 className=" text-xl xl:text-2xl font-bold text-left text-white  my-3 ">{title}</h2></Link> 
                      </div>          
                  </div>
              </div>
                
              )
            }

        
       })
   }
  
  <div className=''>
    <button  onClick={slideLeft}><FaAngleLeft className='text-white text-5xl absolute md:top-2/4 md:left-11 md:w-12  md:h-12 lg:w-24 xl:w-40 xl:h-20 2xl:w-80'  /></button>
    <button onClick={slideRight}><FaAngleRight className=' text-white text-5xl absolute md:top-2/4 md:right-12 md:w-12  md:h-12 lg:w-24 lg:right-14 xl:w-40 xl:h-20 2xl:w-80 '/></button>
    </div>
  
   
   </div>
  
   
   
  
)
}
