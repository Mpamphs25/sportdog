import React from 'react'

function Section({children}) {
  return (
    <section className='max-w-screen-xl mx-auto flex  flex-wrap gap-3 sm:mx-auto sm:gap-0   '>     
          {children}      
    </section>
  )
}

export default Section