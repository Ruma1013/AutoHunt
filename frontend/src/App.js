import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import unregistered_banner from './Components/Assets/Unregistered.svg';
import registered_banner from './Components/Assets/registered2.svg';
import Product from './Pages/product'; // Import the Product component
import Valuation from './Pages/valuation';

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
          <Route path="/login" element={<LoginSignup />} />
          <Route path='/valuation' element={<Valuation />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
