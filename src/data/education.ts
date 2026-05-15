import type { EducationEntry } from '../types';

export const educationData: EducationEntry[] = [
  {
    id: 'edu-university',
    school: 'Istanbul Technical University (ITU)',
    degree: 'Bachelor of Science',
    field: 'Computer Engineering',
    period: '2019 - 2023',
    details: [
      'Specialized in Cloud Computing and Systems Architecture',
      'GPA: 3.8/4.0 - Dean\'s List all semesters',
      'Capstone Project: "Distributed Kubernetes Resource Optimizer"',
      'Active in open-source development and tech communities',
    ],
    skills: [
      'Algorithms & Data Structures',
      'Operating Systems',
      'Distributed Systems',
      'Database Design',
      'Cloud Architecture',
    ],
  },
  {
    id: 'edu-certifications',
    school: 'Cloud Native Computing Foundation (CNCF)',
    degree: 'Certified Kubernetes Administrator',
    field: 'Cloud Infrastructure',
    period: '2023',
    details: [
      'CKA Certification achieved with 92% score',
      'Hands-on experience with production Kubernetes clusters',
      'Expertise in cluster security, networking, and troubleshooting',
    ],
    skills: [
      'Kubernetes Administration',
      'Container Security',
      'Network Policies',
      'RBAC & Access Control',
    ],
  },
];
