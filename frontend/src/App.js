import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Components/Signup/index';
import Login from './Components/Login/index';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import unregistered_banner from './Components/Assets/Unregistered.svg';
import registered_banner from './Components/Assets/registered2.svg';
import Product from './Pages/product'; // Import the Product component
import Valuation from './Pages/valuation';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Unregistered" element={<ShopCategory banner={unregistered_banner} category="Unregistered" />} />
          <Route path="/Used" element={<ShopCategory banner={registered_banner} category="registered" />} />
          {/* Corrected route setup for Product */}
          <Route path='/product/:productId' element={<Product />} />
          </Route path="/signup" element={<LoginSignup />} />
<<<<<<< HEAD
=======
          <Route path="/login" element={<Login />} />
>>>>>>> bb77926e68983b960fd9ff06b414fe0f9748e505
          <Route path='/valuation' element={<Valuation />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
