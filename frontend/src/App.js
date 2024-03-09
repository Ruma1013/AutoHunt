
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Unregistered" element={<ShopCategory category="Unregistered"/>}/>
        <Route path="/Used" element={<ShopCategory category="Used"/>}/>
        <Route path="/Valuation" element={<ShopCategory category= "Valuation"/>}/ >
        <Route path='product' element={<product/>}>
          <Route  path =':productId' element={<product/>} />
        </Route>
        <Route path="/login" element={<LoginSignup/>}/>

      </Routes>
      

      </BrowserRouter>
    </div>
  );
}

export default App;
