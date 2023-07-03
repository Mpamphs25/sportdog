import React, { useEffect, useState } from 'react';
import Card from '../../components/Card.jsx';
import Maincard from '../../components/Maincard.jsx'
import Widget from '../../components/Widget.jsx';
import MiddleSectionTwo from '../../components/MiddleSectionTwo/MiddleSectionTwo.jsx';
import Section from '../../components/Section.jsx';
import Bloggers from '../../components/Bloggers/Bloggers.jsx';
import MiddleSection from '../../components/MiddleSection/MiddleSection.jsx';
import MiddleSectionThree from '../../components/MiddleSectionThree/MiddleSectionThree.jsx';
import SLider from '../../components/Slider/SLider.jsx';
import Life from '../../components/Life/Life.jsx';
export default function Articles({articles}) {
  
   const [newItems,setNewItems] = useState([])
   const [newItemsThree,setNewItemsThree] = useState([])
   const [restItems,setRestItems] = useState([])
   const [newRestItems2,setNewItems2] = useState([])
   const [newRestItemsFour,setNewItemsFour] = useState([])
   const [bets,setBets] = useState(articles.slice(-9))
   const [life,setLife] = useState(articles.slice(0,10))
   const change = () => {
    let newItems2 = articles.slice(0,2)
    let newItems3 = articles.slice(2,4)
    let newRestItems = articles.slice(4,14)
    let newRestItemsTwo = articles.slice(16,18)
    let newRestItems4 = articles.slice(18,36)
    setNewItems(newItems2)
    setNewItemsThree(newItems3)
    setRestItems(newRestItems)
    setNewItems2(newRestItemsTwo)
    setNewItemsFour(newRestItems4)
    
   }
   
   
   useEffect(()=>{
    change()
   },[])
   
//className=' flex flex-col lg:flex-row lg:flex-wrap mt-12 '
    return ( 
      <> 
    
        <Section>
            <div className='lg:flex lg:gap-7 '>
                  {
                    newItems.map((article,index)=>{
                      const {id,text,title,description,slug} = article; 
                      return  <Maincard key={id} text={text} title={title} slug={slug} description={description} index={index}/>
                    })
                  }
              </div> 
        </Section>
                
        
        <div className='max-w-screen-xl mx-auto flex flex-col flex-nowrap lg:justify-start lg:flex-row  lg:justify-between mt-12 '> 
                <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-around lg:w-8/12  flex-1 lg:mr-5'> 
                 
                  {  newItemsThree.map((article,index) => {
                    const {id,text,title,description,slug} = article; 
                  
                    return  <Card key={id} text={text} title={title} slug={slug} description={description} />
                    })}

                 
                </div>     
                <Widget />  
        </div>  
        <Bloggers/>
        <MiddleSection restItems={restItems} />
        <MiddleSectionTwo newRestItemsTwo={newRestItems2}/>
        <MiddleSectionThree newRestItemsFour={newRestItemsFour}/>
        <SLider bets={bets}/>
        <Life life={life}/>
      </>   
    )
  }