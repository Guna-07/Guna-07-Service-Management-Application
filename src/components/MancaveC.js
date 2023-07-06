/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-lone-blocks */

import Aos from 'aos';
import"aos/dist/aos.css";
import {React, useState} from 'react'
import { useEffect } from 'react';
import guna from '../images/gunamancave.png'
import rishi from '../images/rishimancave.png'
import kiran from '../images/kiranmancave.png'
import thiksha from '../images/thikshamancave.png'
import kitty from '../images/kittymancave.png'
import pratap from '../images/pratapmancave.png'
import sriram from '../images/srirammancave.png'
import prano from '../images/pranomancave.png'
import sriyaa from '../images/sriyaamancave.png';
import {Link} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import gunavid from '../images/1.gif'
import rishivid from '../images/rishivid.gif'
import kiranvid from '../images/kiranvid.gif'
import thikshavid from '../images/thikshavid.gif'
import pratapvid from '../images/pratapvid.gif'
import sriyaavid from '../images/sriyaavid.gif'
import pranovid from '../images/pranovid.gif'
import sriramvid from '../images/sriramvid.gif'
import kittyvid from '../images/kittyvid.gif'
//import * as AiIcons from 'react-icons/ai';

function MancaveC(props) {

  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

  // const [isClicked, setIsClicked] = useState(false);

  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };

  document.addEventListener('contextmenu', event => event.preventDefault());

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const images = [gunavid, rishivid, kiranvid,sriyaavid,pranovid,sriramvid,thikshavid,pratapvid,kittyvid];
  // const content=[<div>eer</div>,<div>gweff</div>]
  // const prevImage = () => {
  //   const newIndex = currentIndex - 1;
  //   setCurrentIndex(newIndex < 0 ? images.length - 1 : newIndex);
  // };

  // const nextImage = () => {
  //   const newIndex = currentIndex + 1;
  //   setCurrentIndex(newIndex === images.length ? 0 : newIndex);
  // };


  return (
    <div id="Mancave" className='select-none nrfkjn  flex flex-col items-center justify-center bg-black z-20 ' data-aos="fade-up" data-aos-easing="ease-in-out">
      
      
      <div className='bg-black h-[60%] pt-50 sm:pt-0 sm:h-screen flex items-center justify-center w-full'  >
        <div className=" " data-Aos="fade-up fade-out" data-aos-delay="400">
          <div  className='ah  bg-black flex flex-col  text-7xl xl:text-9xl gap-0  text-white   justify-center  z-50  fade fadeIn'  >
              <p className='text-center w-full' >the mancave.
              </p>
          </div>
        </div>
      </div>
      
      <div class="carousel pb-40 sm:flex hidden scrollable-container" data-aos="fade-up" data-aos-easing="ease-in-out">
        <div class="carousel-item mgbg z-0 "><Link  to='/Mancave/Guna'><button><img src={guna} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mrbg z-[10] -ml-40 "><Link  to='/Mancave/Rishi'><button><img src={rishi} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkbg z-[12] -ml-40"><Link  to='/Mancave/Kiran'><button><img src={kiran} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mksriyaabg z-[13] -ml-40"><Link  to='/Mancave/Sriyaa'><button><img src={sriyaa} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkpranobg z-[14] -ml-40 "><Link  to='/Mancave/Prano'><button><img src={prano} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mksribg z-[15] -ml-40"><Link  to='/Mancave/Sriram'><button><img src={sriram} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mtbg z-[16] -ml-40"><Link  to='/Mancave/Thiksha'><button><img src={thiksha} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkprabg z-[17] -ml-40"><Link  to='/Mancave/Pratap'><button><img src={pratap} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkitbg z-[18] -ml-40"><Link  to='/Mancave/Kitty'><button><img src={kitty} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        
      </div>
      

    
      {/*Mobile Div*/ }
      <AwesomeSlider buttons={true} 
      play
      mobileTouch={true}
      className='h-screen sm:h-0 invisible 'data-aos="fade-up" data-aos-easing="ease-in-out"  >

        {/*Guna*/}
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto  relative pb-40 pt-40 bg-black' >
          <div className='w-[100%] flex items-center justify-center '>
            <img src={gunavid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center   pt-28 mb-48  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col '>
                <div className='ah w-full  pt-0 text-[#464646] text-4xl'>
                  GUNA <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#912D38] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al  ml-4'>FULL STACK</p>  <p className='ah mr-4'> DEVELOPER</p>
                        
                </div>
                <p className='text-sm text-zinc-500 -translate-y-32 w-full text-right'>  &nbsp;</p>
                <p className='text-sm text-zinc-500 -translate-y-32 w-full text-right'>  Swipe</p>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-0 text-justify   '>
                  I am a tech junkie who starts each day by fueling up on coffee, always seeking that 
                  perfect caffeine rush and tackling any lingering bugs from the previous day.  My love 
                  for technology and coffee drives me to constantly improve and innovate, and I am always 
                  looking for ways to enhance my skills and contribute to the success of the team. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Rishi*/}
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={rishivid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                  RISHI <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#225BBB] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>WEB</p>  <p className='ah'> DEVELOPER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify  '>
                  I am a passionate and dedicated worker who is always looking for ways to improve and 
                  innovate. I arrive at the office each morning with my futuristic RGB setup in tow, 
                  ready to tackle the day's challenges. As a night owl, I often spend late nights 
                  animating and perfecting designs, determined to find solutions to even the most 
                  difficult problems. With my fearless attitude and love for technology. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Kiran*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={kiranvid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                  KIRAN <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#296152] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>STUDIO</p>  <p className='ah'>TASK MANAGER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify   '>
                  As the supervisor and coordinator of the studio, I am responsible 
                  for ensuring that our goals are met. I am known for my attention 
                  to detail and thorough knowledge of the studio's operations. I have 
                  consistently demonstrated my reliability and punctuality, making me 
                  a valuable asset to our team. </p>
                    </div>
              </div>
            </div>
          </div>
        </div>

        {/*Shriyaa*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={sriyaavid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                SRIYAA <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#633D79] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>PUBLIC</p>  <p className='ah'>RELATION</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  I am an extroverted woman with a  network of connections in the industry. 
                  As an influencer myself, I have a deep understanding of the influencer 
                  marketing space and am well-positioned to help others navigate it successfully.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/*prano*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={pranovid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                PRANO <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#7D2E26] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>ARCHITECTURAL </p>  <p className='ah'>DESIGNER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  I am known for my exceptional skills and dedication to my craft as an architect. 
                  My attention to detail and commitment to ensuring the highest quality of my work 
                  make me a valuable asset in the field of architecture.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/*Sriram*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={sriramvid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                SRIRAM <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#5D61E7] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>MERCHANDISE </p>  <p className='ah'>CONSULTANT</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  I am the driving force behind all of the custom resources that we have. 
                  From Grustl merch to custom Grustl notepads, I am responsible for ensuring 
                  that everything is taken care of and that the job is done. My dedication 
                  and hard work make me an invaluable member of our team.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/*Thiksha*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={thikshavid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                THIKSHA <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#6C553D] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>CONTENT</p>  <p className='ah'>STRATEGIST</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  I may be known for occasionally being late to work, but will get things 
                  done. I spend a lot of time brainstorming and sharing my creative ideas 
                  with the team. Despite this, I have a natural talent for sales and am able 
                  to successfully sell out events in a short amount of time.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/*pratap*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={pratapvid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                PRATHAP <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#564F3E] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>SEO</p>  <p className='ah'>ANALYST</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  I am a true geek who spends my days experimenting with algorithms 
                  and my nights analyzing data. I am friendly with my local pizza 
                  delivery person, who visits me at least three times a week. 
                  I am skilled at working with algorithms and know how to use 
                  them to my advantage.</p>
                    </div>
              </div>
            </div>
          </div>
        </div>

        {/*Kitty*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={kittyvid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                KITTY <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#6C553D] flex flex-row gap-2 items-center justify-center py-[2px] w-[70%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>SOCIAL</p>  <p className='ah'>MEDIA STRATEGIST</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  I am a powerhouse of enthusiasm and charisma packed into a small package. 
                  I am a keen learner, always tracking engagement and insights, and striving 
                  to learn new things every day. I carry forward an aesthetic vision that is 
                  evident in all my works. With my charming personality and keen eye for detail, 
                  I have all the qualities necessary for a perfect social outlook.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
      </AwesomeSlider>

      

     <div className='w-full h-40 bg-black'>

     </div>
     </div>
    );
}

export default MancaveC;

