import React from 'react'
import {Link, useParams} from 'react-router-dom'

const Description = ({movies}) => {
    
    const {userId} = useParams()
    const user = movies.find((el)=>el.id === userId);
    
  return( 
  
    <div className='des'>
    <Link to='/'><button className='btn-return-movie-list'><h1>Return To Movies List</h1></button></Link> 
    <h2>{user.trailerLink}</h2> 
   
    
    <div className='movie-details'>
  <h3><h2><em>movie description :</em></h2>{user.description}</h3>
  </div>
  </div>
 
  )
};  

export default Description