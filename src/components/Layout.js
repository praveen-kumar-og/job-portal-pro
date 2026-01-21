import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

 
  useEffect(() => {
    if (!user) navigate('/');
  }, [user, navigate]);

  if (!user) return null; 

  return (
    <div>
      <nav className="navbar">
        <Link to="#" className="brand">JobPortal<span style={{color:'#333'}}>Pro</span></Link>
        <div className="nav-links" style={{display:'flex', alignItems:'center'}}>
          <span style={{marginRight:'15px', fontWeight:'500'}}>Hello, {user.name} ({user.role})</span>
          <button 
            className="btn btn-danger" 
            style={{padding: '0.5rem 1rem', fontSize:'0.8rem'}}
            onClick={() => { logout(); navigate('/'); }}
          >
            Logout
          </button>
        </div>
      </nav>

     
      <div className="container">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Layout;