import React from 'react'
import Card from './Card.jsx';
import BigCard from './BigCard.jsx';
export default function MiddleSection({restItems}) {
  return (
    //className='w-full flex flex-wrap gap-1 justify-between items-start mt-20'
    <section className='max-w-screen-xl mx-auto grid sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-20'>
      
    {
      restItems.map((article,index) => {
        const {id,text,title,description,slug} = article; 
          
             
            if(index ===0) {
                return  (    
                    
                         <div className=' sm:col-span-2 sm:row-span-2  self-stretch justify-self-stretch ' key={id} >
                                <BigCard slug={slug} description={description} title={title}/>
                         </div>
                       )}
            if(index === 3){
                return  (    
                    
                    <div className='sm:col-span-4  lg:col-start-7 lg:col-end-9 lg:row-start-2 lg:row-span-2  ' key={id} >
                          
                    </div>
                  )
            
            }
                else{
                 return  (    
                         <div className=' sm:col-span-2' key={id}>
                                     <Card  slug={slug} text={text} title={title}/>
                        </div>
                       )
          }

        })
    }
</section>
  )
}


