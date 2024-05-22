import React, { useState } from 'react';
import CarForm from '../Components/CarForm/carform'; // Ensure the correct path to CarForm
import './CSS/valuation.css';

const Valuation = () => {
  const [valuation, setValuation] = useState(null);

  const handleValuationChange = (newValuation) => {
    setValuation(newValuation);
  };

  return (
    <div className="car_form_container">
      <div className="car_form_form_container">
        <div className="left">
          <CarForm setValuation={handleValuationChange} />
        </div>
        <div className="right">
          <h1>Car <br/> Valuation</h1> 
          {valuation && <div className="car-form-valuation">Estimated Valuation: <br/>
          Rs {valuation}</div>}
        </div>
      </div>
    </div>
  );
};

export default Valuation;
