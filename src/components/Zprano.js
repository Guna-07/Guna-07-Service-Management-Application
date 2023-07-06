import React from 'react';
import pranovid from '../images/pranovid.gif'
import { useNavigate} from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
 
function Prano() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    const navigate = useNavigate();
    return(

        <div className='select-none flex sm:flex-row flex-col w-fill  h-auto sm:h-screen bg-black gunabg'>
            <div className='basis-1/2 items-center justify-center flex mix-blend-lighten '>
                <img src={pranovid} className="kittyvid mix-blend-difference z-50 scale-75" alt="guna"></img>
            </div>
            <div className='basis-1/2 items-center justify-center flex '>
                <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                <IconContext.Provider value={{ color: 'grey' }} className="ab  " >
                        <button className='text-3xl   flex items-center  justify-end pb-10 w-[60%] ' onClick={() => navigate(-1)}><AiIcons.AiOutlineClose/></button> 
                    </IconContext.Provider>
                    <div className='w-auto h-12 text-3xl bg-[#7D2E26] text-[#D4D4D4]   flex items-center justify-center rounded-sm tracking-wider'>
                        <p className='al ml-5'>ARCHITECTURAL  </p><p className='ah pl-2 mr-5'>DESIGNER</p>
                    </div>
                    <div className='ah pt-10 text-white text-4xl '>
                    Prano <br></br>
                    </div>
                    <div className='flex items-center justify-center sm:items-start sm:justify-start'>
                        <p className='text-[#A4A4A4] text-[18px] pt-3 text-justify w-[95%] sm:w-[70%] al'>
                        I am known for my exceptional skills and dedication to my craft as an architect. 
                        My attention to detail and commitment to ensuring the highest quality of my work 
                        make me a valuable asset in the field of architecture.</p>
                    </div>
                </div>
            </div>
        </div>
        
        
       
    )
}

export default Prano

