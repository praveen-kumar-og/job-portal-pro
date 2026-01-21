import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { JobProvider } from './context/JobContext';
import { AuthProvider } from './context/AuthContext';
import './App.css'; 
import Login from './pages/Login';
import Layout from './components/Layout';
import Seeker from './pages/Seeker';
import Provider from './pages/Provider';
import Admin from './pages/Admin';

function App() {
  return (
    <AuthProvider>
      <JobProvider>
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<Login />} />

           
            <Route element={<Layout />}>
              <Route path="/seeker" element={<Seeker />} />
              <Route path="/provider" element={<Provider />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      </JobProvider>
    </AuthProvider>
  );
}

export default App;