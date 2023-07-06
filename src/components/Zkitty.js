import React from 'react';
import kittyvid from '../images/kittyvid.gif'
import { useNavigate} from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
 
function KittyC() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    const navigate = useNavigate();
    return(

        <div className='select-none flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={kittyvid} className="scale-50 sm:scale-100 mix-blend-difference z-50" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                    <IconContext.Provider value={{ color: 'grey' }} className="ab  " >
                        <button className='text-3xl   flex items-center  justify-end pb-10 w-[60%] ' onClick={() => navigate(-1)}><AiIcons.AiOutlineClose/></button> 
                    </IconContext.Provider>
                    <div className='w-auto h-12 text-3xl bg-[#3C5A77] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al ml-5'>SOCIAL MEDIA  </p><p className='ah pl-2 mr-5'>STRATEGIST</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    Kitty <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        I am a powerhouse of enthusiasm and charisma packed into a small package. I am a keen 
                        learner, always tracking engagement and insights, and striving to learn new things every day. 
                        I carry forward an aesthetic vision that is evident in all my works. With my charming personality 
                        and keen eye for detail, I have all the qualities necessary for a perfect social outlook.</p>
                    </div>
                </div>
            </div>

        </div>
        
        
       
    )
}

export default KittyC

