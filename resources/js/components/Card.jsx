import React,{useState} from 'react';
import { Link } from '@inertiajs/react';
//sm:w-6/12
import Socials from './Socials';
export default function Card({text,title,slug,author, date, category,customWidth,customBgSky,customBmImg,customMt})
{
    const [show,setShow] =  useState(false)
     return(
     
        <div className={`${customWidth || ''} ${customMt || ''}  p-2`}  onMouseEnter={() => !show ? setShow(true) : setShow(false)} onMouseLeave={() => !show ? setShow(true) : setShow(false)}>    
            <div className='relative'>  
                <img className=" border-4 border-sky-600 relative" src="/images/ball.jpg" alt={title}/>          
                <Socials  show={show}/>
            
              
                 <div className={`${customBgSky || ''}   p-3  relative`}>
                    <div className='flex'>
                    <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' > <Link href={route('categories.index', [category['slug']])}>{category.title}</Link></span>
                     <time className='text-sm  ml-auto -mt-3 '>{date}</time>
                    </div>
   
                    <div className='flex flex-col gap-1  justify-center lg:gap-3'>
                        <Link href={route('article.index', {article:slug})}> <h2 className=" text-2xl font-bold text-left   ">{title}</h2></Link>
                        <p className='text-gray-700 text-md  '>{text.substring(0, 70)}</p>
                        <p className='  text-blue '><Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p>
                    </div>
                </div>
            </div>
        
     </div>
    
    )
    
}