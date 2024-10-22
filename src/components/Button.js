import React from 'react'

const Button = ({name,value,className,handleClick}) => {
  return (
    <>
      <button className={className} onClick={handleClick} name={name}>{value}</button>
    </>
  )
}

export default Button
