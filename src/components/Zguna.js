import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import gunavid from '../images/1.gif';
import { useNavigate} from 'react-router-dom';


document.addEventListener('contextmenu', event => event.preventDefault());
function Guna() {
    const navigate = useNavigate();
    return(
        
        <div className='bg-black h-screen overflow-y-clip flex items-start justify-end'>
            
                <div className='select-none flex flex-col sm:flex-row w-fill  mb-20  h-auto sm:h-screen bg-black gunabg  '>

                <div className='basis-1/2 items-center justify-center flex   mix-blend-lighten'>
                    <img src={gunavid} galleryimg="no" className="  mix-blend-difference z-50 scale-50 sm:scale-100" alt="guna"></img>

                </div>
                <div className='basis-1/2 items-center justify-center flex '>
                    <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                            <IconContext.Provider value={{ color: 'grey' }} className="ab  " >
                                <button className='text-3xl   flex items-center  justify-end pb-10 w-[60%] ' onClick={() => navigate(-1)}><AiIcons.AiOutlineClose/></button> 
                            </IconContext.Provider>
                        <div className='w-auto h-12 text-3xl bg-[#912D38] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                            <p className='al ml-4'>FULL STACK </p><p className='ah pl-2 pr-6 mr-4'>DEVELOPER</p>
                            
                        </div>
                        <div className='ah pt-10 text-white text-4xl '>
                            Guna <br></br>
                        </div>
                        <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                            <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                            I am a tech junkie who starts each day by fueling up on coffee, always seeking that 
                            perfect caffeine rush and tackling any lingering bugs from the previous day.  
                            My love for technology and coffee drives me to constantly improve and innovate, 
                            and I am always looking for ways to enhance my skills and contribute to the success 
                            of the team.</p>
                        </div>
                    </div>
                </div>

        </div>
            
            </div>
        
        
        
    )
}

export default Guna