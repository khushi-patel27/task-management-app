// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ tasks, setTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Low');
  const navigate = useNavigate();  // Correct usage of useNavigate
  const { id } = useParams();
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      const task = tasks.find(task => task.id === id);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setDueDate(task.dueDate);
        setPriority(task.priority);
      }
    }
  }, [id, tasks, isEditing]);

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      const updatedTasks = tasks.map(task => 
        task.id === id ? { ...task, title, description, dueDate, priority } : task
      );
      setTasks(updatedTasks);
    } else {
      const newTask = { id: uuidv4(), title, description, dueDate, priority };
      setTasks([...tasks, newTask]);
    }
    navigate('/');  // Correct usage of navigate instead of history.push
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
      </div>
      <div>
        <label>Priority</label>
        <select value={priority} onChange={e => setPriority(e.target.value)} required>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
