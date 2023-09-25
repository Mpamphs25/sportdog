import React from 'react'

import Card from '../../components/Card.jsx';

import Pagination from '../../components/Pagination';
import CardWithBgImg from '../../components/CardWithBgImg.jsx';
function Index(props) {
    
    const {searchResult,q} = props;

  return (
    <section className='max-w-5xl mx-auto'>
         <h1 className='text-5xl capitalize mb-12'>{q}</h1>
         <div className='w-full grid grid-cols-1 sm:grid-cols-12 gap-3'>
            {   
               searchResult?.data?.map((item,index)=>{
                  
                    const {author,category,date,description,title,slug,text} = item;
                   if(index<2)
                   {
                    return <article className='col-span-1 sm:col-span-6  relative '>
                        <CardWithBgImg   customBmImg='/images/ball.jpg'  text={text} title={title} author={author} date={date} category={category} slug={slug} description={description} />
                      </article>
                   }else{
                    return <article className='col-span-4'>
                      <Card  text={text} title={title} author={author} date={date} category={category} slug={slug} description={description} />
                  </article>
               }  
                  

                })
            }
         </div>

         <Pagination  data={searchResult}/>
    </section>
  )
}

export default Index


