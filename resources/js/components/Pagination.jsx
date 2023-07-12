import React from 'react'
import { Link } from '@inertiajs/react';
export default function Pagination({data}) {
  return (
    <div className='flex text-blue-900 mt-16  w-48 justify-around mx-auto'>
    {
        data.links.map((link)=>{
            return <Link href={link.url} >{link.label.replace('&raquo;','').replace('&laquo;','')} </Link>
        })
    }   
</div>
  )
}
