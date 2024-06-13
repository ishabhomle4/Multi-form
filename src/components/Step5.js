import React, { useState } from 'react';
import './Step5.css'; 

const Step5 = ({ nextStep, prevStep, handleChange, formData }) => {
  const [task, setTask] = useState('');
  const { tasks } = formData;

  const addTask = () => {
    if (task) {
      handleChange('tasks')({ target: { value: [...tasks, task] } });
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    handleChange('tasks')({ target: { value: newTasks } });
  };

  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const goBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="task-container">
      <h2 className="task-title">Add project tasks</h2>

      <div className="task-input-group">
        <input
          type="text"
          className="task-input"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="button" className="task-add-button" onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <input type="checkbox" className="task-checkbox" />
            {task} 
            <button type="button" className="task-remove-button" onClick={() => removeTask(index)}>×</button>
          </li>
        ))}
      </ul>

      <div className="task-navigation">
        <button className="nav-button" onClick={goBack}>Back</button>
        <button className="nav-button next-button" onClick={continueStep}>Next</button>
      </div>
    </div>
  );
};

export default Step5;

