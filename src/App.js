import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Contact from "./pages/Contact/Contact"
import Gallery from "./pages/Gallery/Gallery"
import Home from "./pages/Home/Home"
import NotFound from "./pages/NotFound/NotFound"
import Plans from "./pages/Plans/Plans"
import Trainers from "./pages/Trainers/Trainers"
import Footer from './pages/Home/HomeComponents/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        App
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/about' exact element={<About></About>}></Route>
          <Route path='/contact' exact element={<Contact></Contact>}></Route>
          <Route path='/gallery' exact element={<Gallery></Gallery>}></Route>
          <Route path='/plans' exact element={<Plans></Plans>}></Route>
          <Route path='/trainers' exact element={<Trainers></Trainers>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
