import React from 'react'
import { FaFilePdf } from 'react-icons/fa'

const Files = ({ files }) => {
  return (
    <div className="flex gap-4 justify-start">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white border border-gray-300 shadow w-24 h-32 p-2 overflow-hidden"
        >
          <FaFilePdf className="text-red-500 text-2xl mb-2" />
          <span className="block w-full text-center text-xs truncate">
            {file.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Files