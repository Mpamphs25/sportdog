import React,{useState} from 'react'
import { Link } from '@inertiajs/react';

import Socials from '../Socials';

export default function BigCard({ slug, description, title,category,author })  {
  const [show,setShow] = useState(false)
  return (
    <div className='relative' onMouseEnter={() => !show ? setShow(true) : setShow(false)} onMouseLeave={() => !show ? setShow(true) : setShow(false)}>  
        <div style={{backgroundImage: `url('/images/ball.jpg')`,height:'700px'}} className='lg:max-w-7xl   bg-cover bg-repeat bg-center flex items-start justify-end gap-5  flex-col   gap-2 '>
          <Socials  show={show}/>
          <Link href={route('categories.index', [category['slug']])} as="button" className='px-3 py-1 bg-white ml-3'>{category.title}</Link>
          <Link href={route('article.index', {article:slug})}> <h2 className="px-3 text-4xl md:text-5xl text-white font-bold   text-left">{title}</h2></Link>
          <p className='px-4 text-white text-lg md:text-2xl '>{description}</p>
          <p className='ml-3 mb-2 text-white text-sm'><Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p>
        </div> 
      
    </div>

  )
}





 
