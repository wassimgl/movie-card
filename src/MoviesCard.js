import React from 'react'
import { BsFillHeartFill,BsFillShareFill,BsFillChatLeftFill,BsFillCloudDownloadFill } from "react-icons/bs";

const MoviesCard = ({movie}) => {
  return (
    <div className='cards'>
    <h1 className='titre'>{movie.title}</h1>
    <img className='photo' src={movie.posterUrl}/>
    <h3 className='iden'>{movie.id}</h3>
    <p className='descr'>{movie.description}</p>
    <h2 className='rat'>{movie.rate}</h2>
    <div class="movie_social">
      <ul>
        <li><h4>  <BsFillHeartFill /> </h4></li>
        <li><h4> <BsFillShareFill/> </h4></li>
        <li><h4><BsFillChatLeftFill/> </h4> </li>
        <li><h4><BsFillCloudDownloadFill/> </h4> </li>
      </ul>
    </div>

    </div>
    
    
  )
}


export default MoviesCard