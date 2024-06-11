// src/components/Task.js
import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>
      <Link to={`/edit/${task.id}`}>Edit</Link>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
