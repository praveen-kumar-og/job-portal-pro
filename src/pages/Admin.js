import React from 'react';
import { useJobContext } from '../context/JobContext';

const Admin = () => {
  const { jobs, applications } = useJobContext();

  return (
    <div>
      <h2>System Overview</h2>
      
      <div className="stats-grid" style={{marginBottom: '2rem'}}>
        <div className="card" style={{borderLeft:'4px solid #2563eb'}}>
          <h3>{jobs.length}</h3>
          <p>Active Jobs</p>
        </div>
        <div className="card" style={{borderLeft:'4px solid #22c55e'}}>
          <h3>{applications.length}</h3>
          <p>Total Applications</p>
        </div>
      </div>

      <div className="card">
        <h3>Recent Applications</h3>
        <table style={{width:'100%', borderCollapse:'collapse', marginTop:'10px'}}>
          <thead>
            <tr style={{borderBottom:'2px solid #f1f5f9', textAlign:'left'}}>
              <th style={{padding:'10px'}}>Candidate</th>
              <th style={{padding:'10px'}}>Job Title</th>
              <th style={{padding:'10px'}}>Company</th>
              <th style={{padding:'10px'}}>Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app.id} style={{borderBottom:'1px solid #f1f5f9'}}>
                <td style={{padding:'10px'}}>{app.seekerName}</td>
                <td style={{padding:'10px'}}>{app.jobTitle}</td>
                <td style={{padding:'10px'}}>{app.company}</td>
                <td style={{padding:'10px'}}>{app.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {applications.length === 0 && <p style={{textAlign:'center', marginTop:'20px', color:'#94a3b8'}}>No applications yet.</p>}
      </div>
    </div>
  );
};

export default Admin;