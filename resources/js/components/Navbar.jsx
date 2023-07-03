import { useState,useEffect } from 'react';
import { Link } from '@inertiajs/react';
import {FaSearch,FaWindowClose,FaBars} from "react-icons/fa";
import {menuLinks} from '../data.js'

export default function Navbar()
{
    const [showMenu,setShowMenu] = useState(false);
    // const [showSearch,setShowSearch] = useState(false);
    const [hideMenu,setHideMenu] = useState(true);
  
   const handleSearch = () => {
         
   }

 
   const handlemenuOpen = () => {
         if(!showMenu){ 
             setShowMenu(true)
            setHideMenu(false)
            document.getElementById('navBar').classList.remove('hidden') 
         }else{
            setShowMenu(false)  
            setHideMenu(true)
            document.getElementById('navBar').classList.add('hidden') 
         }
         
   }

    return(
        <nav className="flex flex-wrap lg:relative lg:flex-nowrap   lg:justify-between   md:items-center border-2 border-gray-200 mb-10">
                
                <div className='flex w-full justify-around  items-center lg:w-2/12  2xl:w-1/12'>
                    <div className='w-48 '>
                        <Link href={route('articles.index')}>
                        <img src="images/logo.png" alt="SportDog Logo" className='inline-block  lg:w-96'/>                  
                        </Link>
                    </div>
                    <div className='lg:hidden lg:m-0 mr-1 mt-2 '>
                        <button  onClick={handlemenuOpen}>{!showMenu ?<FaBars className='w-8 h-8 text-sky-800'/> : <FaWindowClose className='w-8 h-8 text-sky-800'/>}</button>
                    </div>
                </div>    
            
                <div className=' flex  lg:w-10/12 2xl:w-9/12 '> 
                    <ul className=" hidden w-screen  transition-all duration-1000 ease-in-out h-screen flex flex-col gap-5 lg:gap-0 lg:h-auto lg:justify-center lg:ml-6  bg-blue-900 lg:flex  lg:flex-row lg:bg-white  " id="navBar">
                        {menuLinks.map((link)=>{
                            const {id,href,styleLink,label} = link;
                            return <Link key={id} href={href} className={styleLink}>{label}</Link>
                        })}
                    </ul>
                </div>
                {/* <div className='hidden lg:flex lg:justify-end '>
                    <button onClick={handleSearchInvs} className='bg-blue-900  font-thin text-white w-10 h-14'>{showSearch ?<FaWindowClose className='m-auto'/> : <FaSearch className='m-auto'/>}</button>
                </div> */}
                <div className="hidden lg:flex  lg:w-1/12 lg:absolute lg:top-full lg:left-1/3 2xl:w-2/12 2xl:static " id="form-container">    
                <form action="/"  className='lg:relative  lg:mx-auto lg:mt-2 2xl:my-0   border-2 rounded border-sky-700 '> 
                        <div className=' xl:flex  border-sky-700 '>
                               <input placeholder='search' type="text" id="search" className='lg:w-96 2xl:w-48   '/>
                               <button><FaSearch className=' font-thin text-sky-700 lg:absolute  lg:right-0.5 lg:top-0.5'/></button>
                              
                        </div>                      
                    </form>      
                </div>    
               
        </nav>
  
    )
}

