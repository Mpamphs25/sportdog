import React, { useEffect, useState } from 'react'
import SliderBig from './SliderBig'
import SliderMedium from './SliderMedium'
import SliderSmall from './SliderSmall'

export default function SliderItem({bets}) {
    const [sliderBetsMedium,setSliderBetsMedium] = useState(bets.slice(0,bets.length-1))
    const [isDesktop,setDesktop] = useState(window.innerWidth >=1024)
    const [isLaptop,setLaptop] = useState(window.innerWidth >= 508 && window.innerWidth < 1023)
    const [isMobile,setIsMobile] = useState(window.innerWidth < 508)
    const updateMediaDesktop = () =>{
        setDesktop(window.innerWidth >= 1024)
    }

    const updateMediaLaptop = () =>{
        setLaptop(window.innerWidth >= 508 && window.innerWidth < 1023)
    }
    const updateMobile = () => {
        setIsMobile(window.innerWidth < 508)
    }
    useEffect(()=>{
        window.addEventListener('resize',updateMediaDesktop);
        return () => window.removeEventListener('resize',updateMediaDesktop)
    },[isDesktop])

    useEffect(()=>{
        window.addEventListener('resize',updateMediaLaptop);
        return () => window.removeEventListener('resize',updateMediaLaptop )
    },[isLaptop])


    useEffect(()=>{
        window.addEventListener('resize',updateMobile)
        return ()=>window.removeEventListener('resize',updateMobile)
    },[isMobile])

    if(isMobile){
        return <SliderSmall bets={bets}/>
    }
    if(isLaptop) {
        return <SliderMedium bets={sliderBetsMedium}/>
    }
   
    if(isDesktop){
        return <SliderBig bets={bets}/>
    }
}

