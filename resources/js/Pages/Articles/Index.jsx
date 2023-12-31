import React, {  useEffect, useState } from 'react';

import Card from '../../components/Card.jsx';

import CardWithBgImg from '../../components/CardWithBgImg.jsx';
import Widget from '../../components/Widget.jsx';
import MiddleSectionTwo from '../../components/MiddleSectionTwo/MiddleSectionTwo.jsx';
import Section from '../../components/Section.jsx';
import Bloggers from '../../components/Bloggers/Bloggers.jsx';
import MiddleSection from '../../components/MiddleSection/MiddleSection.jsx';
import MiddleSectionThree from '../../components/MiddleSectionThree/MiddleSectionThree.jsx';
import SLider from '../../components/Slider/SLider.jsx';
import Life from '../../components/Life/Life.jsx';
export default function Articles({articles,twoArticles,skipTwoArticles,skipFourArticles,skipFourteenArticles,skipEighteenArticles}) {

   const [newItems,setNewItems] = useState(twoArticles)
   const [newItemsThree,setNewItemsThree] = useState(skipTwoArticles)
   const [restItems,setRestItems] = useState(skipFourArticles)
   const [newRestItems2,setNewItems2] = useState(skipFourteenArticles)
   const [newRestItemsFour,setNewItemsFour] = useState(skipEighteenArticles)
  
   const [bets,setBets] = useState(articles.slice(-9))
   const [life,setLife] = useState(articles.slice(0,10))  

 
   
    return ( 
      <> 
       
          <Section>
              <div className='lg:flex lg:gap-7 '>
                    {
                      newItems.map((article,index)=>{
                        const {id,text,title,description,slug,category,author,date} = article; 
                        if(index === 0) {
                          return  <CardWithBgImg key={id} customWidth='lg:w-3/6' customBmImg='/images/ball.jpg' text={text} title={title} slug={slug} author={author} date={date} category={category} description={description} index={index}/>
                        }else{
                          return  <Card key={id}  customBgSky='bg-sky-100' customWidth='lg:w-1/4'  text={text} title={title} author={author} date={date} category={category} slug={slug} description={description} />
                        }
                       
                      })
                    }
                </div> 
          </Section>
                  
          
          <div className=' max-w-screen-xl mx-auto flex flex-col flex-nowrap lg:justify-start lg:flex-row  lg:justify-between mt-12 '> 
                  <div className='  flex flex-col sm:flex-row sm:flex-wrap sm:justify-around lg:w-8/12  flex-1 lg:mr-5'> 
                  
                    {  newItemsThree.map((article,index) => {
                      const {id,text,title,description,slug,category,author,date} = article; 
                    
                      return  <Card key={id} customBmImg='/images/ball.jpg' customBgSky='bg-sky-100' customWidth='sm:w-6/12' text={text} title={title} author={author} date={date} category={category} slug={slug} description={description} />
                      })
                    }

                  
                  </div>     
                  <Widget />  
          </div>  
          <Bloggers />
          <MiddleSection restItems={restItems} />
          <MiddleSectionTwo newRestItemsTwo={newRestItems2}/>
          <MiddleSectionThree newRestItemsFour={newRestItemsFour} bets={bets} />
          <SLider bets={bets}/>
          <Life life={life}/>
       
      </>   
    )
  }