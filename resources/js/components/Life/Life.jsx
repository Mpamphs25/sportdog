import React from 'react'
import Title from '../Title'
import { Link } from '@inertiajs/react';
export default function Life({life}) {
   
  return (
    <section className='mt-32 max-w-screen-xl lg:max-w-screen-2xl mx-auto'>
        <div className=' '>
            <Title name='LIFE'/>
        </div>
        {
            life.map((item)=>{
                const{id,date,description,title,slug} = item;
            
                return (
                    <article key={id} className='flex flex-col sm:flex-row justify-between mt-10 sm:gap-3 sm:m-10 max-w-6xl relative' >
                    <div className='basis-50 sm:basis-64 '>
                        <img src="/images/ball.jpg" className='w-full ' alt={title}/>
                    </div> 
                    <div className='flex-1 mt-2 '>  
                        <span className='mr-2  absolute sm:static top:2/4 -mt-8 cursor-pointer text-md p-2 text-center  bg-blue-800 text-white'>Ποδοσφαιρο</span>
                        <time className='text-sm  ml-32 -mt-3 '>{date}</time>
                        <Link href={route('article.index', {article:slug})}> <h2 className="text-blue-900 text-2xl font-bold text-left   my-3">{title}</h2></Link>
                        <p className='sm:mt-14'>{description.substring(0,100)}</p>
                        <p className='  text-blue-600'>Tου <span className='italic '>Χαραλαμπου Σεντη</span></p>
                    </div>   
                </article>
                )
            })
        }
       
    
    </section>
  )
}
