import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movieslist from './components/Movieslist';
import Addmovie from './components/Addmovie';
import Searchpage from './components/Searchpage';
import Notfound from './components/Notfound';
import Wishlist from './components/Wishlist';
import Update from './components/Update';
import Moviedetails from './components/Moviedetails';


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/moviedetails:id' element={<Moviedetails/>}/>
          <Route path='/create' element={<Addmovie/>}/>
          <Route path='/search:searchVal' element={<Searchpage/>}/>
          <Route path='/wish' element={<Wishlist/>}/>
          <Route path='/update:id' element={<Update/>}/>
          <Route path='*' element={<Notfound/>}/>
         
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
