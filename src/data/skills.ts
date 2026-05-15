export interface Skill {
  name: string;
  description: string;
  icon: string; // Lucide icon name
  span?: 'col-span-1' | 'col-span-2' | 'lg:col-span-2';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: 'DevOps & Infrastructure',
    skills: [
      {
        name: 'Kubernetes',
        description: 'OKD/K8s cluster orchestration, resource optimization, OADP backup solutions',
        icon: 'Boxes',
        span: 'lg:col-span-2',
      },
      {
        name: 'Docker',
        description: 'Container packaging, registry management, image optimization',
        icon: 'Container',
      },
      {
        name: 'Terraform',
        description: 'Infrastructure as Code, multi-cloud provisioning',
        icon: 'Code2',
      },
      {
        name: 'Helm',
        description: 'K8s package management and templating',
        icon: 'Package',
      },
      {
        name: 'OADP',
        description: 'Backup, disaster recovery, data protection',
        icon: 'HardDrive',
      },
    ],
  },
  {
    category: 'Platform Engineering',
    skills: [
      {
        name: 'CI/CD Pipeline',
        description: 'GitHub Actions, GitLab CI, deployment automation, release orchestration',
        icon: 'Zap',
        span: 'lg:col-span-2',
      },
      {
        name: 'Prometheus',
        description: 'Metrics collection, monitoring, alerting infrastructure',
        icon: 'BarChart3',
      },
      {
        name: 'ArgoCD',
        description: 'GitOps-driven deployment, continuous synchronization',
        icon: 'GitBranch',
      },
      {
        name: 'Resource Ops',
        description: 'Pod optimization, auto-scaling, cost management',
        icon: 'Zap',
      },
    ],
  },
  {
    category: 'AI & ML Systems',
    skills: [
      {
        name: 'LLM Infrastructure',
        description: 'Model deployment, inference optimization, prompt engineering, vector embeddings',
        icon: 'Brain',
        span: 'lg:col-span-2',
      },
      {
        name: 'PyTorch',
        description: 'Deep learning, neural networks, training pipelines',
        icon: 'Flame',
      },
      {
        name: 'Vector DBs',
        description: 'Embedding storage, semantic search, RAG systems',
        icon: 'Database',
      },
      {
        name: 'MLFlow',
        description: 'Model lifecycle, experiment tracking, production deployment',
        icon: 'Activity',
      },
      {
        name: 'Computer Vision',
        description: 'Image processing, object detection, pipeline optimization',
        icon: 'Eye',
      },
    ],
  },
  {
    category: 'Backend Languages',
    skills: [
      {
        name: 'Go/Golang',
        description: 'High-performance systems, CLI tools, microservices',
        icon: 'Code',
      },
      {
        name: 'Python',
        description: 'AI/ML development, automation, data processing',
        icon: 'Code',
      },
      {
        name: 'Rust',
        description: 'Performance-critical systems, safety-first design',
        icon: 'Zap',
      },
      {
        name: 'TypeScript',
        description: 'Node.js, fullstack development, type-safe backends',
        icon: 'Code',
      },
    ],
  },
];
