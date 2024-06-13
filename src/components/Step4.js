
import React from 'react';
import '../components/Step4.css';
import { VscAccount } from "react-icons/vsc";
import { BsPeople } from "react-icons/bs";
import { FaPeopleRoof } from "react-icons/fa6";

const Step4 = ({ nextStep, prevStep, handleChange, formData }) => {
  const { projectManager } = formData;

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="step4-container">
      <div className="form-tile">
        <h2 className="form-title">Who can manage projects</h2>
        <p className="form-subtitle">Don't panic - You can also customize these permissions in settings</p>

        <div className="options">
          <div className={`option ${projectManager === 'everyone' ? 'active' : ''}`} onClick={() => handleChange('projectManager')({ target: { value: 'everyone' } })}>
            <div className="icon1">
            <FaPeopleRoof />
            </div>
            <div className="content">
              <h3>Everyone</h3>
              <p>All users can now see it, but guests cannot access the projects.</p>
            </div>
          </div>

          <div className={`option ${projectManager === 'only_admins' ? 'active' : ''}`} onClick={() => handleChange('projectManager')({ target: { value: 'only_admins' } })}>
            <div className="icon">
            <VscAccount />
            </div>
            <div className="content">
              <h3>Only Admins</h3>
              <p>Only admins can manage everything.</p>
            </div>
          </div>

          <div className={`option ${projectManager === 'specific_people' ? 'active' : ''}`} onClick={() => handleChange('projectManager')({ target: { value: 'specific_people' } })}>
            <div className="icon">
            <BsPeople />
            </div>
            <div className="content">
              <h3>Only to Specific people</h3>
              <p>Only some specific people can see it.</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button onClick={goBack} className="nav-button">Back</button>
          <button onClick={continueStep} className="nav-button">Next</button>
        </div>
      </div>

      <div className="progress">
        <div className="progress-bar"></div>
        <div className="progress-dots">
          <div className="dot active"></div>
          <div className="dot active"></div>
          <div className="dot active"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Step4;

