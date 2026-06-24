import { type ClientProject } from '../utils/db';

export const clientProjectsData: Record<string, ClientProject> = {
  // Client 1: Elena & Team Aether V2 (client@primedev.com / password123)
  'client@primedev.com': {
    id: 'pd-proj-783',
    name: 'Aether SaaS Platform V2',
    status: 'In Development',
    overallProgress: 68,
    startDate: '2026-05-10',
    targetLaunch: '2026-08-15',
    milestones: [
      { id: '1', title: 'Discovery & Requirements Gathering', status: 'completed', percentage: 100, date: 'May 15, 2026', description: 'Aligning business goals, system architectures, and technical specifications.' },
      { id: '2', title: 'UI/UX Design & High-Fi Prototyping', status: 'completed', percentage: 100, date: 'June 05, 2026', description: 'Creating interactive design systems, dashboard interfaces, and mobile screens.' },
      { id: '3', title: 'Frontend Core Engine Architecture', status: 'completed', percentage: 100, date: 'June 20, 2026', description: 'Setting up clean repository architecture, design library components, and responsive views.' },
      { id: '4', title: 'Backend API & MongoDB Database Integration', status: 'in-progress', percentage: 70, date: 'July 15, 2026', description: 'Developing Express API microservices, JWT authentication, and data structures.' },
      { id: '5', title: 'Cloud Deployments & Server-side Actions', status: 'pending', percentage: 0, date: 'August 01, 2026', description: 'Deploying servers on AWS/Vercel and scaling static assets on CDNs.' },
      { id: '6', title: 'End-to-End QA & Production Launch', status: 'pending', percentage: 0, date: 'August 15, 2026', description: 'Automated testing, cross-browser audits, accessibility validations, and dns mapping.' }
    ],
    invoices: [
      { id: 'INV-2026-001', description: 'Project Kickoff (30% Deposit)', amount: '$4,500.00', dueDate: '2026-05-12', status: 'paid' },
      { id: 'INV-2026-002', description: 'UI/UX Approval (30% Milestone)', amount: '$4,500.00', dueDate: '2026-06-08', status: 'paid' },
      { id: 'INV-2026-003', description: 'Development Phase 1 (20% Milestone)', amount: '$3,000.00', dueDate: '2026-07-20', status: 'pending' },
      { id: 'INV-2026-004', description: 'Final Delivery & Handover (20%)', amount: '$3,000.00', dueDate: '2026-08-15', status: 'pending' }
    ]
  },
  
  // Client 2: Liam Neeson & Veloce Storefront (liam@veloce.com / password123)
  'liam@veloce.com': {
    id: 'pd-proj-104',
    name: 'Veloce Headless Storefront',
    status: 'Design Phase',
    overallProgress: 35,
    startDate: '2026-06-01',
    targetLaunch: '2026-09-01',
    milestones: [
      { id: '1', title: 'Market Strategy & Audit', status: 'completed', percentage: 100, date: 'June 10, 2026', description: 'Competitor indexing and speed budget benchmarking.' },
      { id: '2', title: 'Figma E-Commerce Wireframes', status: 'in-progress', percentage: 60, date: 'July 05, 2026', description: 'Designing high-converting checkout flows and cart side-drawers.' },
      { id: '3', title: 'Shopify Admin Sync & API Configs', status: 'pending', percentage: 0, date: 'July 25, 2026', description: 'Linking product inventory variants via Shopify GraphQL.' },
      { id: '4', title: 'Vercel Deployment & Handover', status: 'pending', percentage: 0, date: 'September 01, 2026', description: 'Mapping custom domains and optimizing Core Web Vitals.' }
    ],
    invoices: [
      { id: 'INV-2026-088', description: 'Deposit Payment (50%)', amount: '$6,000.00', dueDate: '2026-06-02', status: 'paid' },
      { id: 'INV-2026-089', description: 'Milestone 2 Delivery (50%)', amount: '$6,000.00', dueDate: '2026-08-01', status: 'pending' }
    ]
  }
};
