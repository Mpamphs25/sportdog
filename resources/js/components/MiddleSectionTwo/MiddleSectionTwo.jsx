import React from 'react'
import Cards from './Cards'
import Card from '../Card.jsx'

export default function MiddleSectionTwo({newRestItemsTwo}) {
  return (
    <section className='max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between gap-2 mt-20'>
    
        {
            newRestItemsTwo.map((item) =>{
                 return <Card key={item.id} {...item}/>
            })
        }
    </section>
  )
}
