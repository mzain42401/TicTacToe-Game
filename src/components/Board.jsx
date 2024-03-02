import React, { useEffect, useState } from 'react'
import Square from './Square'
import Swal from 'sweetalert2'
const Board = ({isDark }) => {
const [initialState,setInitialState]=useState(Array(9).fill(null))
const [isXturn,setisXturn]=useState(true)




const manageState=(index)=>{
    
    const duplicate=[...initialState]
    duplicate[index]=isXturn?"X":"0"
    setInitialState(duplicate)
    setisXturn(!isXturn)
    
}

useEffect(()=>{
    

    checkwinner()
   
})

const  checkwinner=()=>{
    const winnercondition=[ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for (let condition of winnercondition ) {
        const [a,b,c] = condition;
        if (initialState[a] !== null && initialState[a] === initialState[b] && initialState[a] === initialState[c]) {
            Swal.fire({
                icon: "success",
                title: "Excellent...",
                text: `"${initialState[a]}" , has won the game!`,
              }) ;
              setInitialState(Array(9).fill(null))
              setisXturn(true)
          }
          
        }
        return false
    
}


  return (
    <>

    <div className=' w-[50%] mt-16 m-auto  flex flex-col justify-center items-center  '>
       
              {/* row 1 */}

        <div className='flex justify-center items-center'>
            <Square onclick={()=>manageState(0)} value={initialState[0]} isDark={isDark}/>
            <Square onclick={()=>manageState(1)} value={initialState[1]} isDark={isDark}/>
            <Square onclick={()=>manageState(2)} value={initialState[2]} isDark={isDark}/>

        </div>

        {/* row 2  */}

        <div className='flex justify-between items-center'>
        <Square onclick={()=>manageState(3)} value={initialState[3]} isDark={isDark}/>
        <Square onclick={()=>manageState(4)} value={initialState[4]} isDark={isDark}/>
        <Square onclick={()=>manageState(5)} value={initialState[5]} isDark={isDark}/>

        </div>

        {/* row 3 */}

        <div className='flex justify-between items-center'>
        <Square onclick={()=>manageState(6)} value={initialState[6]} isDark={isDark}/>
        <Square onclick={()=>manageState(7)} value={initialState[7]} isDark={isDark}/>
        <Square onclick={()=>manageState(8)} value={initialState[8]} isDark={isDark}/>

        </div>
          

    </div>
    <div className={`text-center ${isDark?"text-white":"text-[#3f3f46]"}`}>
        {`Turn of  ${isXturn?"X":"0"}`}</div>
      
    </>
  )
}

export default Board
