import React from 'react'
import { useState } from 'react';

const UploadButton = ({ text, color = "bg-emerald-700", hover="hover:bg-emerald-500", icon: Icon}) => {

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files)
        {
            setFile(event.target.files[0]);
        }
    };
  const handleClick = () => {
    // Handle button click

  };
  return (
    <div>
    <form>
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button className={`${color} ${hover} text-white px-4 py-1 rounded font-semibold shadow flex items-center gap-2`} onClick={handleClick}>
        {Icon && <Icon />}
        {text}
      </button>
      </form>
    </div>
  )
}

export default UploadButton
