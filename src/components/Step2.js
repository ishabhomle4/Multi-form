import React, { useState } from 'react';
import './Step2.css';

const Step2 = ({ prevStep, nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.brandName) tempErrors.brandName = "Brand Name is required.";
    if (!values.streetAddress) tempErrors.streetAddress = "Street Address is required.";
    if (!values.zipCode) tempErrors.zipCode = "Zip Code is required.";
    if (!values.city) tempErrors.city = "City is required.";
    if (!values.taxIDNumber) tempErrors.taxIDNumber = "Tax ID Number is required.";
    if (!values.brandType) tempErrors.brandType = "Brand Type is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) nextStep();
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <div className="step-indicator">
            <span className="completed">1. Your Profile</span>
            <span className="active">2. Business Information</span>
            <span>3. Additional Users</span>
          </div>
        </div>
        <div className="form-body">
          <h3>Step 2: Business Information</h3>
          <h4 className="section-heading">General Information</h4>
          <form>
            <div className="form-row">
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                value={values.brandName}
                onChange={handleChange}
              />
              {errors.brandName && <p className="error">{errors.brandName}</p>}

              <select
                name="brandType"
                value={values.brandType}
                onChange={handleChange}
              >
                <option value="">Select Type of Your Brand</option>
                <option value="local">Local</option>
                <option value="national">National</option>
              </select>
              {errors.brandType && <p className="error">{errors.brandType}</p>}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="streetAddress"
                placeholder="Street Address"
                value={values.streetAddress}
                onChange={handleChange}
              />
              {errors.streetAddress && <p className="error">{errors.streetAddress}</p>}

              <input
                type="text"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div className="form-row">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={values.zipCode}
                onChange={handleChange}
              />
              {errors.zipCode && <p className="error">{errors.zipCode}</p>}

              <input
                type="text"
                name="taxIDNumber"
                placeholder="Tax ID Number"
                value={values.taxIDNumber}
                onChange={handleChange}
              />
              {errors.taxIDNumber && <p className="error">{errors.taxIDNumber}</p>}
            </div>

            <h4 className="section-heading">Documents</h4>
            <p>Once the following documents are signed, you'll be ready to get started</p>
            <div className="documents-section">
              <div className="document-item">
                <span>Electronically sign the agreement(s)</span>
                <button type="button"></button>
              </div>
              <div className="document-item">
                <span>Non adult beverage Kroger market supplier waiver and release</span>
                <button type="button"></button>
              </div>
            </div>

            <h4 className="section-heading">COI PDF Upload</h4>
            <p>Once the following documents are signed, you'll be ready to get started</p>
            <div className="upload-section">
              <div className="upload-item">
                <span>Electronically sign the agreement(s)</span>
                <button type="button"></button>
              </div>
            </div>
          </form>
        </div>
        <div className="form-footer">
          <button type="button" className="back-button" onClick={prevStep}>
            Previous Step
          </button>
          <button type="button" className="next-button" onClick={handleNext}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;
