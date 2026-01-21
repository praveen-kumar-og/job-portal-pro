import React, { useState } from 'react';
import { useJobContext } from '../context/JobContext';
import { useAuth } from '../context/AuthContext';

const Provider = () => {
  const { jobs, addJob, applications } = useJobContext(); // Get jobs and applications
  const { user } = useAuth();
  const [form, setForm] = useState({ title: '', company: '', salary: '', desc: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(form);
    setForm({ title: '', company: '', salary: '', desc: '' });
    alert("Job Posted Successfully!");
  };

  // Helper function: Find applicants for a specific job ID
  const getApplicantsForJob = (jobId) => {
    return applications.filter(app => app.jobId === jobId);
  };

  return (
    <div>
      <h2>Recruiter Dashboard</h2>

      {/* SECTION 1: POST A JOB */}
      <div className="card" style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: '#2563eb' }}>Post a New Job</h3>
        <form onSubmit={handleSubmit}>
          <div className="stats-grid">
            <div className="form-group">
              <label>Job Title</label>
              <input 
                className="form-control" 
                placeholder="e.g. React Developer"
                value={form.title} 
                onChange={e => setForm({...form, title: e.target.value})} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input 
                className="form-control" 
                placeholder="e.g. TechCorp"
                value={form.company} 
                onChange={e => setForm({...form, company: e.target.value})} 
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea 
              className="form-control" 
              rows="3" 
              placeholder="Job requirements..."
              value={form.desc} 
              onChange={e => setForm({...form, desc: e.target.value})} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-success">Post Position</button>
        </form>
      </div>

      {/* SECTION 2: VIEW APPLICANTS */}
      <h3>Your Posted Jobs & Applicants</h3>
      <div className="job-list">
        {jobs.length === 0 ? (
          <p style={{ color: '#64748b' }}>No jobs posted yet.</p>
        ) : (
          jobs.map(job => {
            const jobApplicants = getApplicantsForJob(job.id);
            
            return (
              <div key={job.id} className="card" style={{ borderLeft: '5px solid #2563eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{job.title}</h4>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>{job.company}</span>
                  </div>
                  <div style={{ background: '#eff6ff', color: '#2563eb', padding: '5px 10px', borderRadius: '15px', fontWeight: 'bold', fontSize: '0.8rem' }}>
                    {jobApplicants.length} Applicants
                  </div>
                </div>

                {/* Applicants List inside the Job Card */}
                {jobApplicants.length > 0 ? (
                  <table style={{ width: '100%', fontSize: '0.9rem', borderTop: '1px solid #e2e8f0' }}>
                    <thead>
                      <tr style={{ color: '#64748b', textAlign: 'left' }}>
                        <th style={{ padding: '8px' }}>Candidate Name</th>
                        <th style={{ padding: '8px' }}>Date Applied</th>
                        <th style={{ padding: '8px' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobApplicants.map(app => (
                        <tr key={app.id}>
                          <td style={{ padding: '8px', fontWeight: '500' }}>{app.seekerName}</td>
                          <td style={{ padding: '8px' }}>{app.date}</td>
                          <td style={{ padding: '8px' }}>
                            <span style={{ color: 'green' }}>Received</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div style={{ padding: '10px', background: '#f8fafc', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.9rem' }}>
                    No applicants yet.
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Provider;