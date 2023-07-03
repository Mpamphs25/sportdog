import React from 'react'
import {FaFacebook,FaTwitter} from 'react-icons/fa'
function SocialsMin() {
  return (
    <div className='bg-black/50 w-28 h-24 flex flex-col justify-center items-center absolute right-0 top-0  '  id="showComponent-small">
    <h6 className='text-white text-md'>SHARE WITH</h6>
   <div className='flex items-center justify-between gap-2'>
       <FaFacebook className='cursor-pointer transition-all duration-300 rounded-full border-none w-8 h-8 text-white bg-transparent hover:bg-blue-700 ' />
       <FaTwitter className=' cursor-pointer transition-all duration-300 rounded-full   w-8 h-8 text-white bg-transparent border-white hover:text-sky-600  '/>
   </div>
</div>
  )
}

export default SocialsMin