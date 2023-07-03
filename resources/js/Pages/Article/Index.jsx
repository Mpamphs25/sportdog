import React from 'react';

export default function Article({article})
{
   
    const {title,description,text} = article;
    return (
        <section className='max-w-5xl mx-auto'>
            <article className='  rounded overflow-hidden shadow-lg px-6 py-4'>     
           
           <h2 className="mb-4 text-3xl font-bold h-20 flex items-center ">{title}</h2>
           <img className="w-full" src="/images/ball.jpg" alt={title}/> 
           
           <div className='px-6 py-4'>
            <h3 className='text-sm italic mb-2 '>{description}</h3>
            <div className='mt-2 '>
                <p className='text-gray-700 text-xl mb-4'>{text}</p>
            
            </div>
          
           </div>
        
       </article>
    </section>
  
    )
}

    