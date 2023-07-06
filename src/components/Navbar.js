/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {motion} from 'framer-motion';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
// import './Navbar.css'




const Navbar = () =>{
    
    const variants ={
        open:{opacity: 1, x:2},
        closed: {opacity: 0, x: "-100%"}
    }

    const iconvar = {

        open:{opacity: 0, x:"-100%" },
        closed: {opacity: 1, x: 2}
    }

    


    const [show , setShow] = useState(false);
    
    const showSidebar = () => setShow(!show);

    return(
  
        <IconContext.Provider value={{ color: 'grey' }} className="ab" >
            <motion.div className=" flex flex-col items-start"  onClick={showSidebar}>
                <motion.maindiv className= " absolute h-screen w-screen flex  items-center  justify-start pl-28   bg-gradient-to-r from-white to-gray-300  backdrop-blur-xl" 
                 animate={show ? "open" : "closed"}
                 variants = {variants}
                 transition ={{duration: 0.7}}>

                    <motion.nav className=" flex flex-col gap-8"
                    animate={show ? "open" : "closed"}
                    variants = {variants}
                    transition ={{duration: 0.7}}
                    >
                        <motion.nav
                            animate={show ? "open" : "closed"}
                            variants = {variants}
                            transition ={{duration: 0.6}}
                            className=""
                        >
                            <motion.div className="inner-nav " onClick={showSidebar} >       
                            <motion.button
                                className=" ab font-bold  xl:text-8xl text-4xl hover:text-[#B5B5B5] text-[#605e5e] tracking-wide line-height: 1rem "
                                
                            >
                                    <a href="/" className='gap-2' >Home</a>
                                </motion.button>                                                 
                            </motion.div>
                        </motion.nav>

                        <motion.nav
                            animate={show ? "open" : "closed"}
                            variants = {variants}
                            transition ={{duration: 0.9}}
                            
                        >
                            <motion.div className="inner-nav" onClick={showSidebar}>       
                                <motion.button
                                    className=" ab  xl:text-8xl text-4xl   font-bold  text-[#605e5e]  hover:text-[#B5B5B5] tracking-wide"
                                        
                                >
                                    <a className='' href="#Services">Services</a>
                                </motion.button>                                                
                            </motion.div>
                        </motion.nav>

                        <motion.nav
                            animate={show ? "open" : "closed"}
                            variants = {variants}
                            transition ={{duration: 1.2}}
                        >
                            <motion.div className="inner-nav" onClick={showSidebar} >       
                                <motion.button
                                className=" ab   xl:text-8xl text-4xl   font-bold  text-[#605e5e] tracking-wide  hover:text-[#B5B5B5]"
                                    
                                >
                                    <a  className='' href="#Mancave">Mancave</a> 
                                </motion.button>                                                 
                            </motion.div>
                        </motion.nav>

                        <motion.nav
                            animate={show ? "open" : "closed"}
                            variants = {variants}
                            transition ={{duration: 1.5}}
                        >
                            <motion.div className="inner-nav" onClick={showSidebar}>       
                                <motion.button
                                    className=" ab  xl:text-8xl text-4xl  font-bold  text-[#605e5e] tracking-wide  hover:text-[#B5B5B5] "
                                    
                                >
                                    <a className='' href="#Career">Career</a> 
                                </motion.button>                                                
                            </motion.div>
                        </motion.nav>

                        <motion.nav
                            animate={show ? "open" : "closed"}
                            variants = {variants}
                            transition ={{duration: 1.8}}
                        >
                            <motion.div className="inner-nav" onClick={showSidebar}>
                                <motion.button 
                                    className="ab  xl:text-8xl text-4xl font-bold  text-[#605e5e] tracking-wide  hover:text-[#B5B5B5]"
                                    
                                >
                                    <a className='' href="#Connect">Connect</a>  
                                </motion.button>                             
                            </motion.div>
                        </motion.nav>
                    </motion.nav>
                </motion.maindiv>
                
               
                <motion.btn 
                className="toggle absolute flex items-center justify-center h-screen pl-10" 
                animate={show ? "open" : "closed"}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                variants = {iconvar}
                onClick={showSidebar}
                >
                    <a className='text-4xl  '><AiIcons.AiOutlineRight  /></a> 
                </motion.btn>
            </motion.div>
        </IconContext.Provider>
    
    )
}

export default Navbar