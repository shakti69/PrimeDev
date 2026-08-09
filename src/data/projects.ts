import { type ClientProject } from '../utils/db';

export const clientProjectsData: Record<string, ClientProject> = {
  // Client Account: client@primedev.com / password123
  'client@primedev.com': {
    id: 'pd-proj-01',
    name: 'Hostel Meal Management System (Full-Stack Deployment)',
    status: 'In Development',
    overallProgress: 85,
    startDate: '2026-05-10',
    targetLaunch: '2026-08-30',
    milestones: [
      { id: '1', title: 'System Architecture & Database Modeling', status: 'completed', percentage: 100, date: 'May 15, 2026', description: 'Designing role-based MongoDB models (Student, Staff, Admin, Developer) and authentication specs.' },
      { id: '2', title: 'Frontend UI & Responsive Dashboard', status: 'completed', percentage: 100, date: 'June 05, 2026', description: 'Building React + Tailwind dashboards, meal toggle switches, and monthly summary tables.' },
      { id: '3', title: 'Backend REST API & JWT OTP Verification', status: 'completed', percentage: 100, date: 'June 25, 2026', description: 'Developing Express endpoints, cutoff time policies, bcrypt hashing, and OTP email validation.' },
      { id: '4', title: 'Automated Billing Calculation & jsPDF Integration', status: 'completed', percentage: 100, date: 'July 20, 2026', description: 'Implementing monthly bill generation, per-meal cost pricing, and instant PDF download exports.' },
      { id: '5', title: 'Role-Based Access Control & Staff/Admin Panels', status: 'in-progress', percentage: 75, date: 'August 15, 2026', description: 'Connecting staff daily counters, student lists, CSV export capabilities, and super admin controls.' },
      { id: '6', title: 'Production Cloud Deployment & Handover', status: 'pending', percentage: 0, date: 'August 30, 2026', description: 'Deploying Node.js backend to production, frontend to static CDN, and final verification.' }
    ],
    invoices: [
      { id: 'INV-2026-001', description: 'Project Kickoff & Architecture (40% Deposit)', amount: '$1,200.00', dueDate: '2026-05-12', status: 'paid' },
      { id: 'INV-2026-002', description: 'Core API & UI Milestone (30%)', amount: '$900.00', dueDate: '2026-06-28', status: 'paid' },
      { id: 'INV-2026-003', description: 'Billing Engine & Final Deployment (30%)', amount: '$900.00', dueDate: '2026-08-30', status: 'pending' }
    ]
  },
  
  // Client 2: Smart Campus IoT / Attendance
  'campus@primedev.com': {
    id: 'pd-proj-02',
    name: 'Smart WiFi Attendance System',
    status: 'Testing Phase',
    overallProgress: 90,
    startDate: '2026-06-01',
    targetLaunch: '2026-09-05',
    milestones: [
      { id: '1', title: 'Network Protocol & Hardware Testing', status: 'completed', percentage: 100, date: 'June 10, 2026', description: 'WiFi signal presence detection and access point probe request capture.' },
      { id: '2', title: 'Automated Attendance Processing Engine', status: 'completed', percentage: 100, date: 'July 10, 2026', description: 'Algorithms to record student presence without manual intervention.' },
      { id: '3', title: 'Admin Reporting & Analytics Dashboard', status: 'in-progress', percentage: 80, date: 'August 20, 2026', description: 'Class-wise attendance reports, anomaly alerts, and export options.' },
      { id: '4', title: 'Campus Network Rollout', status: 'pending', percentage: 0, date: 'September 05, 2026', description: 'Final onsite calibration and administrator training.' }
    ],
    invoices: [
      { id: 'INV-2026-051', description: 'Hardware & System Setup (50%)', amount: '$1,500.00', dueDate: '2026-06-05', status: 'paid' },
      { id: 'INV-2026-052', description: 'Final Integration & Delivery (50%)', amount: '$1,500.00', dueDate: '2026-09-05', status: 'pending' }
    ]
  }
};
