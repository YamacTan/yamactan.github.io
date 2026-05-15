import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'k8s-resource-optimizer',
    title: 'K8s Resource Optimizer',
    description:
      'An automated Kubernetes tool that monitors Prometheus metrics to dynamically adjust pod requests and limits, reducing resource slack and optimizing cluster efficiency.',
    technologies: ['Go', 'Kubernetes API', 'Prometheus', 'React', 'Tailwind CSS'],
    github: 'https://github.com/yamactan/k8s-resource-optimizer',
    liveDemo: undefined,
    featured: true,
  },
  {
    id: 'yamco-cve-feed',
    title: 'Yamço CVE Feed',
    description:
      'A minimalist, security-focused vulnerability monitoring dashboard tracking specific tech stack CVEs with automated alerts and real-time updates.',
    technologies: ['Python', 'FastAPI', 'React', 'Tailwind CSS'],
    github: 'https://github.com/yamactan/yamco-cve-feed',
    liveDemo: undefined,
    featured: true,
  },
  {
    id: 'chaos-platform',
    title: 'Chaos Platform Engineering Tool',
    description:
      'A cloud-native chaos engineering platform designed for OpenShift/OKD clusters to simulate infrastructure failures and test resiliency.',
    technologies: ['Go', 'Kubernetes/OKD', 'Docker', 'Prometheus'],
    github: 'https://github.com/yamactan/chaos-platform',
    liveDemo: undefined,
    featured: true,
  },
];
