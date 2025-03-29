// src/components/Resume/ResumeView.tsx
import React, { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';
import quests from '../../data/quests.data';
import './ResumeView.css';
import generatePDF from '../../utils/pdfGenerator';

const ResumeView: React.FC = () => {
  const { theme } = useTheme()!;
  
  // Transform quest data into resume format
  const resumeData = useMemo(() => {
    // Extract and organize professional experience
    const experience = quests
      .filter(quest => quest.company && quest.company !== 'Personal Project' && quest.type !== 'education')
      .map(quest => ({
        company: quest.company,
        role: quest.workTitle,
        startDate: quest.startDate,
        endDate: quest.endDate,
        accomplishments: quest.accomplishments.map(acc => acc.description),

      }))
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
    
    // Extract education information (assuming you have education data)
    const education = quests
      .filter(quest => quest.type === 'education')
      .map(edu => ({
        institution: edu.company,
        degree: edu.accomplishments.map(acc => acc.description)[0],
        startDate: edu.startDate,
        endDate: edu.endDate,
        details: edu.accomplishments.map(acc => acc.description)
      }))
      .sort((a, b) => b.endDate.getTime() - a.endDate.getTime());
    
    // Extract skills from all accomplishments
    const skills = Array.from(new Set(
      quests.flatMap(quest => 
        quest.accomplishments.flatMap(acc => acc.learnings)
      )
    ));
    
    return { experience, education, skills };
  }, []);

  const handleDownloadPDF = () => {
    generatePDF(resumeData, 'Professional_Resume.pdf');
  };

  return (
    <div className={`resume-container ${theme}`}>
<div className="resume-header">
  <div className="header-content">
    <h1>Roderick Daniels</h1>
    <div className="contact-info">
      rddaniels89@gmail.com<br/>
      https://www.linkedin.com/in/roderick-daniels/<br/>
      Schertz, TX<br/>
    </div>
  </div>
  <button className="download-button" onClick={handleDownloadPDF}>
    Download PDF
  </button>
</div>
      
      <div className="resume-content">
        {/* Professional Summary */}
        <section className="resume-section">
  <h2>Professional Summary</h2>
  <p className="summary-text">
  Results-oriented financial leader with 16+ years of progressive experience in federal budget execution, resource optimization, and financial systems integration across both civilian and military sectors. Demonstrated success in streamlining multi-million-dollar budget operations, enhancing execution efficiency, and delivering measurable cost savings at the Defense Health Agency and in U.S. Navy operations. Adept at interpreting complex financial data, advising senior leadership, and aligning resources with enterprise-level priorities. Certified Defense Financial Manager (CDFM) and MBA holder with deep expertise in PPBE, GFEBS, FMIS, Ektropy, Tableau, and federal compliance frameworks. Proven ability to lead cross-functional teams and deliver mission-critical outcomes in dynamic, high-stakes environments.
  </p>
</section>
<section className="resume-section">
  <h2>Core Competencies</h2>
  <div className="competencies-grid">
  <div className="competency-item">
    <h3>Federal Budget Execution</h3>
    <p>Extensive experience managing multi-million-dollar federal budgets, ensuring compliance with fiscal policies and maximizing resource efficiency.</p>
  </div>

  <div className="competency-item">
    <h3>Financial Systems Integration</h3>
    <p>Expert in using GFEBS, Ektropy, Power BI, and Tableau for real-time financial tracking, analytics, and reporting across military and healthcare systems.</p>
  </div>

  <div className="competency-item">
    <h3>Strategic Resource Planning</h3>
    <p>Skilled in aligning financial resources with enterprise goals through PPBE processes, cost analysis, and long-range budget planning.</p>
  </div>

  <div className="competency-item">
    <h3>Leadership & Collaboration</h3>
    <p>Proven ability to lead cross-functional teams and advise senior leadership on financial strategies, execution, and compliance.</p>
  </div>

  <div className="competency-item">
    <h3>Defense Health Agency Expertise</h3>
    <p>Deep understanding of DHA budget processes, policy development, and system transformation to optimize healthcare funding.</p>
  </div>

  <div className="competency-item">
    <h3>Veteran & Mission-Driven Focus</h3>
    <p>Brings disciplined, results-focused leadership from military service with a commitment to excellence in government financial operations.</p>
  </div>
</div>

</section>
        {/* Professional Experience */}
        <section className="resume-section">
          <h2>Professional Experience</h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="job-header">
                <h3>{job.role}</h3>
                <div className="company-period">
                  <span className="company-name">{job.company}</span>
                  <span className="job-period">
                    {new Date(job.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} – 
                    {job.endDate.getFullYear() >= 2030 
                      ? ' Present' 
                      : new Date(job.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
              </div>
              <ul className="accomplishment-bullets">
                {job.accomplishments.map((acc, i) => (
                  <li key={i}>{acc}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        
        {/* Education Section */}
        {resumeData.education && resumeData.education.length > 0 && (
          <section className="resume-section">
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.degree}</h3>
                <div className="institution-period">
                  <span className="institution-name">{edu.institution}</span>
                  <span className="education-period">
                    {new Date(edu.startDate).getFullYear()} – {new Date(edu.endDate).getFullYear()}
                  </span>
                </div>
                {edu.details && edu.details.length > 0 && (
                  <ul className="education-details">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
    
      </div>
    </div>
  );
};

export default ResumeView;