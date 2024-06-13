
import React from 'react';
import './Step2.css';

const Step2 = ({ nextStep, prevStep, handleChange, formData }) => {
  const { projectType, hourlyRate, budgetHours, sendEmail, budgetAlert } = formData;

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
        <h2 className="form-title">Project type</h2>
        <p className="form-subtitle">Don't panic — You can also customize this type in settings</p>

        <div className="project-type-buttons">
          <button
            type="button"
            className={`project-type-button ${projectType === 'time_materials' ? 'active' : ''}`}
            onClick={() => handleChange('projectType')({ target: { value: 'time_materials' } })}
          >
            Time & Materials
          </button>
          <button
            type="button"
            className={`project-type-button ${projectType === 'fixed_fee' ? 'active' : ''}`}
            onClick={() => handleChange('projectType')({ target: { value: 'fixed_fee' } })}
          >
            Fixed Fee
          </button>
          <button
            type="button"
            className={`project-type-button ${projectType === 'non_billable' ? 'active' : ''}`}
            onClick={() => handleChange('projectType')({ target: { value: 'non_billable' } })}
          >
            Non-Billable
          </button>
        </div>

        <div className="form-group">
          <label>Hourly</label>
          <div className="hourly-section">
            <select onChange={handleChange('hourlyRate')} className="hourly-dropdown">
              <option value="project_hourly_rate">Project Hourly Rate</option>
            </select>
            <input
              type="number"
              onChange={handleChange('hourlyRate')}
              value={hourlyRate}
              className="input-field"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Budget</label>
          <div className="budget-section">
            <select onChange={handleChange('budgetHours')} className="budget-dropdown">
              <option value="hours_per_person">Hours per Person</option>
            </select>
            <input
              type="number"
              onChange={handleChange('budgetHours')}
              value={budgetHours}
              className="input-field"
            />
          </div>
          <label className="budget-reset">
            <input
              type="checkbox"
              onChange={handleChange('sendEmail')}
              checked={sendEmail}
            />
            Budget resets every month
          </label>
        </div>

        <div className="email-alert">
          
            <input
              type="checkbox"
              onChange={handleChange('sendEmail')}
              checked={sendEmail}
              className="checkbox"
            />
            <span>Send email alerts if project exceeds</span>
            <input
              type="number"
              onChange={handleChange('budgetAlert')}
              value={budgetAlert}
              className="input-field alert-input"
            />
            % of budget
          
        </div>

        <div className="form-navigation">
          <button onClick={goBack} className="nav-button">Back</button>
          <button onClick={continueStep} className="nav-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Step2;


