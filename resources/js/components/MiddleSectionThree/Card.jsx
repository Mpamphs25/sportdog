import React,{useState} from 'react'
import { Link } from '@inertiajs/react';
import Socials from '../Socials';
export default function Card(props) {
  const [show,setShow] = useState(false)
  return (
    
    <div className='relative mb-4' onMouseEnter={() => !show ? setShow(true) : setShow(false)} onMouseLeave={() => !show ? setShow(true) : setShow(false)}>  
                <img className=" border-4 border-sky-600 relative" src="/images/ball.jpg" alt={props.title}/>          
                <Socials  show={show}/>
              
                 <div className=' h-64  p-3  relative'>
                    <div className='flex'>
                    <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' > <Link href={route('categories.index', [props.category['slug']])}>{props.category.title}</Link></span>
                     <time className='text-sm  ml-auto -mt-3 '>{props.date}</time>
                    </div>
   
                    <div className='flex flex-col gap-1  lg:gap-3'>
                        <Link href={route('article.index', {article:props.slug})}> <h2 className=" text-3xl font-bold text-left   my-3">{props.title}</h2></Link>
                        <p className={`text-gray-700 text-md   `} >{props.text.substring(0, 150)}</p>
                        <p className='  text-blue'><Link href={route('authors.index', [props.author['slug']])} className='italic '>{props.author.title_by}</Link></p>
                    </div>
                </div>
        </div>
  )
  
}
