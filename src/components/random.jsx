import Spinner from './spinner';
import useGif from '../hooks/useGif';
const Random = () => {
    const {gif,loading,fetchData} = useGif() 
   
    const clickHandler = ()=>{
       fetchData()
    }
  return (
    <div className='w-1/2  rounded-md border-2 flex flex-col items-center gap-y-5 mt-4 border-slate-500  bg-gradient-to-r from-green-300 via-blue-200 to-purple-400'>
        <h1 className='text-center text-2xl uppercase underline font-semibold mt-2'> Random Gif</h1> 
         {
          loading ? (<Spinner/>) : ( <img className='rounded-lg hoverImg' src={gif} alt="" width={"450"} />)
         }
        <button onClick={clickHandler}
        className='w-5/12 mt-2 mb-4 bg-slate-200/80 font-semibold hover:bg-white/85 transition-all duration-200 text-black/70  text-lg py-2 rounded-lg'>GENERATE</button>
    </div>
  )
}

export default Random