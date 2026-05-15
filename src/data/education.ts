import type { EducationEntry } from '../types';

export const educationData: EducationEntry[] = [
  {
    id: 'ted-university-msc',
    school: 'TED University',
    degree: 'Master of Science with Thesis',
    field: 'Computer Engineering',
    period: 'Feb. 2022 ‑ Feb. 2024\n',
    details: [
      'GPA: 3.86 / 4.00 | Full Scholarship ‑ % 100 English',
      'First M.Sc. Graduate Student of Department of Computer Engineering',
      'Thesis: A 3D Video Quality Evaluation Model That Provides High Depth Perception Satisfactıon And Efficient Transmissıon Channel Use\n' +
      'Based On Depth Cues ‑ Supported by Scientific and Technological Research Council of Turkey within the scope of ARDEB 1001 ‑ Scientific and\n' +
      'Technological Research Projects Support Program'
    ],
    skills: [
      'Algorithms & Data Structures',
      'Distributed Systems',
      'Machine Learning',
      'Artificial Intelligence',
      'Computer Vision',
      'Cryptograpy',
      'Cloud Architecture',
    ],
  },
  {
    id: 'ted-university-bsc',
    school: 'TED University',
    degree: 'Bachelor of Science',
    field: 'Electrical and Electronics Engineering',
    period: 'Sep. 2017 ‑ Jun. 2021',
    details: [
      'GPA: 3.26 / 4.00 ‑ Honor Student | %50 Scholarship ‑ % 100 English ',
      'Minor: Business Administration and Management',
      'Graduation Project: Artificial Intelligence Based Autonomous Flight and Control System for Unmanned Aerial Vehicles',
    ],
    skills: [
      'Artificial Intelligence',
      'Computer Vision',
        'Control Systems',
        'Databases',
        'Signals and Systems'

    ],
  },
];
