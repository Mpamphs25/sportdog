import React,{useState} from 'react'
import { Link } from '@inertiajs/react';

import Socials from '../../components/Socials';
import Pagination from '../../components/Pagination';

export default function Index(props) {
    const [show,setShow] = useState(false)
    console.log(props)
    const {articles,twoArticles} = props
    
  return (
    <section className='max-w-5xl mx-auto'>
        <h1 className='text-5xl mb-12'>{props.twoArticles[0].author.title}</h1>
        <div className='grid  sm:grid-cols-8 gap-3 relative'>
          
            {
                twoArticles.map((article) => {
                    const {category,slug,title,description,author} = article
                    return <article key={article.id} className='col-span-8 lg:col-span-4' >
                          <div  style={{backgroundImage: `url('/images/ball.jpg')`}} className='h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 '>
                            <Socials show={show}/>
                            <Link  href={route('categories.index', [category['slug']])} as="button" className='px-3 py-1 bg-white ml-3 font-bold'>{category.title}</Link>
                            <Link href={route('article.index', {article:slug})}> <h2 className="px-3 text-4xl md:text-5xl text-white font-bold   text-left">{title}</h2></Link>
                            <p className='px-4 text-white text-lg md:text-2xl '>{description}</p>
                            <p className='ml-3 mb-2 text-white text-sm'><Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p>
                            </div> 
                    </article>
                })
            }

          
        </div>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2 mx-auto gap-3 mt-12'>
        {
                articles.data.map((article)=>{
                    const {category,slug,title,text,author,date} = article
                    return <article key={article.id} >
                        
                        <div className='relative' >  
                            <img className=" border-4 border-sky-600 relative" src="/images/ball.jpg" alt={title}/>          
                            <Socials  show={show}/>
                        
                        
                            <div className='p-3  relative'>
                                <div className='flex'>
                                <span className='absolute left-0 bottom-full -mb-4   p-2 text-center font-bold bg-white' > <Link href={route('categories.index', [category['slug']])}>{category.title}</Link></span>
                                <time className='text-sm  ml-auto -mt-3 '>{date}</time>
                                </div>
            
                                <div className='flex flex-col gap-y-px h-52 justify-center lg:gap-3'>
                                    <Link href={route('article.index', {article:slug})}> <h2 className=" text-2xl font-bold text-left mt-5  ">{title}</h2></Link>
                                    <p className='text-gray-700 text-md  '>{text.substring(0, 150)}</p>
                                    <p className='  text-blue '><Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p>
                                </div>
                            </div>
                        </div>
                    </article>
                })
            }
        </div>
        <Pagination  data={articles}/>
    </section>
  )
}
