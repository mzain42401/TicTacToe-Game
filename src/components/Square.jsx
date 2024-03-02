import React from 'react'

const Square = ({onclick,value,isDark}) => {
  return (
    <>
      <div onClick={onclick} className={`${value==='0'?"bg-red-700":null} ${value==='X'?"bg-green-700":null} ${isDark?"bg-[#3f3f46]":"bg-[#1b1b1f]"}  text-white md:w-28  md:m-2 m-1 w-24 md:h-28 h-24 rounded-lg cursor-pointer ${isDark?"hover:bg-[#54545c]":"hover:bg-[#38383d]"} 
      flex justify-center items-center ${value ==='0'?"hover:bg-red-700":null} ${value ==='X'?"hover:bg-green-700":null}`}>
        <h1 className='text-7xl font-bold'>{value}</h1>
      </div>

    </>
  )
}

export default Square
