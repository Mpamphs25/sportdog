import React from 'react'


import Card from '../../components/Card.jsx';
import Pagination from '../../components/Pagination';
import CardWithBgImg from '../../components/CardWithBgImg';

export default function Index(props) {

   
    const {articles,twoArticles} = props
    
  return (
    <section className='max-w-5xl mx-auto'>
        <h1 className='text-5xl mb-12'>{props.twoArticles[0].category.title}</h1>
        <div className='grid  sm:grid-cols-8 gap-3 relative'>
          
            {
                twoArticles.map((article) => {
                    const {category,slug,title,description,author,text,date} = article               
                    return <article key={article.id} className='col-span-8 lg:col-span-4' >
                         <CardWithBgImg  customBmImg='/images/ball.jpg'  text={text} title={title} author={author} date={date} category={category} slug={slug} description={description}/>
                    </article>           
           
                })
            }

          
        </div>
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2 mx-auto gap-3 mt-12'>
            
        {
                articles.data.map((article)=>{
                    const {category,slug,title,text,author,date,description} = article
                    return <article key={article.id}  >
                      <Card  text={text} title={title} author={author} date={date} category={category} slug={slug} description={description} />
                  </article>
                  
                })
            }
        </div>
  
        <Pagination  data={articles}/>
      
    </section>
  )
}
