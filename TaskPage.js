// src/pages/TaskPage.js
import React from 'react';
import TaskForm from '../components/TaskForm';

const TaskPage = ({ tasks, setTasks }) => {
  return (
    <div>
      <h2>New Task</h2>
      <TaskForm tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskPage;
