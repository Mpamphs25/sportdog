import React from 'react'

export default function Title({name}) {
  return (
    <div className='flex justify-between items-center space-x-1'>
        <div className='border-b-2 border-gray-300 w-5/12 '></div>
        <h1 className=' text-blue-900 font-bold text-4xl italic  '>{name}</h1>
        <div className='border-b-2 border-gray-300  w-5/12 '></div>
    </div>  
  )
}
