import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState([]);

  const handleClick = (event) => {
    const buttonValue = event.currentTarget.value;
    setValue((prevValue) => [...prevValue, buttonValue]);
  };

  const cut = (cut) => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  const clear = () => {
    setValue("");
  };

  const getElements =()=>{
   let  get=value.join('')
    console.log(get)

    return value
  }


  return (
    <>
      <div className="bg-slate-950 h-[100vh]">
        <h1>Calculator</h1>
        <div className="w-[356px] mx-auto flex border-2 border-gray-500">
          <p className="text-right text-yellow-700 text-3xl w-[280px] ">
            {value}
          </p>
          <button
            className="h-10 ml-3 px-3 align-middle text-2xl bg-yellow-700"
            onClick={clear}
          >
            clear
          </button>
        </div>
        <div className=" flex flex-wrap w-96 h-[400px] gap-3 py-1 justify-center mx-auto mb-10 ">
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="x"
            onClick={handleClick}
          >
            x
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="c"
            onClick={cut}
          >
            C
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-green-700"
            value="="
            onClick={getElements}
          >
            =
          </button>
          <button
            className="w-20 h-20 text-center content-center text-2xl bg-slate-500 active:bg-yellow-700"
            value="/"
            onClick={handleClick}
          >
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
