import React from 'react'
import { Link } from '@inertiajs/react';



export default function SliderCard({title,slug,index,current}) {
  
  return (
    <div className='mt-16 absolute top-0 left-0 transition ease-in-out delay-150'   style={{
      transform:`translateX( ${100 *(index-current)}%)`
   }} >  
    <img className="w-full mt-10 max-h-96  relative" src="/images/ball.jpg" alt={title}/>          
          
   
     <div className='  p-3  relative'>
        <div className='flex'>
        <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' >Ποδοσφαιρο</span>
         <time className='text-sm text-white ml-auto -mt-3 '>14-6-2023 11:11</time>
        </div>
      
        <div className='flex flex-col   '>
            <Link href={route('article.index', {article:slug})}> 
            <h2 className=" text-2xl font-bold text-left text-white  my-3 hover:text-blue-900">{title}</h2></Link>
         
    
        </div>
   
    
    
    </div>
</div>
  )
}
