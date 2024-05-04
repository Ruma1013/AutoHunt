import React, { useState } from 'react';
import CarForm from '../Components/CarForm/carform'; // Assuming you have created CarForm component
import './CSS/valuation.css';

const Valuation = () => {
  // State for storing form data
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    bodyType: '',
    Transmission: '',
    fuel: ''
  });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="valuation-container">
      
      <form onSubmit={handleSubmit}>
        <CarForm formData={formData} setFormData={setFormData} />
        {/* Optionally, add a submit button */}
        
      </form>
    </div>
  );
};

export default Valuation;
