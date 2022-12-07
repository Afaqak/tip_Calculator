import React from 'react'

const Button = ({label,setVal,buttonType,value}) => {
  return (
    <button
      value={value}
    onClick={setVal} className={`hover:cyan-dark-grayish transition-all duration-500 ease-in-out active:-translate-y-1 ${buttonType}`}>{label}</button>
  )
}

export default Button;