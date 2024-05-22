import React, { useState } from 'react';
import './carform.css';
import axios from 'axios';

const CarForm = ({ setValuation }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    setModel('');
    setYear('');
    setBodyType('');
    setTransmission('');
    setFuel('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/carValuationRoutes/car-valuation', {
        brand,
        model,
        year,
        bodyType,
        transmission,
        fuel,
      });
      setValuation(response.data.valuation);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  return (
    <div className="left">
      <form className="form_container" onSubmit={handleSubmit}>
        <h1>Tell Us About Your Car</h1>
        <div className="car-form-fields">
          <label className="car-form-label">
            Brand:
            </label>

            
          <label className="car-form-label">
          <select className="car_form_input" value={brand} onChange={handleBrandChange}>
              <option value="">Select</option>
              <option value="Toyota">Toyota</option>
              <option value="Nissan">Nissan</option>
              <option value="Mazda">Mazda</option>
              <option value="Suzuki">Suzuki</option>
            </select>
          </label>

          
          {brand && (
            <>
              <label className="car-form-label">
                Model:
                </label>
                <label className="car-form-label">
                <select className="car_form_input" value={model} onChange={(e) => setModel(e.target.value)}>
                  <option value="">Select</option>
                  {brand === 'Toyota' && <option value="Corolla">Corolla</option>}
                  {brand === 'Nissan' && <option value="Sunny">Sunny</option>}
                  {brand === 'Mazda' && <option value="Axela">Axela</option>}
                  {brand === 'Suzuki' && (
                    <>
                      <option value="Alto">Alto</option>
                      <option value="WagonR">WagonR</option>
                    </>
                  )}
                </select>
                </label>
              <label className="car-form-label">
                Year:
                </label>
                <label className="car-form-label">
                <select className="car_form_input" value={year} onChange={(e) => setYear(e.target.value)}>
                  <option value="">Select</option>
                  {[...Array(5)].map((_, i) => (
                    <option key={i} value={2005 - i}>{2005 - i}</option>
                  ))}
                </select>
                </label>

              
              <label className="car-form-label">
                Body Type:
                </label>

                <label className="car-form-label">
                <select className="car_form_input" value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Wagon">Wagon</option>
                  <option value="MPV">MPV</option>
                  <option value="SUV">SUV</option>
                </select>
                </label>
              
              <label className="car-form-label">
                Transmission:
                </label>
                <label className="car-form-label">
                <select className="car_form_input" value={transmission} onChange={(e) => setTransmission(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                </select>
                  </label>

              
              <label className="car-form-label">
                Fuel:
                </label>
                <label className="car-form-label">
                <select className="car_form_input" value={fuel} onChange={(e) => setFuel(e.target.value)}>
                  <option value="">Select</option>
                  <option value="Petrol">Petrol</option>
                </select>
                </label>

              
            </>
          )}
          <button className="car_form_submit_button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
