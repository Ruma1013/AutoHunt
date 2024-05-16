import React, { useState } from 'react';
import './carform.css'; // Import your CSS file

const CarForm = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [Transmission, setTransmission] = useState('');
  const [fuel, setFuel] = useState('');

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrand(selectedBrand);
    // Reset other fields when brand changes
    setModel('');
    setYear('');
    setBodyType('');
    setTransmission('');
    setFuel('');
  };

  const handleModelChange = (e) => {
    const selectedModel = e.target.value;
    setModel(selectedModel);
  };

  const handleYearChange = (e) => {
    const selectedYear = e.target.value;
    setYear(selectedYear);
  };

  const handleBodyTypeChange = (e) => {
    const selectedBodyType = e.target.value;
    setBodyType(selectedBodyType);
  };

  const handleTransmissionChange = (e) => {
    const selectedTransmission = e.target.value;
    setTransmission(selectedTransmission);
  };

  const handleFuelChange = (e) => {
    const selectedFuel = e.target.value;
    setFuel(selectedFuel);
  };

  return (
    <form className="car-form-container">
      <h1>Tell us about your car</h1>
      <div className="car-form-fields">
        <label className="car-form-label">
          Brand:
          <select className="car-form-input" value={brand} onChange={handleBrandChange}>
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
              <select className="car-form-input" value={model} onChange={handleModelChange}>
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
              <select className="car-form-input" value={year} onChange={handleYearChange}>
                <option value="">Select</option>
                {[...Array(5)].map((_, i) => (
                  <option key={i} value={2005 - i}>{2005 - i}</option>
                ))}
              </select>
            </label>
            <label className="car-form-label">
              Body Type:
              <select className="car-form-input" value={bodyType} onChange={handleBodyTypeChange}>
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
              <select className="car-form-input" value={Transmission} onChange={handleTransmissionChange}>
                <option value="">Select</option>
                <option value="Auto">Auto</option>
                <option value="Manual">Manual</option>
              </select>
            </label>
            <label className="car-form-label">
              Fuel:
              <select className="car-form-input" value={fuel} onChange={handleFuelChange}>
                <option value="">Select</option>
                <option value="Petrol">Petrol</option>
              </select>
            </label>
          </>
        )}
        <button className="car-form-submit-button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CarForm;
