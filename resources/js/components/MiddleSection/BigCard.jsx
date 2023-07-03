import React from 'react'
import { Link } from '@inertiajs/react';

import Socials from '../Socials';

export default function BigCard({ slug, description, title })  {
  return (
    <div className='' >  
        <div style={{backgroundImage: `url('/images/ball.jpg')`,height:'700px'}} className='lg:max-w-7xl   bg-cover bg-repeat bg-center flex items-start justify-end gap-5  flex-col   gap-2 '>
          <Socials  />
          <Link as="button" className='px-3 py-1 bg-white ml-3'>Blogs</Link>
          <Link href={route('article.index', {article:slug})}> <h2 className="px-3 text-4xl md:text-5xl text-white font-bold   text-left">{title}</h2></Link>
          <p className='px-4 text-white text-lg md:text-2xl '>{description}</p>
          <p className='ml-3 mb-2 text-white text-sm'>Tου <span className='italic '>Χαραλαμπου Σεντη</span></p>
        </div> 
      
    </div>

  )
}





 
