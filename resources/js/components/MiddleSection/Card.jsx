import React from 'react'
import { Link } from '@inertiajs/react';

import Socials from '../Socials';
export default function Card({ slug, text, title }) {
  return (
    //h-64
 <div className=''>  
    <img className="  relative" src="/images/ball.jpg" alt={title}/>          
    <Socials  />
     <div className='   p-3  relative'>
        <div className='flex'>
        <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' >Ποδοσφαιρο</span>
         <time className='text-sm  ml-auto -mt-3 '>14-6-2023 11:11</time>
        </div>

        <div className='flex flex-col gap-1  '>
            <Link href={route('article.index', {article:slug})}> <h2 className=" text-2xl font-bold text-left   my-3 hover:text-blue-900">{title}</h2></Link>
            <p className={`text-gray-700 text-md   `} >{text.substring(0, 90)}</p>
            <p className='  text-blue-700'>Tου <span className='italic '>Χαραλαμπου Σεντη</span></p> 
        </div>
    </div>
</div>
  )
}
