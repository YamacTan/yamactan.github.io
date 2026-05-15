import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    category: 'DevOps & Infrastructure',
    skills: [
      {
        name: 'Kubernetes',
        description: 'OKD/K8s cluster management & orchestration',
        icon: '⚙️',
        span: 'col-span-2',
      },
      {
        name: 'Docker',
        description: 'Container packaging & registry',
        icon: '🐳',
      },
      {
        name: 'Terraform',
        description: 'Infrastructure as Code',
        icon: '🏗️',
      },
      {
        name: 'Helm',
        description: 'K8s package management',
        icon: '⛵',
      },
      {
        name: 'OADP',
        description: 'Backup & disaster recovery',
        icon: '💾',
      },
    ],
  },
  {
    category: 'Platform Engineering',
    skills: [
      {
        name: 'CI/CD Pipelines',
        description: 'GitHub Actions, GitLab CI, ArgoCD',
        icon: '🚀',
        span: 'col-span-2',
      },
      {
        name: 'Monitoring',
        description: 'Prometheus, Grafana, observability',
        icon: '📊',
      },
      {
        name: 'ArgoCD',
        description: 'GitOps & continuous deployment',
        icon: '🔄',
      },
      {
        name: 'Resource Optimization',
        description: 'Pod metrics & auto-scaling',
        icon: '⚡',
      },
    ],
  },
  {
    category: 'AI & ML Systems',
    skills: [
      {
        name: 'LLM Infrastructure',
        description: 'Model deployment & inference optimization',
        icon: '🧠',
        span: 'col-span-2',
      },
      {
        name: 'PyTorch',
        description: 'Deep learning framework',
        icon: '🔥',
      },
      {
        name: 'Vector Databases',
        description: 'Embedding storage & retrieval',
        icon: '🔍',
      },
      {
        name: 'MLFlow',
        description: 'Model lifecycle orchestration',
        icon: '🔬',
      },
      {
        name: 'Computer Vision',
        description: 'Image processing pipelines',
        icon: '👁️',
      },
    ],
  },
  {
    category: 'Backend Languages',
    skills: [
      {
        name: 'Go (Golang)',
        description: 'Efficient systems programming',
        icon: '🐹',
      },
      {
        name: 'Python',
        description: 'AI/ML & automation scripting',
        icon: '🐍',
      },
      {
        name: 'Rust',
        description: 'Performance & safety-critical systems',
        icon: '⚡',
      },
      {
        name: 'TypeScript',
        description: 'Node.js & modern backend',
        icon: '📘',
      },
    ],
  },
];
