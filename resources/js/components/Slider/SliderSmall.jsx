import React, { useEffect, useState } from 'react'
import SliderCard from './SliderCard'
import {FaAngleRight,FaAngleLeft} from 'react-icons/fa';

export default function SliderSmall({bets}) {
    const [betSlider,setBetSLider] = useState(bets)
    const [current,setCurrent] = useState(0)
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
      }

      const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

      const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
      
        if(isLeftSwipe){
            slideLeft()
        }
        if(isRightSwipe){
            slideRight()
        }
      }
    const slideRight = () => {
        
        current >= betSlider.length-1 ? setCurrent(0) : setCurrent(current+1) 
        
    }

    const slideLeft = () => {
        current <= 0 ? setCurrent(betSlider.length-1) : setCurrent(current-1)
    }

    useEffect(()=>{
        let slideId = setInterval(()=> {
            slideRight()
        },5000)
        return ()=> clearInterval(slideId)
    },[current])
  return(
    <>
   <div className='w-full'  onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
   
     {
        betSlider.map((bet,index)=>{
            const {text,title,slug} = bet
              return (
              <SliderCard 
               slug={slug} text={text} 
               title={title} 
               slideRight={slideRight}
                slideLeft={slideLeft}
              current={current}
              index={index}
                />
              
            )
        })
    }
    </div>
    <div>
     <button  onClick={slideLeft}><FaAngleLeft className='text-white text-5xl ' style={{position:'absolute', top:'51%', left:'-4%'}}/></button>
     <button onClick={slideRight}><FaAngleRight className=' text-white text-5xl 'style={{position:'absolute', top:'50%', right:'-4%'}}/></button>
    </div>
    
    </>
 )
}
