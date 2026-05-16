import type { Project } from '../types';

export const projectsData: Project[] = [

    {
        id: 'must-gather-analyzer',
        title: 'Must Gather Analyzer',
        description:
            'An OpenSource tool for analyzing Must Gather Logs for Openshift/OKD clusters.',
        technologies: ['Typescript', 'React', 'Vite', 'Tailwind CSS'],
        github: 'https://github.com/YamacTan/mustgatheranalyzer',
        liveDemo: undefined,
        featured: true,
    },
    {
    id: 'consul-vault-generator',
    title: '.NET Consul-Vault Generator',
    description:
      'A simple tool that converts application configuration files (e.g. appsettings.json) into Vault import JSON and Consul Template files.',
    technologies: ['Python', 'Consul', 'Vault'],
    github: 'https://github.com/YamacTan/config-to-secrets-converter',
    liveDemo: undefined,
    featured: true,
  },
  {
    id: 'employee-attrition',
    title: 'Employee Attrition Prediction',
    description:
      'Python Flask Deployment of the Employee Attrition Prediction project which was carried out within the scope of Turkcell Data Science Bootcamp Final Project.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/YamacTan/EmployeeAttritionPrediction_FlaskDeployment',
    liveDemo: undefined,
    featured: true,
  },

    //TODO: Must-gather analyzer ekle.
];
