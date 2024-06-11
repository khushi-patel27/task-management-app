// src/pages/HomePage.js
import React from 'react';
import TaskList from '../components/TaskList';

const HomePage = ({ tasks, onDelete }) => {
  return (
    <div>
      <h2>Task List</h2>
      <TaskList tasks={tasks} onDelete={onDelete} />
    </div>
  );
};

export default HomePage;
