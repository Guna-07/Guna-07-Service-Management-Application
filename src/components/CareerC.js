import React from 'react';
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

function CareerC() {
  useEffect(()=>{
    Aos.init({duration:700,
      once: false, 
      mirror: true,});
  }, []);

  document.addEventListener('contextmenu', event => event.preventDefault());

  return (
    <div id="Career" className='bg-white max-w-screen pb-12  flex items-center justify-center flex-col select-none mx-10'>
     
      <div className='hidden sm:flex pl-[20px] pt-40 pb-20 z-20 top-0'data-aos="fade-up" data-aos-easing="ease-in-out">
        <span className='al text-[56px] sm:text-7xl text-black font-light leading-[65px] tracking-tight text-center'>
        Join the life at 
        
        <p className='ah '>grustl.</p>
        </span>
      </div>

      <div className='sm:hidden flex pl-[20px] pt-40 pb-20 z-20 top-0'data-aos="fade-up" data-aos-easing="ease-in-out">
        <span className='al text-[56px] sm:text-7xl text-black font-light leading-[65px] tracking-tight text-center'>
        Join the life  
        
        <p className='ah '>at grustl.</p>
        </span>
      </div>

      

      

      
      
      <div className='flex gap-5 flex-col md:flex-row items-center justify-center pt-0 w-full   sm:w-[95%]  ' >
        <div className=' flex flex-col md:flex-row  items-center  justify-center transform transition duration-500 hover:scale-103 w-full sm:w-[50%]'>
        <Link className='careerform w-[100%] sm:w-[40%] h-[289px] bg-[#1E1E1E] ' to='/Career/Careerfrom' data-aos="fade-up" data-aos-easing="ease-in-out">
        
        <div class="text-white text-right ">
              <p class="ah text-[34px] pt-10 text-right tracking-normal pr-5 leading-10">
                Content 
              
              <br></br>
              <p className='al'>
              Writer
              </p>
               
              </p>
              <p class="al text-base font-light text-[#acacac] al pt-[7px] pr-5 tracking-wide leading-4  ">
              craft 
                <br></br>
              
              engaging content. 
              </p>
              
            </div>
          </Link>
         
        {/* </div> */}
        <div className='bg-white sm:flex hidden w-[1px] sm:w-[15px]'>

        </div>

        
        {/* <div className='pr-5 transform transition duration-500 hover:scale-105'> */}
          <div class="sm:flex hidden w-[1px] sm:visible invisible sm:w-[60%] h-[289px] bg-[#EAEAEA]" data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="text-black text-right flex items-center justify-center flex-col">
              <p class="al font-normal text-[15px] pt-9 w-[90%] h-[183px] pr-4  al pl-4 text-justify ">
              Content Writer to join our editorial team, ultimately to deliver quality writing pieces 
              that appeal to our audiences, attract customers and boost brand awareness and enrich 
              websites with new blog posts, guides and marketing copy.</p>
              <div className='pt-10 pr-10  w-full'>
                <Link className='careerform' to="/Career/Careerfrom">
                  <button class=" ah  tracking-wide text-[12px] bg-[#EAEAEA] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#EAEAEA]  py-2 px-6 border border-gray-400 rounded-[6px] duration-700 ">
                    <span>R E A C H &nbsp; U S</span>
                  </button>
               </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=' sm:pr-8 flex flex-col md:flex-row sm:pt-20 md:pt-0 items-center w-[100%] sm:w-[50%] justify-center transform transition duration-500 hover:scale-103'>
          <Link className='careerform w-[100%] sm:w-[40%] h-[289px] bg-[#EAEAEA]' to='/Career/Careerfrom' data-aos="fade-up" data-aos-easing="ease-in-out">
          
          <div class="text-black text-right ">
            <p class="ah text-[34px] pt-10 text-right tracking-normal pr-5 leading-10">
                  Social Media 
                
                <br></br>
                  <p className='al'>
                  Admin
                  </p>
              </p>
              <p class="al text-base font-light text-black  pt-[7px] pr-5 tracking-wide leading-5  ">
              orchestrate 
                <br></br>
              
                online presence.
              </p>
              
            
          </div>
          </Link>
        {/* </div> */}
        <div className='bg-white w-[15px]'>

        </div>
        {/* <div className='pr-5 transform transition duration-500 hover:scale-110'> */}
          <div class="sm:flex hidden w-[1px] sm:visible invisible sm:w-[50%] h-[289px] bg-[#1E1E1E] " data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="text-white text-right flex items-center justify-center flex-col ">
              <p class="al font-normal text-[15px] pt-9 w-[85%] h-[183px]  text-justify ">
              Talented Social media manager to administer our social media accounts. You will be 
              responsible for creating original text and video content, managing posts and responding 
              to followers.</p>
              <div className='pt-10 pr-10  w-full'>
                <Link className='careerform' to="/Career/Careerfrom">
                  <button class=" ah  tracking-wide text-[12px] hover:bg-[#EAEAEA] bg-[#1E1E1E] hover:text-[#1E1E1E] text-[#EAEAEA]  py-2 px-6 border border-gray-400 rounded-[6px] duration-700 ">
                    <span>R E A C H &nbsp; U S</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-5 flex-col md:flex-row items-center justify-center pt-5 w-full sm:w-[95%] '>
        <div className=' flex flex-col md:flex-row transform transition duration-500 hover:scale-103 w-[100%] items-center justify-center sm:w-[45%]'>
        <Link className='careerform w-[100%] sm:w-[50%] h-[310px] bg-[#EAEAEA] ' to='/Career/Careerfrom' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="text-black text-right ">
              <p class="al text-[34px] pt-10 text-right tracking-normal pr-5 leading-10 pl">
                Motion Graphic
                <br></br>
                <p className='ah'>
                 Designer
                </p>
                
                </p>
                <p class="al text-base font-light text-black  pt-[7px] pr-5 tracking-wide leading-5  ">
                craft mesmerizing 
                  <br></br>
                
                  moving designs.
                </p>
                
              </div>
          </Link>
          
      
        {/* </div> */}
        <div className='bg-white w-[15px]'>

        </div>
        {/* <div className='pr-7 transform transition duration-500 hover:scale-110'> */}
          <div class="sm:flex hidden w-[1px] sm:visible collapse sm:w-[50%] h-[310px] bg-[#1E1E1E] " data-aos="fade-up" data-aos-easing="ease-in-out">
          <div class="text-white text-right flex items-center justify-center flex-col">
              <p class="al font-normal text-[12px] xl:text-[15px] pt-6 w-[90%] h-[183px] pr-7  pl-7 text-justify ">
              Motion Graphics Designer who will work closely with the marketing team, 
              video producers and other key stakeholders to brainstorm and create high 
              quality video content that reflect branding priorities.
              </p>
              <div className='pt-10 pr-10  w-full'>
                <Link className='careerform' to="/Career/Careerfrom">
                  <button class=" ah  tracking-wide text-[12px]  bg-[#1E1E1E] hover:bg-[#EAEAEA] hover:text-[#1E1E1E] text-[#EAEAEA]  py-2 px-6 border border-gray-400 rounded-[6px] duration-700 ">
                    <span>R E A C H &nbsp; U S</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:pr-8 flex flex-col md:flex-row transform transition duration-500 hover:scale-103 w-[100%] sm:w-[55%] items-center justify-center'>
        <Link className='careerform w-[100%] sm:w-[50%] h-[310px] bg-[#1E1E1E] ' to='/Career/Careerfrom' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="text-white text-right ">
            <p class="al text-[34px] pt-10 text-right tracking-normal pr-5 leading-10">
                 Director Of
                
                <br></br>
                  <p className='ah'>
                  Photography
                  </p>
            
              </p>
              <p class="al text-base font-light text-[#acacac] pt-[7px] pr-5 tracking-wide leading-5  ">
              capture  
                <br></br>
              
                top-notch visuals. 
              </p>
              
            </div>
          </Link>
        {/* </div> */}
        <div className='bg-white w-[15px]'>

        </div>
        {/* <div className='pr-7 transform transition duration-500 hover:scale-110 '> */}
          <div class="sm:flex hidden w-[1px] sm:visible invisible sm:w-[55%] h-[310px] bg-[#EAEAEA] " data-aos="fade-up" data-aos-easing="ease-in-out">
            <div class="text-black text-right flex items-center justify-center flex-col">
              <p class="al font-normal text-[15px] pt-6 w-[90%] h-[183px] pr-4  pl-4 text-justify ">
              Skilled and innovative cinematographer to join our team. The cinematographer’s 
              responsibilities include reading scripts and liaising with the director. You should 
              suggest suitable lighting, angles, filters, and techniques to the director, and also 
              work with the processing lab and post-production team. </p>
              <div className='pt-10 pr-10  w-full'>
                <Link className='careerform' to="/Career/Careerfrom">
                  <button class=" ah  tracking-wide text-[12px] bg-[#EAEAEA] hover:bg-[#1E1E1E] text-[#1E1E1E] hover:text-[#EAEAEA]  py-2 px-6 border border-gray-400 rounded-[6px] duration-700 ">
                    <span>R E A C H &nbsp; U S</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>


        

      </div>
      
    </div>
  );
}

export default CareerC;