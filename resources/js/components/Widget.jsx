import { Link } from '@inertiajs/react'
import React from 'react'

function Widget() {
    
  return (
    
    <div className=' mt-12 lg:mt-15  lg:w-4/12 '>
        <h2 className='text-3xl italic text-blue-900 font-bold mt-1'>ΤΕΛΕΥΤΑΙΑ ΝΕΑ</h2>
      
        <div className='mt-5 '>
            <ul className='flex justify-between items-center '>
              <li><Link className='transition text-2xl text-blue-300 hover:text-blue-700 '>'Ολα</Link></li>
              <li><Link className='transition text-2xl text-blue-300 hover:text-blue-700 '>Sports</Link></li>
              <li><Link className='transition text-2xl text-blue-300 hover:text-blue-700 '>Life</Link></li>
              <li><Link className='transition text-2xl text-blue-300 hover:text-blue-700 '>Hot Dog</Link></li>
            </ul>
        </div>
       
        <div className='bg-gray-100 h-34 lg:h-64 overflow-y-scroll border-t border-blue-900 p-2 '>
        <div className=''>
            <div className='text-sm'>
              <time>10:40</time> |
              <span>Ποδοσφαιρο</span>

            </div>
            <div className=' border-b-2 '>

            <Link className='  text-base text-blue-900 font-bold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis</Link>
            </div>
            
        </div>
        <div className=''>
            <div className='text-sm'>
              <time>10:40</time> |
              <span>Ποδοσφαιρο</span>

            </div>
            <div className=' border-b-2 '>

            <Link className='  text-base text-blue-900 font-bold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis</Link>
            </div>
            
        </div>
        <div className=''>
            <div className='text-sm'>
              <time>10:40</time> |
              <span>Ποδοσφαιρο</span>

            </div>
            <div className=' border-b-2 '>

            <Link className='  text-base text-blue-900 font-bold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis</Link>
            </div>
            
        </div>
        <div className=''>
            <div className='text-sm'>
              <time>10:40</time> |
              <span>Ποδοσφαιρο</span>

            </div>
            <div className=' border-b-2 '>

            <Link className='  text-base text-blue-900 font-bold  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis</Link>
            </div>
            
        </div>
  
        </div> 
    </div>
  )
}

export default Widget