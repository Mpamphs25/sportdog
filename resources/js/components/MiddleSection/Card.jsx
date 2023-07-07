import {React,useState} from 'react';
import { Link } from '@inertiajs/react';
import Socials from '../Socials';
export default function Card({ slug, text, title,category,date,author }) {
  const [show,setShow] = useState(false)
  return (
    //h-64
 <div className='relative'  onMouseEnter={() => !show ? setShow(true) : setShow(false)} onMouseLeave={() => !show ? setShow(true) : setShow(false)}>  
    <img className="  relative" src="/images/ball.jpg" alt={title} />          
    <Socials  show={show}/> 
     <div className='   p-3  relative' >
        <div className='flex'>
        <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' ><Link href={route('categories.index', [category['slug']])}>{category.title}</Link></span>
         <time className='text-sm  ml-auto -mt-3 '>{date}</time>
        </div>

        <div className='flex flex-col gap-1  '>
            <Link href={route('article.index', {article:slug})}> <h2 className=" text-2xl font-bold text-left   my-3 hover:text-blue-900">{title}</h2></Link>
            <p className={`text-gray-700 text-md   `} >{text.substring(0, 90)}</p>
            <p className='  text-blue-700'><Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p> 
        </div>
    </div>
</div>
  )
}
