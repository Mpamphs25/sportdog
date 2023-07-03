import React, { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';
import Blogger from './Blogger';
import {RiDoubleQuotesL} from 'react-icons/ri'

const url = 'https://randomuser.me/api/?results=3'
export default function Bloggers() {
    const [user,setUser] = useState([]);
    const [names,setNames] = useState([])
    const [pictures,setPictures] = useState([])
    const getUsers = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            if(!data) return;
            setUser(data)
        } catch (error) {
            console.log(error)
        }
    }
    
   
   const {results} = user;
  
//   console.log(results)
//     results?.forEach(element => {
//         console.log(element)
//     });
 
    useEffect(()=>{
        getUsers()
    },[])
  return (
    <section className='max-w-screen-xl mx-auto mt-12   '>
        <div className='flex flex-col gap-1 sm:gap-0 sm:flex-row justify-evenly items-center'>
            <h2 className='text-4xl uppercase  font-bold text-blue-900 '>bloggers</h2>
            <div className='flex-1  border-b border-gray-300 mx-6'></div>
            <Link className='text-blue-600 font-bold italic'> Δείτε όλους τους bloggers </Link>
        </div>
        <div className=' mt-6 flex flex-col gap-2 sm:gap-0 sm:flex-row  justify-evenly'>
           
            {
                results?.map((result,index)=>{
                    const {name,picture} = result
                    return <Blogger key={index} name={name} picture={picture}/>
                })
            }
          
        </div>
       
    </section>
  )
}
