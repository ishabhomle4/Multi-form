import React, { useState } from 'react';

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
    <form className="form-container">
      <h2>Add project tasks</h2>

      <label>Task</label>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button type="button" onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <button onClick={goBack}>Back</button>
      <button onClick={continueStep}>Next</button>
    </form>
  );
};

export default Step5;
