import React, {useRef, useEffect} from "react"
import grlogo from '../images/logo.svg';
import front from '../images/front.mp4'
import frontmob from '../images/frontmob.mp4'

function HomeC(props) {
  document.addEventListener('contextmenu', event => event.preventDefault());

  const videoRef = useRef(undefined);
    useEffect(() => {
        videoRef.current.defaultMuted = true;
    })
  return (
    <div className='h-screen w-fill select-none front'>
      
      
       <div className='z-50 shadow-xl bg-blend-overlay backdrop-contrast-200 flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed  backdrop-blur-max sm:backdrop-blur-3xl'>
        <a href="/" className=' h-full w-[120px] sm:w-[180px] pt-5 pr-4'><img src={grlogo} id="name" className="  " alt="" /></a>
      </div>

      <video
            className='sm:object-cover h-screen flex sm:hidden '
            ref={videoRef}
            autoPlay
            muted
            playsInline>
            <source src={frontmob} type="video/mp4"/>
        </video>

      
      <video src={front}  muted autoPlay   className='sm:object-cover h-screen sm:flex hidden ' />  
      
    </div>
    
  );
}
export default HomeC;
