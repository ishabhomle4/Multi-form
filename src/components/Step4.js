/*import React from 'react';
import '../components/Step4.css';

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
    <div className="step-container">
      <div className="form-container">
        <h2 className="title">Who can manage projects</h2>
        <p className="description">Don't panic - You can also customize this permissions in settings</p>

        <div className="options">
          <div className="option" onClick={() => handleChange('projectManager')('everyone')}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M22 12h-4l-3-3m0 6l3-3"></path></svg>
            </div>
            <div className="content">
              <h3>Everyone</h3>
              <p>All users can now to see it, but guests cannot access the projects.</p>
            </div>
          </div>

          <div className="option" onClick={() => handleChange('projectManager')('only_admins')}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <div className="content">
              <h3>Only Admin's</h3>
              <p>Only admins can manage everything.</p>
            </div>
          </div>

          <div className="option" onClick={() => handleChange('projectManager')('specific_people')}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><path d="M22 12h-4l-3-3m0 6l3-3"></path></svg>
            </div>
            <div className="content">
              <h3>Only to Specific people</h3>
              <p>Only some specific people can able to see it</p>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button onClick={goBack} className="back-button">Back</button>
          <button onClick={continueStep} className="next-button">Next</button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar"></div>
        <div className="progress-dots">
          <div className="dot active"></div>
          <div className="dot active"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Step4;*/
import React from 'react';
import '../components/Step4.css';

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
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M22 12h-4l-3-3m0 6l3-3"></path>
              </svg>
            </div>
            <div className="content">
              <h3>Everyone</h3>
              <p>All users can now see it, but guests cannot access the projects.</p>
            </div>
          </div>

          <div className={`option ${projectManager === 'only_admins' ? 'active' : ''}`} onClick={() => handleChange('projectManager')({ target: { value: 'only_admins' } })}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="content">
              <h3>Only Admins</h3>
              <p>Only admins can manage everything.</p>
            </div>
          </div>

          <div className={`option ${projectManager === 'specific_people' ? 'active' : ''}`} onClick={() => handleChange('projectManager')({ target: { value: 'specific_people' } })}>
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3f51b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-users">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M22 12h-4l-3-3m0 6l3-3"></path>
              </svg>
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

