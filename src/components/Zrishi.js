import React from 'react';
import rishivid from '../images/rishivid.gif'
import { useNavigate} from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
 
function RishiC() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    const navigate = useNavigate();
    return(

        <div className=' select-none flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={rishivid} className="scale-50 sm:scale-100 mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                <IconContext.Provider value={{ color: 'grey' }} className="ab  " >
                        <button className='text-3xl   flex items-center  justify-end pb-10 w-[60%] ' onClick={() => navigate(-1)}><AiIcons.AiOutlineClose/></button> 
                    </IconContext.Provider>
                    <div className='w-auto h-12 text-3xl bg-[#225BBB] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al ml-5'>WEB </p><p className='ah pl-2 mr-5'>DEVELOPER</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                        Rishi <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        I am a passionate and dedicated worker who is always looking for ways to improve and innovate. 
                        I arrive at the office each morning with my futuristic RGB setup in tow, ready to tackle the day's 
                        challenges. As a night owl, I often spend late nights animating and perfecting designs, determined 
                        to find solutions to even the most difficult problems. With my fearless attitude and love for technology, 
                        I am a valuable asset to our team. </p>
                    </div>
                </div>
            </div>

        </div>
       
    )
}

export default RishiC