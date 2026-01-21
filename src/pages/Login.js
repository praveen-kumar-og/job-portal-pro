import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('seeker');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if(!username) return alert("Please enter a name");
    
    login(username, role);
    
    // Redirect based on role
    if(role === 'admin') navigate('/admin');
    else if(role === 'provider') navigate('/provider');
    else navigate('/seeker');
  };

  return (
    <div className="login-container">
      <div className="card login-box">
        <h2 style={{textAlign:'center', marginBottom: '20px', color: '#2563eb'}}>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              className="form-control" 
              placeholder="Ex: Praveen" 
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Login As</label>
            <select className="form-control" value={role} onChange={e => setRole(e.target.value)}>
              <option value="seeker">Job Seeker</option>
              <option value="provider">Job Provider</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;