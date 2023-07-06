import React from 'react';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';


function ConnectC() {
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

  document.addEventListener('contextmenu', event => event.preventDefault());

  return (
    <div id="Connect" className='text-white bg-black h-auto m select-none' data-aos="fade-up" data-aos-easing="ease-in-out">
      
       <div className=' flex flex-col sm:flex-row items-center justify-center h-screen 'data-aos="fade-up" data-aos-easing="ease-in-out">
          <div className=' flex flex-col w-[90%] sm:w-[40%] items-center justify-center sm:items-start sm:justify-center' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='text-white text-4xl sm:text-6xl font-bold ah text-center sm:text-left'>
                Reach the <br></br>
                grustl Minds.
            </div>
            <div className=' w-[100%] pt-10 sm:pt-20  items-center justify-center sm:w-[75%] text-white al text-center sm:text-justify text-xl sm:text-[18px] font-medium leading-8' data-aos="fade-up" data-aos-easing="ease-in-out ">  
              Thank you for considering Grustl for your upcoming call. Please use our calendar to find a convenient time that works for you, 
              and we look forward to connect with you soon.  
            </div>

          </div>

          <div className='sm:pt-0 pt-10  flex items-center justify-center sm:flex-row flex-col w-[20%]' data-aos="fade-up" data-aos-easing="ease-in-out">
            <Link className='connetform' to='/Connect/connectfrom'>
              <button className='flex ah items-center justify-center bg-black sm:w-[275px] w-[205px] h-[55px]  sm:h-[75px] text-lg sm:text-2xl font-semibold text-white  border border-gray-400 rounded-lg sm:rounded-xl shadow hover:bg-white hover:text-black duration-700'>
                <p className=''>C O N N E C T</p>
              </button>              
            </Link> 
          </div>
      </div>
    </div>
  );
}

export default ConnectC
