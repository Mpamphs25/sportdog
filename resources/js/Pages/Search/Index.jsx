import React from 'react'

function Index(props) {
    
    const {searchResult,q} = props;

  return (
    <section className='max-w-5xl mx-auto'>
         <h1 className='text-5xl capitalize mb-12'>{q}</h1>
         <div className='w-full grid grid-cols-12 gap-3'>
            {   
               searchResult?.data?.map((item,index)=>{
                  
                    const {author,category,date,description,title} = item;
                    return <div className={index  < 2 ? 'col-span-6 bg-red-900 ' : 'col-span-4 bg-green-900 '}>
                        {title}
                        {date}
                        {category.title}
                        {description}
                        {author.title}
                    </div>
                })
            }
         </div>
    </section>
  )
}

export default Index


{/* <article key={article.id} className='col-span-8 lg:col-span-4' >
                          <div style={{backgroundImage: `url('/images/ball.jpg')`}} className='h-80 lg:max-w-7xl   bg-cover bg-repeat bg-center  lg:h-96 flex  flex-col items-start justify-end  gap-2 '>
                            <Socials show={show}/>
                            <Link  href={route('categories.index', [category['slug']])} as="button" className='px-3 py-1 bg-white ml-3 font-bold'>{category.title}</Link>
                            <Link href={route('article.index', {article:slug})}> <h2 className="px-3 text-2xl md:text-3xl text-white font-bold   text-left">{title}</h2></Link>
                            <p className='px-4 text-white text-lg md:text-xl '>{description}</p>
                            <p className='ml-3 mb-2 text-white text-sm'><Link href={route('authors.index', [author['slug']])} className='italic '>{author.title_by}</Link></p>
                            </div> 
                    </article> */}