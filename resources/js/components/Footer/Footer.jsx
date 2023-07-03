import React from 'react'
import { Link } from '@inertiajs/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
export default function Footer() {
  return (
    <section className='w-full mt-32 sm:h-56 bg-gray-100 flex flex-col justify-center items-center sm:gap-2'>
        <div>
            <Link href={route('articles.index')}>
                <img src="images/logo.png" alt="SportDog Logo" className='inline-block  lg:w-40'/>                  
            </Link>
        </div>
        <div > 
            <ul className='flex justify-between gap-5 mt-6'>
                <li><Link ><FaFacebook className='rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-blue-500 transition easy-in-out delay-150'/></Link></li>
                <li><Link ><FaTwitter className='rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-blue-500 transition easy-in-out delay-150'/></Link></li>
                <li><Link ><FaInstagram className='rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-pink-500 transition easy-in-out delay-150'/></Link></li>
                <li><Link ><FaYoutube className='rounded  bg-transparent text-slate-700 w-10 h-10 hover:text-red-600 transition easy-in-out delay-150'/></Link></li>
            </ul>
        </div>
        <div>
            <ul className='flex flex-col sm:flex-row justify-between items-center  gap-1 sm:gap-5 mt-6'>
                <li  className='text-xs hover:text-black'><Link>ΤΑΥΤΟΤΗΤΑ</Link></li>
                <li className='text-xs hover:text-black'><Link >ΟΡΟΙ ΧΡΗΣΗΣ</Link></li>
                <li className='text-xs hover:text-black'><Link>ΠΟΛΙΤΙΚΗ ΑΠΟΡΡΗΤΟΥ</Link></li>
                <li className='text-xs hover:text-black'><Link>ΠΟΛΙΤΙΚΗ ΠΡΟΣΩΠΙΚΩΝ ΔΕΔΟΜΕΝΩΝ</Link></li>
            </ul>
        </div>
    </section>
  )
}
