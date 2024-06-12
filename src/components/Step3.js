import React from 'react';
import { CiViewList } from "react-icons/ci";
import { HiViewBoards } from "react-icons/hi";
import '../components/Step3.css';

const Step3 = ({ nextStep, prevStep, handleChange, formData }) => {
  const { viewType } = formData;

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="tile-container">
      <div className="form-tile">
        <h2 className="form-title">Select a view</h2>
        <p className="form-subtitle">You can also customize this view in settings</p>

        <div className="view-type-buttons">
          <div
            className={`view-type-button ${viewType === 'list' ? 'active' : ''}`}
            onClick={() => handleChange('viewType')({ target: { value: 'list' } })}
          >
            <CiViewList  className="view-icon" />
            
            <p>List</p>
          </div>
          <div
            className={`view-type-button ${viewType === 'board' ? 'active' : ''}`}
            onClick={() => handleChange('viewType')({ target: { value: 'board' } })}
          >
            <HiViewBoards  className="view-icon" />
            <p>Board</p>
          </div>
        </div>

        <div className="form-navigation">
          <button onClick={goBack} className="nav-button">Back</button>
          <button onClick={continueStep} className="nav-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
