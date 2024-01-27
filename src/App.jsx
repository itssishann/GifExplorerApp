import { useState } from 'react'
import './App.css'
import ConfettiButton from './components/ConfettiButton'
import Random from './components/random'
import InputGif from './components/inputgif'
function App() {
  return (
    <div className='w-full h-screen flex flex-col relative overflow-x-hidden items-center background'>
      <h1 className='uppercase  rounded-lg bg-white w-11/12  text-center mt-10  px-10 py-2 text-3xl font-bold select-none  ' >Random Gifs</h1>
      <div className='flex flex-col w-full items-center gap-y-8 mt-8'>
        <Random />
        <InputGif />
      </div>
        <ConfettiButton />
    </div>
  )
}

export default App
