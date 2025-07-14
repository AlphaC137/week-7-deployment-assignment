
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskManager from './pages/TaskManager';
import logo from './logo.svg';
import './App.css';


function App() {
  const navTabs = [
    { name: 'Home', path: '/' },
    { name: 'Login', path: '/login' },
    { name: 'Register', path: '/register' },
    { name: 'Task Manager', path: '/tasks' }
  ];
  const currentPath = window.location.pathname;
  return (
    <Router>
      <header className="lux-navbar">
        <div className="lux-navbar-logo">TaskList Luxe Edition</div>
        <nav className="lux-navbar-tabs">
          {navTabs.map(tab => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`lux-navbar-tab${currentPath === tab.path ? ' active' : ''}`}
            >
              {tab.name}
            </Link>
          ))}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tasks" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;
