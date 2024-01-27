import React, {  useState } from 'react'
import Spinner from './spinner';
import useGif from '../hooks/useGif';
import Confetti from 'react-confetti';
const InputGif = () => {
    const [inputValue,setInputValue] = useState("money heist")
    const {gif,loading,fetchData} = useGif(inputValue)

    const clickHandler = ()=>{
       fetchData()
    }
    function changeHandler(e){
      setInputValue(e.target.value)
    }
  return (
    <div className='w-1/2  rounded-md border-2 flex flex-col items-center gap-y-5 mt-4 border-yellow-500 bg-gradient-to-tr from-purple-400 via-blue-300 to-green-300'>
        <h1 className='text-center text-2xl uppercase underline font-semibold mt-2'> A Random <span className=' text-orange-500 underline select-none' >{inputValue} </span>Gif</h1>
         {
          loading ? (<Spinner/>) : ( <img className='rounded-lg hoverImg' src={gif} alt="" width={"450"} />)
         }
        <input 
        className='w-10/12 text-lg py-2 text-center rounded-lg mb-[4px]'
        type="text"
        onChange={changeHandler}
        value={inputValue}
        
        />
  
        <button onClick={clickHandler}
        className='w-5/12 mt-2 mb-4 bg-slate-200/80 font-semibold hover:bg-white/85 transition-all duration-200  text-black/70  text-lg py-2 rounded-lg'>GENERATE</button>
    </div>
  )
}

export default InputGif