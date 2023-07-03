import React from 'react';
import { Link } from '@inertiajs/react';
import Widget from './Widget';
import Socials from './Socials';
export default function Card({text,title,slug,show,hide})
{
       
     return(
     
        <div className=' mt-12 sm:w-6/12 p-2'  onMouseEnter={hide} onMouseLeave={hide} >    
            <div className=''>  
                <img className=" border-4 border-sky-600 relative" src="/images/ball.jpg" alt={title}/>          
                <Socials  show={show}/>
            
              
                 <div className='bg-sky-100 h-64  p-3  relative'>
                    <div className='flex'>
                    <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' >Ποδοσφαιρο</span>
                     <time className='text-sm  ml-auto -mt-3 '>14-6-2023 11:11</time>
                    </div>
   
                    <div className='flex flex-col gap-1  lg:gap-3'>
                        <Link href={route('article.index', {article:slug})}> <h2 className=" text-3xl font-bold text-left   my-3">{title}</h2></Link>
                        <p className={`text-gray-700 text-md   `} >{text.substring(0, 150)}</p>
                        <p className='  text-blue'>Tου <span className='italic '>Χαραλαμπου Σεντη</span></p>
                    </div>
                </div>
            </div>
        
     </div>
        
    )
    
}