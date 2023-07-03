import React, { useEffect, useState } from 'react'
import { Link } from '@inertiajs/react';
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa';

export default function SliderMedium({bets}) {
  const [betSlider,setBetSLider] = useState(bets)
    const [current,setCurrent] = useState(0)

    const slideRight = () => {
      
      current >= betSlider.length-2 ? setCurrent(0) : setCurrent(current+2) 
  }

  const slideLeft = () => {
      current <= 0 ? setCurrent(betSlider.length-2) : setCurrent(current-2)
  }

  useEffect(()=>{
    let slideId = setInterval(()=> {
        slideRight()
    },5000)
    return ()=> clearInterval(slideId)
},[current])
  return (
    <>
    <div className='w-full mt-10   flex items-center justify-center  gap-1' onTouchMove={slideLeft} >
      {
         betSlider.map((bet,index)=>{
             const {title,slug} = bet
             if(index=== current || index === current +1 ){
              return (
               
                    <div className='  w-1/2'    
                       
                    >  
                    <img className="w-full   relative" src="/images/ball.jpg" alt={title}/>          
                          
                  
                    <div className='  p-3  relative'>
                        <div className='flex'>
                        <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' >Ποδοσφαιρο</span>
                        <time className='text-sm text-white ml-auto -mt-3 '>14-6-2023 11:11</time>
                        </div>
                      
                        <div className='flex flex-col h-20 justify-start   '>
                            <Link href={route('article.index', {article:slug})}> <h2 className=" text-lg font-bold text-left text-white   hover:text-blue-900">{title}</h2></Link>
                        
                    
                        </div>
                  
                    
                    
                    </div>
                </div>
                  
                )
             }

       
            
              
         })
     }
     
    
     </div>
     <div className='flex justify-center items-center w-full mb-20'>
     <button  onClick={slideLeft}><FaAngleLeft className='text-white text-5xl w-20 h-18'/></button>
      <button onClick={slideRight}><FaAngleRight className=' text-white text-5xl w-20 h-18 '/></button>
     </div> 
   </>
   
  )
}



