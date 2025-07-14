import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        if (res.ok) setTasks(data);
        else setError(data.error || 'Failed to fetch tasks');
      } catch {
        setError('Network error');
      }
    };
    if (token) fetchTasks();
  }, [token]);

  // Create task
  const handleCreate = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, status })
      });
      const data = await res.json();
      if (res.ok) setTasks([...tasks, data]);
      else setError(data.error || 'Failed to create task');
    } catch {
      setError('Network error');
    }
  };

  // Update task
  const handleUpdate = async (id, newStatus) => {
    setError('');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await res.json();
      if (res.ok) setTasks(tasks.map(t => t._id === id ? data : t));
      else setError(data.error || 'Failed to update task');
    } catch {
      setError('Network error');
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    setError('');
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/tasks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) setTasks(tasks.filter(t => t._id !== id));
      else {
        const data = await res.json();
        setError(data.error || 'Failed to delete task');
      }
    } catch {
      setError('Network error');
    }
  };

  if (!token) return <p style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif', textAlign: 'center', marginTop: '4rem' }}>Please log in to manage tasks.</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', alignItems: 'flex-start', minHeight: '70vh' }}>
      {/* Left: Task Form */}
      <div className="lux-card" style={{ flex: '1 1 320px', maxWidth: 400 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37', marginBottom: '1.5rem', textAlign: 'center' }}>Add a Task</h2>
        <form onSubmit={handleCreate}>
          <input
            className="lux-input"
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            className="lux-input"
            type="text"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <select className="lux-input" style={{ marginBottom: '1.5rem' }} value={status} onChange={e => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <button className="lux-btn" type="submit">Add Task</button>
        </form>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </div>

      {/* Right: Task List */}
      <div className="lux-card" style={{ flex: '2 1 400px', maxWidth: 600, minHeight: 320, overflowY: 'auto' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', color: '#D4AF37', marginBottom: '1.5rem', textAlign: 'center' }}>Your Tasks</h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
          {/* Filter Tabs */}
          <button className="lux-btn" style={{ background: status === 'all' ? '#fffbe6' : '#D4AF37', color: status === 'all' ? '#D4AF37' : '#121212' }} onClick={() => setStatus('all')}>All</button>
          <button className="lux-btn" style={{ background: status === 'pending' ? '#fffbe6' : '#D4AF37', color: status === 'pending' ? '#D4AF37' : '#121212' }} onClick={() => setStatus('pending')}>Pending</button>
          <button className="lux-btn" style={{ background: status === 'completed' ? '#fffbe6' : '#D4AF37', color: status === 'completed' ? '#D4AF37' : '#121212' }} onClick={() => setStatus('completed')}>Completed</button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.length === 0 ? (
            <li style={{ textAlign: 'center', color: '#D4AF37', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginTop: '2rem' }}>
              You have no tasks yet. Add one and take charge.
            </li>
          ) : (
            tasks
              .filter(task => status === 'all' ? true : task.status === status)
              .map(task => (
                <li key={task._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #D4AF37', transition: 'background 0.3s' }}>
                  <div>
                    <strong style={{ color: '#D4AF37', fontFamily: 'Playfair Display, serif', fontSize: '1.1rem' }}>{task.title}</strong>
                    <span style={{ marginLeft: '1rem', padding: '0.3rem 1rem', borderRadius: '999px', background: task.status === 'completed' ? '#D4AF37' : '#181818', color: task.status === 'completed' ? '#121212' : '#D4AF37', fontWeight: 600, fontSize: '0.9rem' }}>{task.status}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button className="lux-btn" style={{ padding: '0.3rem 1rem', fontSize: '0.9rem' }} onClick={() => handleUpdate(task._id, task.status === 'pending' ? 'completed' : 'pending')}>
                      {task.status === 'pending' ? 'Mark Completed' : 'Mark Pending'}
                    </button>
                    <button className="lux-btn" style={{ padding: '0.3rem 1rem', fontSize: '0.9rem', background: '#181818', color: '#D4AF37', border: '1px solid #D4AF37' }} onClick={() => handleDelete(task._id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
