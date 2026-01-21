import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext();

const initialJobs = [
  { id: 1, title: "React Frontend Dev", company: "ScaleRoot", salary: "10LPA", desc: "Need React expertise." },
  { id: 2, title: "Laravel Backend Dev", company: "TechSolutions", salary: "8LPA", desc: "PHP and API mastery." }
];

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(initialJobs);
  const [applications, setApplications] = useState([]);

  
  const addJob = (job) => {
    setJobs([...jobs, { ...job, id: Date.now() }]);
  };

 
  const applyForJob = (jobId, seekerName) => {
    const job = jobs.find(j => j.id === jobId);
    const newApp = { 
      id: Date.now(), 
      jobId, 
      seekerName, 
      jobTitle: job.title, 
      company: job.company,
      date: new Date().toLocaleDateString()
    };
    setApplications([...applications, newApp]);
    alert("Application Sent Successfully!");
  };

  return (
    <JobContext.Provider value={{ jobs, applications, addJob, applyForJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);