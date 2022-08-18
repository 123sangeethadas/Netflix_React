import React,{useEffect, useState} from 'react'
import axios from '../../axios'
import './Banner.css'
import {Api_key,imageUrl} from '../../constants/constants'



function Banner() {

  const [movie, setmovie] = useState([])

  useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${Api_key}`).then((response)=>{

        
          setmovie(response.data.results.sort((a,b)=>{return 0.5-Math.random()})[0])
         
          
            })
         
        }

        ,[])
     
       
  
  
  
  return (
   
         <div  style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})` }}className='banner'>
         <div className='content'>
             <h1 className='title'>{movie? movie.title:""}</h1>
             <div className='banner_buttons'>
                 <button className='button'>play</button>
                 <button className='button'>My list</button>
             </div>
             <h1 className='description'>{movie? movie.overview:""}</h1>
         </div>
         <div className="fade"></div> 
 
 
         
 
     </div>)
      
      
  
  
}

export default Banner