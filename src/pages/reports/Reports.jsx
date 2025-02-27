import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import * as pdfjs from 'pdfjs-dist'; // Correct import for pdfjs
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import './Reports.css';

// Set the worker URL after importing pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Reports = () => {
  const [reportData, setReportData] = useState([
    {
      id: 1,
      name: 'John Doe',
      date: '2024-12-01', // Test Date
      type: 'Blood Test',
      status: 'Completed',
      reportLink: '/reports/blood-test-report-a.pdf',
      reportComingDate: '2024-12-03', // Report Coming Date
    },
    {
      id: 2,
      name: 'Patient Report B',
      date: '2024-12-02', // Test Date
      type: 'X-Ray',
      status: 'Pending',
      reportLink: '',
      reportComingDate: '', // Report Coming Date
    },
    {
      id: 3,
      name: 'Patient Report C',
      date: '2024-12-03', // Test Date
      type: 'ECG',
      status: 'Completed',
      reportLink: '/reports/ecg-report-c.pdf',
      reportComingDate: '2024-12-06', // Report Coming Date
    },
    {
      id: 4,
      name: 'Patient Report D',
      date: '2024-12-04', // Test Date
      type: 'CT Scan',
      status: 'In Progress',
      reportLink: '',
      reportComingDate: '2024-12-10', // Report Coming Date
    },
    {
      id: 5,
      name: 'Patient Report E',
      date: '2024-12-05', // Test Date
      type: 'MRI',
      status: 'Completed',
      reportLink: '/reports/mri-report-e.pdf',
      reportComingDate: '2024-12-07', // Report Coming Date
    },
  ]);

  const [selectedReport, setSelectedReport] = useState(null);

  const handleViewReport = (reportLink) => {
    setSelectedReport(reportLink);
  };

  return (
    <div className="reports-container">
      <h1 className="reports-title">Test Reports</h1>
      <table className="reports-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Report Name</th>
            <th>Test Date</th>
            <th>Type</th>
            <th>Status</th>
            <th>Report Coming Date</th>
            <th>Report</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report) => (
            <tr key={report.id}>
              <td>{report.id}</td>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>{report.type}</td>
              <td>
                <span
                  className={`status ${report.status.toLowerCase().replace(' ', '-')}`}
                >
                  {report.status}
                </span>
              </td>
              <td>{report.reportComingDate ? report.reportComingDate : 'Not Available'}</td> {/* Report Coming Date */}
              <td>
                {report.status === 'Completed' && report.reportLink ? (
                  <button
                    onClick={() => handleViewReport(report.reportLink)}
                    className="view-report-button"
                  >
                    View Report
                  </button>
                ) : report.status === 'In Progress' ? (
                  <span className="report-status">Report is in progress</span>
                ) : (
                  <span className="report-status">Report not available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Display PDF in the modal if report is selected */}
      {selectedReport && (
        <div className="pdf-viewer">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
            <Viewer fileUrl={selectedReport} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default Reports;
