import React from 'react'
import { Link } from '@inertiajs/react';
export default function Cards(props) {
    console.log(props)
  return (
    <div className='w-full sm:w-2/4'>
           <div style={{backgroundImage: `url('/images/ball.jpg')`}} className='h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 '>
         {/* <Socials  show={show}/> */}
         <Link as="button" className='px-3 py-1 bg-white ml-3'>Blogs</Link>
         <Link href={route('article.index', {article:props.slug})}> <h2 className="px-3 text-4xl md:text-5xl text-white font-bold   text-left">{props.title}</h2></Link>
         <p className='px-4 text-white text-lg md:text-2xl '>{props.description}</p>
         <p className='ml-3 mb-2 text-white text-sm'>Tου <span className='italic '>Χαραλαμπου Σεντη</span></p>
        </div> 
    </div>
  )
}
