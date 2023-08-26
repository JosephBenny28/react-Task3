import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import ListPlaces from './Components/ListPlaces';
import Places from './Components/Places';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlaceToVisit from './Components/PlaceToVisit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
    
        <Route path="/" element={<Home/>} />
        <Route path="//Places" element={<PlaceToVisit/>} />
        <Route  element ={<ListPlaces/>} />
        <Route element={<Places/>} />
      
     
      
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
