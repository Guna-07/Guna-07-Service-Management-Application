/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import grlogo from '../images/logo.svg';
import Forminput from './Forminput.js'
import "../App.css";
import axios from 'axios';

const Connectform = () => {
  
  const [values, setValues] = useState({
    Cname: "",
    Name: "",
    Email: "",
    Phone: "",
    Requirements: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Cname",
      type: "text",
      placeholder: "Company name",
      errorMessage:
        "Company name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "It should be a valid Username!",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "num",
      placeholder: "Phone",
      errorMessage: "It should be a valid phone number without +91!",
      pattern: `[0-9]{10}`,
      required: true,
    },
    {
      id: 5,
      name: "Requirements",
      type: "text",
      placeholder: "Enter your Requirements ",
      errorMessage:
        "Enter your requirements so that we could help you! ",
      required: true,
    },
  ];
  //   {
  //     id: 5,
  //     name: "confirmPassword",
  //     type: "password",
  //     placeholder: "Confirm Password",
  //     errorMessage: "Passwords don't match!",
  //     label: "Confirm Password",
  //     pattern: values.password,
  //     required: true,
  //   },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(values);
    const data = {
      Cname:values,
      Name:values,
      Email:values,
      Phone:values,
      Requirements:values
     }
     axios.post('https://sheet.best/api/sheets/71144621-2d2f-47e1-9516-ed1861e4b6b1',data).then((response)=>{
      //console.log(response);
      //clear form fields 
      setValues('');
     })
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  
  return (
    <div className='flex flex-row sm:flex-col w-full  h-auto'>
        <div className='z-50 shadow-xl bg-blend-overlay  flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed backdrop-blur-3xl'>
          <a href="/" className=' h-full sm:w-[10%] pr-10 xl:w-[10%] w-[30%] pt-5'><img src={grlogo} id="name" className="  " alt="" /></a>   
        </div> 
        <div className='flex items-center justify-center sm:h-screen h-auto sm:pb-20 w-full gap-20 sm:gap-[240px] pt-20 logoform sm:flex-row flex-col'>
          <div className='flex items-center bg-white justtify-center '>
                    <p className='ah text-6xl'>Connect<br />
                    <p className='al text-6xl'>with grustl.</p></p>
          </div>
          <div className='w-full max-w-md '>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 al  '>
              
              {inputs.map((input) => (
                <Forminput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className='flex flex-row gap-3 pt-5'>
                <button className='flex items-center justify-center tracking-normal bg-black w-full  h-[65px]  al   text-white  border border-gray-400 rounded-xl shadow hover:bg-white hover:text-black duration-700'>
                  SCHEDULE &nbsp;<span className='ah'>DEMO</span> 
                </button> 
              </div>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Connectform