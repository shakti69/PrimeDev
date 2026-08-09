// Client-side LocalStorage DB Simulation
import { clientProjectsData } from '../data/projects';

export interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  timeSlot: string;
  message?: string;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  createdAt: string;
}

export interface CareerApplication {
  id: string;
  name: string;
  email: string;
  position: string;
  message: string;
  resumeName: string;
  createdAt: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  percentage: number;
  date: string;
  description: string;
}

export interface ClientProject {
  id: string;
  name: string;
  status: string;
  overallProgress: number;
  startDate: string;
  targetLaunch: string;
  milestones: ProjectMilestone[];
  invoices: {
    id: string;
    description: string;
    amount: string;
    dueDate: string;
    status: 'paid' | 'pending' | 'overdue';
  }[];
}



// LocalStorage Keys
const KEYS = {
  APPOINTMENTS: 'primedev_appointments',
  CONTACTS: 'primedev_contacts',
  SUBSCRIBERS: 'primedev_subscribers',
  APPLICATIONS: 'primedev_applications',
  PROJECT: 'primedev_project'
};

const getFromStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const saveToStorage = <T>(key: string, value: T): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const db = {
  // Appointments
  getAppointments: (): Appointment[] => {
    return getFromStorage<Appointment[]>(KEYS.APPOINTMENTS, []);
  },
  
  addAppointment: (app: Omit<Appointment, 'id' | 'status' | 'createdAt'>): Appointment => {
    const appointments = db.getAppointments();
    const newApp: Appointment = {
      ...app,
      id: `appt-${Math.random().toString(36).substr(2, 9)}`,
      status: 'pending',
      createdAt: new Date().toISOString().split('T')[0]
    };
    appointments.push(newApp);
    saveToStorage(KEYS.APPOINTMENTS, appointments);
    return newApp;
  },

  // Contact messages
  getContacts: (): ContactMessage[] => {
    return getFromStorage<ContactMessage[]>(KEYS.CONTACTS, []);
  },

  addContact: (msg: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage => {
    const contacts = db.getContacts();
    const newMsg: ContactMessage = {
      ...msg,
      id: `msg-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString()
    };
    contacts.push(newMsg);
    saveToStorage(KEYS.CONTACTS, contacts);
    return newMsg;
  },

  // Subscribers
  getSubscribers: (): string[] => {
    return getFromStorage<string[]>(KEYS.SUBSCRIBERS, []);
  },

  addSubscriber: (email: string): boolean => {
    const subscribers = db.getSubscribers();
    if (subscribers.includes(email)) return false;
    subscribers.push(email);
    saveToStorage(KEYS.SUBSCRIBERS, subscribers);
    return true;
  },

  // Career applications
  getApplications: (): CareerApplication[] => {
    return getFromStorage<CareerApplication[]>(KEYS.APPLICATIONS, []);
  },

  addApplication: (app: Omit<CareerApplication, 'id' | 'createdAt'>): CareerApplication => {
    const applications = db.getApplications();
    const newApp: CareerApplication = {
      ...app,
      id: `app-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString()
    };
    applications.push(newApp);
    saveToStorage(KEYS.APPLICATIONS, applications);
    return newApp;
  },

  // Project tracker
  getClientProject: (email: string = 'client@primedev.com'): ClientProject => {
    const key = `${KEYS.PROJECT}_${email}`;
    const defaultProject = clientProjectsData[email] || clientProjectsData['client@primedev.com'];
    return getFromStorage<ClientProject>(key, defaultProject);
  },

  updateProjectProgress: (newProgress: number, email: string = 'client@primedev.com'): void => {
    const key = `${KEYS.PROJECT}_${email}`;
    const project = db.getClientProject(email);
    project.overallProgress = newProgress;
    saveToStorage(key, project);
  }
};
export default db;
