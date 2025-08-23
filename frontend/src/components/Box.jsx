import React from 'react'
import Button from './Button.jsx'
import { FaArrowDown, FaDownload, FaUpload } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import UploadButton from './UploadButton.jsx';
import { useState } from 'react';
import Files from './Files.jsx';



const Box = () => {

  const [files, setFiles]= useState([]);

    const handleFileChange = (event) => {
        if (event.target.files)
        { 
            setFiles(prevFiles => prevFiles.concat(Array.from(event.target.files)));
            console.log(files);
        }
    };
    const handleClear = () =>
      {
        setFiles([]);
      } 


  return (
    <div
      className='bg-neutral-300 p-6 rounded-xl shadow-lg fixed'
      style={{
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: 'auto',
        height: '65%',
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-center items-start gap-4">
          <UploadButton text={"Upload"} color="bg-sky-900" icon={FaUpload} hover="hover:bg-sky-600" onChange={handleFileChange}/>
          <Button text={"Clear"} color="bg-red-600" icon={FaRegTimesCircle} hover="hover:bg-red-400" onClick={handleClear}/>
        </div>
        <div className={`bg-neutral-100 p-6 rounded-xl shadow-lg fixed outline-dashed flex h-full text-xl text-gray-500 ${
    files.length === 0 ? "justify-center items-center" : "justify-start items-start"}`}
      style={{
        left: '7%',
        right: '7%',
        bottom: '20%',
        top: 'auto',
        height: '35%',
        outlineStyle: 'dashed',
        outlineWidth: '3px',
        outlineColor: 'gray',
      }}>
        {files.length === 0 ? (
          <p >Drag your files here to upload</p>) : (
            <Files files={files}/>
          )}
        </div>
        <div className="flex justify-center">
          <Button text={"Combine & Download"} color="bg-emerald-700" hover="hover:bg-emerald-500" icon={FaDownload}/>
        </div>
      </div>
    </div>
  )
}

export default Box