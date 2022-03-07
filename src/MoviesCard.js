import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


const MoviesCard = ({movie}) => {
  
  return (
    <div className='cards'>
    <h1 className='titre'>{movie.title}</h1>
 
    <Link to={`${movie.id}`}><div><img className='photo'  src={movie.posterUrl} alt=''/></div></Link>
    <h3 className='iden'>{movie.ide}</h3>
    <p className='descr'>{movie.description}</p>
    <h2 className='rat'>
    <StarRatingComponent 
          name="rate1" 
          starCount={8}
          
        value={movie.rate}/>
    </h2>
    

    </div>
    
    
  )
}


export default MoviesCard