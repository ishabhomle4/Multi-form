import React, { Component } from 'react';


const Step1 = ({ nextStep, handleChange, formData }) => {
  const { projectName, client, startDate, endDate, notes } = formData;

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="tile-container">
      <form className="form-tile" onSubmit={continueStep}>
        <h2 className="tile-title">Create a project</h2>
        
        <label>Project name</label>
        <input
          type="text"
          placeholder="Enter project name here"
          onChange={handleChange('projectName')}
          value={projectName}
        />
        
        <label>Client</label>
        <div className="client-selection">
          <select onChange={handleChange('client')} value={client}>
            <option value="" disabled>Select a client</option>
            <option value="client1">Client 1</option>
            <option value="client2">Client 2</option>
            {/* Add more options as needed */}
          </select>
          <button type="button">+ New Client</button>
        </div>

        <label>Dates</label>
        <div className="date-selection">
          <input
            type="date"
            onChange={handleChange('startDate')}
            value={startDate}
          />
          <span> - </span>
          <input
            type="date"
            onChange={handleChange('endDate')}
            value={endDate}
          />
        </div>
        
        <label>Notes</label>
        <textarea
          placeholder="Optional"
          onChange={handleChange('notes')}
          value={notes}
        />

        <div className="form-navigation">
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Step1;
