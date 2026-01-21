import React from 'react';
import { useJobContext } from '../context/JobContext';
import { useAuth } from '../context/AuthContext';

const Seeker = () => {
  const { jobs, applyForJob } = useJobContext();
  const { user } = useAuth();

  return (
    <div>
      <h2>Latest Job Openings</h2>
      <p style={{color:'#64748b'}}>Find your dream job today.</p>
      <div className="job-list">
        {jobs.map(job => (
          <div key={job.id} className="card" style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h3 style={{margin:'0 0 5px 0'}}>{job.title}</h3>
              <span style={{background:'#e0f2fe', color:'#0369a1', padding:'2px 8px', borderRadius:'4px', fontSize:'0.8rem'}}>
                {job.company}
              </span>
              <p style={{margin:'10px 0 0 0', color:'#475569'}}>{job.desc}</p>
            </div>
            <button className="btn btn-primary" onClick={() => applyForJob(job.id, user.name)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seeker;