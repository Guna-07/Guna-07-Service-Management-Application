

import found from '../images/found.png'
import backingus from '../images/backingus.png'
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';

function FoundersC() {
    useEffect(()=>{
        Aos.init({duration:1000,
          once: false, 
          mirror: true,});
      }, []);
      document.addEventListener('contextmenu', event => event.preventDefault());
    return(
        <div className='flex items-center justify-center flex-col select-none pt-10' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='bg-white h-auto sm:h-screen flex flex-col sm:flex-row w-full sm:w-[80%] ' >
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='flex flex-col  items-center sm:justify-center justify-end sm:items-start  pt-40   w-full sm:w-[55%] text-justify sm:pt-10'>
                    <div className='text-5xl sm:text-6xl al  sm:text-left text-center w-full'>Meet</div>
                    <div className='text-5xl sm:text-6xl ah pt-2  '>The Founders</div>
                    <div className='al w-[100%] text-[1px] sm:text-[16px] sm:pt-8 sm:visible invisible leading-[25px]'data-aos="fade-up" data-aos-easing="ease-in-out" >
                    Sanjeev has a successful entrepreneurial journey of over 5 years under his belt. With expertise in 
                    scaling startups and building strategies for top brands, he joined forces with Prateek who is a 
                    highly sought-after designer in the country, He is known for consistently coming up with innovative 
                    and original ideas, making him a valuable asset in the creative industry. Sharing a common vision 
                    and drive for success, the two founded Grustl, filling a gap in the market for a creative agency 
                    that understands the importance of out-of-the-box thinking for businesses. Together, they identified 
                    a problem in the commercial space and came up with a solution.
                    </div>
                    <div data-aos="fade-up" data-aos-easing="ease-in-out" className='hidden sm:flex flex-col pt-16 items-center justify-center'>
                        <div className='al text-[17px] sm:pt-0 pt-60'>
                            V E N T U R E S &nbsp; B A C K I N G &nbsp; U S
                        </div>
                        <div className=' sm:pt-0 pt-[10px]  w-full'>
                            <img src={backingus} alt="bakingus" className='scale-60'/>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[75%] flex items-center justify-center sm:pl-40  w-[100%]' data-aos="fade-up" data-aos-easing="ease-in-out">
                    <img src={found} className="sm:scale-65 2xl:scale-80 scale-90" alt='founders'/>
                </div>
            </div>
            <div className=' text-md  sm:hidden  flex flex-col items-center justify-center ' >
                <p className='al w-[80%] text-justify pt-8 text-[14px]' data-aos="fade-up" data-aos-easing="ease-in-out" >    
                    Sanjeev having a 5+ year long entrepreneurial journey backing him up. 
                    With all the expertise he had on scaling up startups and building 
                    strategies for the best brands in his previous company eventually 
                    stumbled upon Prateek who is a highly sought-after designer in the 
                    country, He is known for consistently coming up with innovative and 
                    original ideas, making him a valuable asset in the creative industry. 
                    Both being extremely ambitious and with all the like minded vision 
                    they both had they both joined hands and came up with Grustl considering 
                    the fact that there is no creative agency or resources in the country 
                    that doesn’t understand that “for a business to stand out of the box 
                    the traditional routes should be skipped out of the box ideas should be welcomed”. 
                    Both these pals identified a problem in the commercial space and came up with a fix.
                </p>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='sm:hidden flex flex-col  items-center justify-center '>
                    <div className='al text-[17px] sm:pt-0 pt-20'>
                        V E N T U R E S &nbsp; B A C K I N G &nbsp; U S
                    </div>
                    <div className=' sm:pt-0 pt-[10px]  w-full'>
                        <img src={backingus} alt="bakingus" className='scale-60'/>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default FoundersC