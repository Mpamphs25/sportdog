import React , {useState} from 'react';
import { Link } from '@inertiajs/react';

import Socials from './Socials';
export default function Maincardsmall({text,title,slug,category,author,date})
{
    const [show,setShow] = useState(false)
    // const {slug} = author;
     return(
      
        <article className=' lg:max-w-sm lg:flex lg:items-center lg:flex-col lg:gap-2 lg:w-1/4 relative '  onMouseEnter={() => !show ? setShow(true) : setShow(false)} onMouseLeave={() => !show ? setShow(true) : setShow(false)} >   
            <div className=''>  
                <img className="w-full border-4 border-sky-600 relative" src="/images/ball.jpg" alt={title}/>          
                <Socials show={show}/>
               
                <div className='bg-sky-100 p-3  relative'>
                    <div className='flex'>
                    <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' > <Link href={route('categories.index', [category['slug']])}>{category.title}</Link></span>
                     <time className='text-sm  ml-auto -mt-3 '>{date}</time>
                    </div>
   
                    <div className='flex flex-col  gap-1 lg:gap-0'>
                        <Link href={route('article.index', {article:slug})}> <h2 className=" text-3xl font-bold text-left   mt-3">{title}</h2></Link>
                        <p className={`text-gray-700 text-md   `} >{text.substring(0, 150)}</p>
                        <p className='  text-blue'> <Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p>
                    </div>
                </div>
            </div>
        
     </article>
        
    )
    
}