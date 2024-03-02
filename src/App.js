import React, { useState } from "react";
import { LuRefreshCw } from "react-icons/lu";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Board from "./components/Board";

const App = () => {
  const [isDark, setisDark] = useState(true);

  const restart=()=>{
  window.location.reload()
  }
 
  const theme = () => {
    setisDark(!isDark);
  };

  return (
    <>
      <section
        className={`h-[100vh]  w-full bg-[#1b1b1f] ${isDark ? "bg-[#1b1b1f]" : "bg-[#fff]"
          }`}
      >
        <div className="flex justify-between items-center pt-6 px-4">
          <div
            onClick={restart}
            className=" md:p-3 p-2 bg-[#3f3f46] rounded-full cursor-pointer text-white md:text-2xl text-lg"
          >
            <LuRefreshCw />
          </div>
          <div>
            <h1 className={`md:text-4xl md:px-0 px-6 text-3xl text-center font-bold ${isDark?"text-white":"text-[#3f3f46]"}`}>
              TicTacToe with Mr. Zain Ali
            </h1>
          </div>
          <div
            onClick={theme}
            className="md:p-3 p-2 bg-[#3f3f46] rounded-full cursor-pointer text-white md:text-2xl text-lg"
          >
            {isDark ? <MdDarkMode /> : <MdLightMode />}
          </div>
        </div>


        <Board  isDark={isDark} />
      </section>
    </>
  );
};

export default App;
