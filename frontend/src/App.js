
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import { Link } from 'react-router-dom';
import unregistered_banner from './Components/Assets/Unregistered.png';
import registered_banner from './Components/Assets/registered1.png';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Unregistered" element={<ShopCategory banner={unregistered_banner} category="Unregistered"/>}/>
        <Route path="/Used" element={<ShopCategory banner={registered_banner} category="Used"/>}/>
        <Route path='product' element={<product/>}>
          <Route  path =':productId' element={<product/>} />
        </Route>
        <Route path="/login" element={<LoginSignup/>}/>

      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
