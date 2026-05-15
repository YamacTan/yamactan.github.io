import type { ExpertiseTier1Skill, CoreCompetency, SupportingSkill } from '../types';

// TIER 1: PRIMARY EXPERTISE (Hero Card)
export const primaryExpertise: ExpertiseTier1Skill = {
  name: 'DevOps and Platform Engineering',
  description:
    'Enterprise-scale container management and orchestration with production-grade expertise across cloud-native architectures',
  icon: 'Boxes',
  achievements: [
    'Kubernetes Cluster Management & Optimization',
    'RedHat OpenShift (OKD) Administration',
    'Multi-node Deployment & Scaling',
    'Container Orchestration & Resource Optimization',
    'RBAC & Security Configuration',
    'Production Level Deep Expertise on RedHat Product Protfolio'
  ],
  relatedTech: [
    'Docker',
      'Kubernetes',
    'Helm',
    'RedHat OpenShift',
    'RHEL',
    'Ubuntu',
    'Ansible',
  ],
};

// TIER 2: CORE COMPETENCIES (Bento Grid - 6 cards)
export const coreCompetencies: CoreCompetency[] = [
  {
    id: 'infrastructure-automation',
    title: 'Infrastructure & Automation',
    description:
      'Infrastructure as Code, Linux systems administration, and cluster management at scale',
    icon: 'Wrench',
    technologies: [
      'Ansible',
      'RHEL',
      'Ubuntu',
      'RedHat Advanced Cluster Management',
    ],
    span: 'lg:col-span-2',
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud Platforms',
    description: 'Multi-cloud expertise across major cloud providers',
    icon: 'Cloud',
    technologies: ['Google Cloud Platform', 'Amazon Web Services'],
    span: 'col-span-1',
  },
  {
    id: 'security-registry',
    title: 'Security & Registry',
    description: 'Container security, secrets management, and service mesh',
    icon: 'Shield',
    technologies: ['Vault', 'Consul', 'Harbor'],
    span: 'col-span-1',
  },
  {
    id: 'ai-ml-systems',
    title: 'AIOps & MLOps',
    description:
      'Deep learning frameworks, model management, and ML infrastructure',
    icon: 'Brain',
    technologies: [
      'TensorFlow',
      'PyTorch',
      'Keras',
      'MLFlow',
      'scikit-learn',
      'OpenCV',
    ],
    span: 'lg:col-span-2',
  },
  {
    id: 'data-science',
    title: 'Data Processing & Analysis',
    description: 'Data manipulation and numerical computing libraries',
    icon: 'BarChart3',
    technologies: ['Pandas', 'NumPy', 'scikit-learn'],
    span: 'col-span-1',
  },
  {
    id: 'chaos-reliability',
    title: 'Chaos & Reliability',
    description: 'Chaos engineering and resilience testing platforms',
    icon: 'Zap',
    technologies: ['ChaosMesh', 'Litmus'],
    span: 'col-span-1',
  },
];

// TIER 3: SUPPORTING SKILLS (Compact Badges/Tabs)
export const supportingSkills: {
  [key: string]: SupportingSkill[];
} = {
  programming: [
    { name: 'Python', icon: 'Code', category: 'programming' },
    { name: 'Bash', icon: 'Code', category: 'programming' },
    { name: 'SQL', icon: 'Code', category: 'programming' },
    { name: 'C', icon: 'Code', category: 'programming' },
    { name: 'C++', icon: 'Code', category: 'programming' },
    { name: 'MATLAB', icon: 'Code', category: 'programming' },
  ],
  databases: [
    { name: 'PostgreSQL', icon: 'Database', category: 'databases' },
    { name: 'MongoDB', icon: 'Database', category: 'databases' },
    { name: 'MSSQL', icon: 'Database', category: 'databases' },
  ],
  devtools: [
    { name: 'GitLab', icon: 'GitBranch', category: 'devtools' },
    { name: 'Bitbucket', icon: 'GitBranch', category: 'devtools' },
  ],
};

// Legacy compatibility (for potential old references)
export const skillsData = {
  category: 'All Skills',
  skills: [],
};
