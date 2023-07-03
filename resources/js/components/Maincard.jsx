import {React,useState} from 'react';

import { Link } from '@inertiajs/react';
import Socials from './Socials';
import SocialsMin from './SocialsMin';
import Maincardsmall from './Maincardsmall';
export default function Article({text,title,description,slug,index})
{
    const [show,setShow] = useState(false)
 
    const hide = () => {
        if(!show){
            // document.getElementById('showComponent').classList.remove('hidden')
            setShow(true)
        }else{
            // document.getElementById('showComponent').classList.add('hidden')
            setShow(false)
        }
       
    }



    if(index === 0){
        //lg:max-w-7xl
       return  <article className='mb-10 md:h-80 lg:w-3/6 shadow-lg relative ' onMouseEnter={hide} onMouseLeave={hide} > 
         
       <div style={{backgroundImage: `url('/images/ball.jpg')`}} className='h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 '>
         <Socials  show={show}/>
         <Link as="button" className='px-3 py-1 bg-white ml-3'>Blogs</Link>
         <Link href={route('article.index', {article:slug})}> <h2 className="px-3 text-4xl md:text-5xl text-white font-bold   text-left">{title}</h2></Link>
         <p className='px-4 text-white text-lg md:text-2xl '>{description}</p>
         <p className='ml-3 mb-2 text-white text-sm'>Tου <span className='italic '>Χαραλαμπου Σεντη</span></p>
        </div> 
       
            
        </article>
    }

    if(index === 1){
       
           
         return <Maincardsmall show={show} hide={hide} slug={slug} text={text} title={title}/>
            
    }

    
}