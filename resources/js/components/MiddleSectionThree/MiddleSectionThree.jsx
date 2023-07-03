import React from 'react'
import Card from './Card'
import ReadMoreButton from '../ReadMoreButton'
export default function MiddleSectionThree({newRestItemsFour}) {
  return ( 
    
    <section className='max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-2 mt-20 '>
            <div className='order-2 sm:order-1 sm:w-3/4 grid  sm:grid-cols-2 lg:grid-cols-3 gap-4  -mt-10  '>{
                    newRestItemsFour.map((item)=>{
                        return <Card key={item.id} {...item}/>
                    })
                }
                 <div className='mx-auto sm:col-span-2 lg:col-span-3 sm:mt-14 '>
                        <ReadMoreButton/>
                </div>
                </div>
            <div className='bg-red-900 order-1 sm:order-2 sm:w-1/5 h-96 mb-20'>
                
            </div>
           
    </section>
  )
}
