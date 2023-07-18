import { useEffect, useState } from 'react';

import { Link,useForm,router } from '@inertiajs/react';
import {FaSearch,FaWindowClose,FaBars} from "react-icons/fa";
import {menuLinks} from '../data.js'

export default function Navbar()
{   

    const {errors,data,setData,get} = useForm({
        search:''
    })
  
    const [showMenu,setShowMenu] = useState(false);
    
    const [hideMenu,setHideMenu] = useState(true);
  
   const handleSearch = (e) => {
    e.preventDefault()
    get('/search')
    
  
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
        <nav className="w-full  flex flex-wrap lg:relative lg:flex-nowrap lg:h-16  lg:justify-between   md:items-center border-2 border-gray-200 mb-10">
                
                <div className='flex justify-between  items-center w-full lg:w-auto'>
                    <div className='sm:w-48 '>
                        <Link href={route('articles.index')}>
                        <img src="images/logo.png" alt="SportDog Logo" className='inline-block  '/>                  
                        </Link>
                    </div>
                    <div className='   lg:w-0 lg:hidden lg:m-0 mr-1 mt-2 '>
                        <button  onClick={handlemenuOpen}>{!showMenu ?<FaBars className='w-8 h-8 text-sky-800'/> :
                         <FaWindowClose className='w-8 h-8 text-sky-800'/>}</button>
                    </div>
                </div>    

                <div className='flex    lg:justify-end lg:items-center gap-10'>
                   
                    <div className=' flex '> 
                        <ul className="lg:mr-12  hidden w-screen lg:w-full h-screen flex flex-col gap-5 lg:gap-0 lg:h-auto lg:justify-center  bg-blue-900 lg:flex  lg:flex-row lg:bg-white  " id="navBar">
                            {menuLinks.map((link)=>{
                                const {id,href,styleLink,label} = link;
                              
                                return <Link  key={id} href={`/category/${href}`} className={styleLink}>{label}</Link>
                            })}
                        </ul>
                    </div>
                
                    <div className="hidden lg:flex   lg:absolute lg:top-full lg:left-1/3  2xl:static " id="form-container">    
                             <form onSubmit={handleSearch} action="search"   className='lg:relative  lg:mx-auto lg:mt-2 2xl:my-0   border-2 rounded border-sky-700 '> 
                                <div className=' xl:flex  border-sky-700 '>
                                    <input placeholder='search' name="search" type="text" id="search" className='lg:w-96 2xl:w-48' onChange={(e)=> setData('search',e.target.value)}/> 
                                    <button><FaSearch className=' font-thin text-sky-700 lg:absolute  lg:right-0.5 lg:top-0.5'/></button>
                                    
                                </div>                      
                            </form>       
                    </div>    
                </div>
        </nav>
  
    )
}

