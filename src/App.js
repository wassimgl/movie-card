
import './App.css';
import React,{useState} from 'react';
import MoviesList from './MoviesList';
import Searche from './Searche';
import Adds from './Adds';
import Description from './pages/Description';
import {Routes,Route} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ReactPlayer from 'react-player';
function App() {
  const [rate, setRate] = useState(0);
  const [movies, setMovies] = useState([
    {
      id:uuidv4(),
          title:"Rush",
          posterUrl:"https://m.media-amazon.com/images/M/MV5BOWEwODJmZDItYTNmZC00OGM4LThlNDktOTQzZjIzMGQxODA4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          ide:"2013, Ron Howard, 123min",
          description:"2013’s Rush is a tremendously underrated film, but if you're a fan of racing dramas or true stories about perseverance, it hits the spot.  Chris Hemsworth plays Formula One driver James Hunt, and the story follows Hunt’s rivalry in the 1970s with Austrian driver Nikki Lauda.",
          rate:  5,
          trailerLink:<ReactPlayer url='https://www.youtube.com/watch?v=4XA73ni9eVs'/>
        },
        {
          id:uuidv4(),
              title:"Bad Trip",
              posterUrl:"https://m.media-amazon.com/images/M/MV5BNDgzMTgxOTktNmM2Ny00Nzk5LTgxNjAtNzJlNjBjNjMyOWZkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
              ide:"2021, Kitao Sakurai, 85min",
              description:"If you just want to watch something that's going to make you laugh really, really hard, check out Bad Trip. The film is a riff on the Jackass formula as it tells the story of two friends who take a road trip cross country, but their encounters are almost all pranks that are caught on hidden cameras.",
              rate: 7,
              trailerLink:<ReactPlayer url='https://www.youtube.com/watch?v=OsXyNcckpwM'/>
            },
            {
              id:uuidv4(),
              title:"21 Jump Street ",
              posterUrl:"https://fr.web.img2.acsta.net/medias/nmedia/18/73/46/24/20086654.jpg",
              ide:"2012, Michael Bacall, 109min",
              description:"Nobody takes a terrible on paper idea and turns it into a winning movie quite like Phil Lord and Christopher Miller. The duo behind Cloudy with a Chance of Meatballs and The LEGO Movie reinvented the 80s crime comedy 21 Jump Street into one of the funniest new comedies of the 21st Century.",
              rate: 4, 
              trailerLink:<ReactPlayer url='https://www.youtube.com/watch?v=RLoKtb4c4W0'/>
            },
            
  ])
  
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
    
  }
  
  const ratingChanged = (newRating) => {
    setRate(newRating);
    
  }
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  }
  return (
   <div className='movie-container'>
  
     <div className='main'>
    <Routes>
      <Route path='/' element={<MoviesList movies={movies.filter(mv=>mv.title.toLowerCase().includes(title.toLowerCase()) && mv.rate >= rate)} />} />
      <Route path='/:userId' element={<Description movies={movies} />}/>
      </Routes>
        </div>
  
     <Searche   handleChange={handleChange} ratingChanged={ratingChanged} rate={rate}/>
     <Adds  handleAdd={handleAdd}/>
     
     {/* <MoviesList movies={movies.filter(mv=>mv.title.toLowerCase().includes(title.toLowerCase()) && mv.rate >= rate)}/> */}

     
</div>

  );
  
}


export default App;
