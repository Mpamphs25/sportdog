import React, { useEffect, useState } from 'react'
import SliderBig from './SliderBig'
import SliderMedium from './SliderMedium'
import SliderSmall from './SliderSmall'



export default function SliderItem({bets}) {
    const isDesktop1 = window.innerWidth >=1024 ;
const  isLaptop1 = window.innerWidth >= 508 && window.innerWidth < 1023;
const isMobile1 =window.innerWidth <508 ;

    const [sliderBetsMedium,setSliderBetsMedium] = useState(bets.slice(0,bets.length-1))
    const [device,setDevice] = useState()

    useEffect(()=>{
        window.addEventListener('resize',findDeviceType)
        // return ()=>window.removeEventListener('resize',findDeviceType)
    },[device])

    const findDeviceType = () =>{
        if(window.innerWidth < 508){
            setDevice(isMobile1)
        }

        if(window.innerWidth >= 508 && window.innerWidth < 1023){
            setDevice(isLaptop1)
        }

        if(window.innerWidth >=1024 ){
            setDevice(isDesktop1)
        }
    }
 
    if(isMobile1){
        return <SliderSmall bets={bets}/>
    }
    if(isLaptop1) {
        return <SliderMedium bets={sliderBetsMedium}/>
    }
   
    if(isDesktop1){
        return <SliderBig bets={bets}/>
    }
}

