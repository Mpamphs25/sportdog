import React from 'react'
import Cards from './Cards'

export default function MiddleSectionTwo({newRestItemsTwo}) {
  return (
    <section className='max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-2 mt-20'>
    
        {
            newRestItemsTwo.map((item) =>{
                return <Cards key={item.id} {...item}/>
            })
        }
    </section>
  )
}
