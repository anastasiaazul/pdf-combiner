import React from 'react'

const Button = ({ onClick, text, color = "bg-emerald-700", hover="hover:bg-emerald-500", icon: Icon}) => {
  return (
    <div>
      <button className={`${color} ${hover} text-white px-4 py-1 rounded font-semibold shadow flex items-center gap-2`} onClick={onClick}>
        {Icon && <Icon />}
        {text}
        
      </button>
    </div>
  )
}

export default Button