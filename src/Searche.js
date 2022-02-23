import React,{useState} from 'react'
 import StarRatingComponent from 'react-star-rating-component';
const Searche = () => {
        const[rate,setRate]= useState(1)
    const onStarClick=(nextValue, prevValue, name) =>{
        setRate(nextValue);
    }
   
  return (
    <div className='sear'>
      <input type="text" placeholder="search"/>
      <input  type="submit" value="SEARCH" />
 <StarRatingComponent 
          name="rate1" 
          starCount={8}
          value={rate}
          onStarClick={onStarClick}
        />
    </div>
  )
}

export default Searche