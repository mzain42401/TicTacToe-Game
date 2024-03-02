import React from 'react'

const Square = ({onclick,value,isDark}) => {
  return (
    <>
      <div onClick={onclick} className={`${value==='0'?"bg-red-700":null} ${value==='X'?"bg-green-700":null} ${isDark?"bg-[#3f3f46]":"bg-[#1b1b1f]"}  text-white w-28 m-2 h-28 rounded-lg cursor-pointer ${isDark?"hover:bg-[#54545c]":"hover:bg-[#38383d]"} 
      flex justify-center items-center ${value ==='0'?"hover:bg-red-700":null} ${value ==='X'?"hover:bg-green-700":null}`}>
        <h1 className='text-7xl font-bold'>{value}</h1>
      </div>

    </>
  )
}

export default Square
