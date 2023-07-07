import React from 'react';
import Widget from '../../components/Widget';

export default function Article({article})
{
   
    const {title,description,text} = article;
    return (
        <section className='max-w-5xl mx-auto relative '>
            {/* <div className='bg-blue-900 w-full h-96'></div> */}
         <div className='w-full flex flex-col sm:flex-row'>
         <article className='w-full sm:w-8/12    sm:px-6 py-4 '>     
           
           <h2 className="mb-12 text-5xl  font-bold h-20 ">{title}</h2>
           <div  className=''>
              <img className="w-full" src="/images/ball.jpg" alt={title}/> 
           </div>
         
           
           <div className='sm:w-5/6'>
            <h3 className='text-base italic mb-2 '>{description}</h3>
            <div className='mt-2 '>
                <p className='  py-4  text-2xl mb-4'>{text}</p>
            
            </div>
          
           </div>
          
       </article>
       <Widget/>
        </div>   
     
    </section>
  
    )
}

    