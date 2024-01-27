import React, { useState,useEffect } from 'react'
import axios from 'axios';
const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const useGif = (inputValue) => {
    const[gif,setGif] = useState("")
    const[loading,setLoading] =useState(false)
    async function fetchData(){
        setLoading(true)
            try {
              const {data} = await axios.get(inputValue ? (`${url}&tag=${inputValue}`) :(url));
              const imageSource = data.data.images.downsized_large.url;
              setGif(imageSource);
              setLoading(false)
            } catch (error) {
              console.error('Error fetching GIF:', error);
          }             
    }
    useEffect(()=>{
        fetchData()
    },[]) 
    return {gif,loading,fetchData}
  
}

export default useGif