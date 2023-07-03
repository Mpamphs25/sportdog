import React from 'react'
import { Link } from '@inertiajs/react';
import {RiDoubleQuotesL} from 'react-icons/ri'
export default function Blogger({name,picture}) {
    
  return (
    <div className='flex flex-col  gap-1 sm:gap-0 lg:flex-row items-center'>
                <div  className='relative'>
                    <img className='w-20 rounded-full' src={picture.thumbnail} alt={name.last}  />
                    <RiDoubleQuotesL style={{fill:'white'}} className='bg-sky-500 rounded-full w-6 h-6 absolute top-0 right-0'/>
                
                </div>
                <div className='flex flex-col gap-1 sm:gap-0 p-4 flex-1'>
                    <h4 className='text-lg text-sky-800'>{name.first} {name.last}</h4>
                    <Link className=' text-2xl font-bold'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, placeat.</Link>
                </div>
    </div>
  )
}


