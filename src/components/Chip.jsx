import React from 'react'

function Chip({text, className}) {
  return (
    <div className={`text-center text-sm font-medium mb-4 ${className}`}>
        <span 
            className='inline-block py-1 rounded-xl px-5 bg-l-gray-200 dark:bg-d-gray-200 text-l-gray-600 dark:text-d-gray-600'
        >
            {text}
        </span>
    </div>
  )
}

export default Chip