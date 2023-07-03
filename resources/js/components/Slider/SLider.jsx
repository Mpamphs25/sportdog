import React, { useState } from 'react'
import SliderTitle from './SliderTitle'
import SliderItem from './SliderItem'
import Title from '../Title'
import { data } from './data.jsx'
export default function SLider({bets}) {
  

 
  return (
   
    <section className='mt-32  '> 
   
        <div className='max-w-screen-xl lg:max-w-screen-2xl mx-auto'>
        <Title name='ΣΤΟΙΧΗΜΑ'/>
        </div>
       
        <div className='w-full  overflow-hidden    relative bg-cover bg-repeat bg-center  mt-16' style={{backgroundImage: `url('/images/stadium.webp')`,height:'500px'}}>
          <div className='max-w-screen-xl lg:max-w-screen-2xl flex md:mt-12 mx-auto  '>
              <div className=' flex  mt-20 2xl:mt-10 '>
                  <article className='   p-4  h-fit  '>  
                     <SliderItem bets={bets} />
                              
                  </article> 
                 
                   
              </div>
            </div>
        </div>
    </section>
  )
}

