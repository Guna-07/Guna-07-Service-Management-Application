import React from 'react';
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn
} from 'react-icons/fa';

import {
  AiOutlineYoutube,
} from 'react-icons/ai';

import {
  TiSocialTwitter
} from 'react-icons/ti';


document.addEventListener('contextmenu', event => event.preventDefault());
const Footer = () => {
  document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className='select-none h-auto w-full flex flex-col items-center justify-center bg-zinc-900 gap-5 pb-2'>
      <div className='flex justify-between w-[70%] sm:w-[20%] my-6 '>
        <a href='https://instagram.com/grustl.inc?igshid=NDk5N2NlZjQ='><FaInstagram size={30} className="text-white"/></a>
        <a href='https://twitter.com/grustltweets?s=11&t=ySmcKRar45AXwqFPPvmGFA'><TiSocialTwitter size={30} className="text-white"/></a>
        <a href=''><AiOutlineYoutube size={30} className="text-white"/></a>
        <a href=''><FaBehance size={30} className="text-white" /> </a>
        <a href=''><FaLinkedinIn size={30} className="text-white sm:flex hidden" /> </a>
      </div>
      <div className='text-[#909090]  al text-md sm:text-l flex flex-col items-center justify-center gap-5 '>
        {/* <p >@ 2022 Grustl.</p> */}
        <p className='text-[15px] text-center pl-5 pr-5'>Experience the power of transformative branding with Grustl, one of world's leading branding agency. Our team of experts will work with you to craft a unique and impactful brand identity that resonates <br></br> with  your audience and drives business growth.Take the first step towards elevating your brand and join us in creating meaningful change.</p>
        <div className='flex flex-row gap-2 duration-700'>
          <p className='hover:text-white duration-700 text-center '>Copyright © 2022 Grustl Creative Inc. All rights reserved.</p>
        </div>
        <span class="w-full border-t border-zinc-700 rounded lg:w-8/9"></span>
        <div className='flex flex-row gap-2 duration-700'>
          <p className='hover:text-white duration-700 text-center '>Grustl Originals </p>
          <p>|</p>
          <p className='hover:text-white duration-700 text-center'> Privacy Policy </p>
          <p>|</p>
          <p className='hover:text-white duration-700 text-center'> Terms </p>
          <p>|</p>
          <p className='hover:text-white duration-700 text-center'> Copyright Policy</p>
        </div>
      </div>

    </div>
  );
};

export default Footer