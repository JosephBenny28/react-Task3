import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import ListPlaces from './Components/ListPlaces';
import Places from './Components/Places';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Home />
      <ListPlaces/>
      <Places/>
      </BrowserRouter>
    </div>
  );
}

export default App;
