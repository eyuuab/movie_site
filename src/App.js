import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MovieCard from './components/movieCard';
import Movie from './components/movies/Movie'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <div className='moviecardContainer' >
        <MovieCard rating={7.5} year="2023" movieTitle='uncharted' cardImage="https://cdn.dribbble.com/users/1910217/screenshots/4148858/media/998c2bd5b012e0bc2cacb951523b655f.png"/>
        <MovieCard rating={7.5} year="2023" movieTitle='uncharted' cardImage="https://cdn.dribbble.com/users/1910217/screenshots/4148858/media/998c2bd5b012e0bc2cacb951523b655f.png"/>
        <MovieCard rating={7.5} year="2023" movieTitle='uncharted' cardImage="https://cdn.dribbble.com/users/1910217/screenshots/4148858/media/998c2bd5b012e0bc2cacb951523b655f.png"/>
        <MovieCard rating={7.5} year="2023" movieTitle='uncharted' cardImage="https://cdn.dribbble.com/users/1910217/screenshots/4148858/media/998c2bd5b012e0bc2cacb951523b655f.png"/>
        <MovieCard rating={7.5} year="2023" movieTitle='uncharted' cardImage="https://cdn.dribbble.com/users/1910217/screenshots/4148858/media/998c2bd5b012e0bc2cacb951523b655f.png"/>
        <MovieCard rating={7.5} year="2023" movieTitle='uncharted' cardImage="https://cdn.dribbble.com/users/1910217/screenshots/4148858/media/998c2bd5b012e0bc2cacb951523b655f.png"/>
      </div>
      <Movie/>

    </div>
  );
}

export default App;
