import React, { useState } from 'react';

const Step6 = ({ prevStep, handleChange, formData }) => {
  const [member, setMember] = useState('');
  const { teamMembers } = formData;

  const addMember = () => {
    if (member) {
      handleChange('teamMembers')({ target: { value: [...teamMembers, member] } });
      setMember('');
    }
  };

  const removeMember = (index) => {
    const newMembers = teamMembers.filter((_, i) => i !== index);
    handleChange('teamMembers')({ target: { value: newMembers } });
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <form className="form-container">
      <h2>Add project team members</h2>

      <label>Team Member</label>
      <input
        type="text"
        value={member}
        onChange={(e) => setMember(e.target.value)}
      />
      <button type="button" onClick={addMember}>Add Member</button>

      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            {member} <button type="button" onClick={() => removeMember(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={goBack}>Back</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Step6;
