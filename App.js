import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import './Style.css'; // Import CSS file without naming conflict

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleDelete = id => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage tasks={tasks} onDelete={handleDelete} />} />
        <Route path="/new" element={<TaskPage tasks={tasks} setTasks={setTasks} />} />
        <Route path="/edit/:id" element={<TaskPage tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </Router>
  );
};

export default App;
