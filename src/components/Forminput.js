import { useState } from "react";
import "../App.css";

const Forminput = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput pt-2">
      <input className=" appearance-none bg-gray-100 rounded-2xl w-full px-5 pt-4 pb-4 py-4 text-gray-900  focus:outline-none focus:shadow-outline"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <p className="sp">{errorMessage}</p>
    </div>
  );
};

export default Forminput