import React from 'react'
// import { FileUploader } from "react-drag-drop-files";
import { useState } from 'react';

const Forminput2 = (props) => {
    const [focused, setFocused] = useState(false);
    const { errorMessage, onChange, id, ...inputProps } = props;

    // const fileTypes = ["JPG", "PNG", "GIF"];

    // const [file, setFile] = useState(null);
    // const handleChange = (file) => {
    //   setFile(file);
    // };  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
      <div className="formInput pt-2">
        <input className=" appearance-none al bg-gray-100 rounded-2xl w-full px-5 pt-4 pb-4 py-4 text-gray-900  focus:outline-none focus:shadow-outline"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <p className="sp">{errorMessage}</p>
        {/* <div className=''>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
        </div> */}
      </div>
    );
  };

export default Forminput2