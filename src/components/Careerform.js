/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import grlogo from '../images/logo.svg';
import Forminput2 from './Forminput2.js'
import "../App.css";
// import { FileUploader } from "react-drag-drop-files";

   const Careerfrom = () => {

      const [values, setValues] = useState({
         Name: "",
         Email: "",
         Phone: "",
         files: "",
      });
   
   const inputs = [
      {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "It should be a valid Username!",
      required: true,
      },
      {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
      },
      {
         id: 3,
         name: "phone",
         type: "num",
         placeholder: "Phone",
         errorMessage: "It should be a valid phone number without +91!",
         pattern: `[0-9]{10}`,
         required: true,
      },
      {
         id: 4,
         name: "files",
         type: "files",
         placeholder: "Drop your files or Upload",
         errorMessage: "It should be a valid phone number without +91!",
         required: true,
      },
   ];
   //    const Drop = [
   //       {
   //          id: 1,
   //          name: "files",
   //          type: "files",
   //          placeholder: "Drop your files or Upload",
   //          errorMessage: "It should be a valid phone number without +91!",
   //          required: true,
   //       },
   // ];
   
   

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };

  return (
   <div className='h-auto w-full '>
      <div className=' shadow-xl bg-blend-overlay backdrop-contrast-200 flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed  backdrop-blur-max sm:backdrop-blur-3xl'>
        <a href="/" className=' h-full w-[120px] sm:w-[180px] pt-5 pr-4'><img src={grlogo} id="name" className="  " alt="" /></a>
      </div> 
       <div className=' sm:pb-0 pb-20 flex flex-col-reverse sm:flex-row items-center justify-center h-auto sm:h-screen gap-10 sm:gap-[200px] sm:pt-0 pt-40'>
        <div className='w-full max-w-sm'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
              
              {inputs.map((input) => (
                <Forminput2
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div class="flex justify-center flex-col ">
                    <div>
                        <div class="form-check flex flex-row">
                        <input class="form-check-input appearance-none h-4 w-6 border border-gray-300 rounded-sm bg-white checked:bg-black focus:outline-none transition duration-200 mt-3 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="pb-4 form-check-label inline-block text-gray-800 al w-[500px] text-sm" for="flexCheckDefault">
                            I have read the Privacy Policy and confirm that Grustl store my personal details to be able to process my job application.
                        </label>
                        </div>
                        <div class="form-check flex flex-row ">
                        <input class="form-check-input appearance-none h-4 w-6 border border-gray-300 rounded-sm bg-white checked:bg-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked />
                        <label class="form-check-label inline-block text-gray-800 al w-[500px] text-sm " for="flexCheckChecked">
                             Yes, Grustl can also contact me about future job opportunities.
                        </label>
                        </div>
                    </div>
               </div>
              <div className='flex flex-row justify-center'>
               <button className='flex items-center justify-center tracking-normal bg-black w-full  h-[65px]  ah   text-white  border border-gray-400 rounded-xl shadow hover:bg-white hover:text-black duration-700'>
                  SUBMIT 
                </button>
            </div>
          </form>   
        </div>
        <div className='flex items-center bg-white justtify-center '>
            <p className='ah text-6xl'>Let's grustl.<br />
            <p className='al text-6xl'>together</p></p>
        </div>
    </div>
   </div>
  )
}

export default Careerfrom