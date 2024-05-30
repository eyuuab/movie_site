import './App.css';
import Navbar from './components/Header/navbar';
import MovieList from './components/movies/MoiveList'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './pages/Detail_page/MovieDetail';
function App() {
  return (
    <AppRoutes/>
  );
}

const AppRoutes = () => {

  return (
    <>
      <Routes>
        {/* assign a path and the page to be displated when the user routes to that path */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>
        {/* more routes can be written here (for new,cartoon and other links on the navbar) */}

      </Routes>
    </>
  );
};

export default App;
