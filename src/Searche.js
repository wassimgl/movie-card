import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';


const Searche = ({handleChange,ratingChanged,rate}) => {
     const [title, setTitle] = useState("");   
    // const[rate,setRate]= useState(0)
    const onStarClick=(nextValue, prevValue, name) =>{
      ratingChanged(nextValue);   
    }
   
   
return (
    <div className='sear'>
      <input type="text" placeholder="search" onChange={handleChange} />
      <input  type="submit" value="SEARCH" />
      <StarRatingComponent 
          name="rate1" 
          starCount={8}
          onStarClick={onStarClick}
        value={rate}
        
        />
    </div>
  )
}

export default Searche