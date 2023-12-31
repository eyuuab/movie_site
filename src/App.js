import './App.css';
import Navbar from './components/Header/navbar';
import MovieCard from './components/MovieCard';
import MovieList from './components/MoiveList'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import MovieDetail from './components/Detail_page/MovieDetail';
function App() {
  return (
    <AppRoutes/>
  );
}

const AppRoutes = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>

      </Routes>
    </>
  );
};

export default App;
