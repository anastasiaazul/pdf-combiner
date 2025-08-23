import React from 'react'
import { useState } from 'react';

const UploadButton = ({ text, color = "bg-emerald-700", hover="hover:bg-emerald-500", icon: Icon, onChange}) => {

    
  const handleClick = () => {
    // Handle button click

  };
  return (
    <div>
    <form>
      <input type="file" id="fileUpload" className="hidden" onChange={onChange} multiple/>
    
        <label htmlFor="fileUpload" 
        className={`${color} ${hover} text-white px-4 py-1 rounded font-semibold shadow flex items-center gap-2`}>
       {Icon && <Icon />}
        Upload File
        </label>
      </form>
    </div>
  )
}

export default UploadButton
