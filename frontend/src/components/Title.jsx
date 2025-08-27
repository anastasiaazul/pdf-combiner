import React from 'react'

const Title = () => {
  return (
    <div className='mt-4 ml-16 '>
      <p className="text-4xl font-sans"><span className='text-red-700'>PDF </span>Combiner</p>
      <p>To combine multiple PDFs follow the steps below: </p>
      <ol className="list-decimal ml-6">
        <li>Upload your PDF files</li>
        <li>Click the "Combine" button</li>
        <li>Your combined files will be downloaded </li>
      </ol>
    </div>
  )
}

export default Title