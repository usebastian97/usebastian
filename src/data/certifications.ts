export type CertStatus = 'In Progress' | 'Planned' | 'Completed' | 'Next';
export type CertCategory = 'Foundation' | 'Specialization' | 'Expert';

export interface Certification {
  title: string;
  provider: string;
  badge: string;
  status: CertStatus;
  date: string;
  category: CertCategory;
  description: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    provider: 'Microsoft',
    badge: 'AZ-900',
    status: 'Completed',
    date: '2025',
    category: 'Foundation',
    description: 'Cloud concepts, Azure services, security, privacy, compliance, and pricing.',
    credentialUrl:
      'https://learn.microsoft.com/en-us/users/usebastian12/credentials/db80ce6a2b4ad875?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    title: 'Intro to Cloud Computing Course',
    provider: 'Codecademy',
    badge: 'Course',
    status: 'Completed',
    date: '2025',
    category: 'Foundation',
    description: 'Introduction to cloud computing concepts and services.',
    credentialUrl:
      'https://www.codecademy.com/profiles/usebastian12/certificates/1353857e7ad5c1d0d578073e0d5e31e4',
  },
  {
    title: 'Basics of Prompt Engineering',
    provider: 'Codecademy',
    badge: 'Course',
    status: 'Completed',
    date: '2025',
    category: 'Foundation',
    description: 'Fundamentals of prompt engineering for AI models and applications.',
    credentialUrl:
      'https://www.codecademy.com/profiles/usebastian12/certificates/154a14d92f104c7bad51a5c6441d0056',
  },
  {
    title: 'Excel for Data Analytics',
    provider: 'Analyst Builder',
    badge: 'Course',
    status: 'Completed',
    date: '2025',
    category: 'Foundation',
    description: 'Using Excel for data analysis, visualization, and insights.',
  },
  {
    title: 'MySQL for Data Analytics',
    provider: 'Analyst Builder',
    badge: 'Course',
    status: 'Completed',
    date: '2025',
    category: 'Foundation',
    description: 'Using MySQL for data querying, management, and analysis.',
  },
  {
    title: 'Microsoft Certified: Security Fundamentals',
    provider: 'Microsoft',
    badge: 'SC-900',
    status: 'In Progress',
    date: 'January 2026',
    category: 'Foundation',
    description: 'Security, compliance, and identity concepts and Microsoft security solutions.',
  },
  {
    title: 'Microsoft Certified: Identity and Access Administrator Associate',
    provider: 'Microsoft',
    badge: 'SC-300',
    status: 'Next',
    date: 'February 2026',
    category: 'Foundation',
    description:
      'Demonstrate the features of Microsoft Entra ID to modernize identity solutions, implement hybrid solutions, and implement identity governance.',
  },
  {
    title: 'Microsoft Certified: Information Security Administrator Associate',
    provider: 'Microsoft',
    badge: 'SC-400',
    status: 'Planned',
    date: 'March 2026',
    category: 'Foundation',
    description:
      'As an Information Security Administrator, you plan and implement information security of sensitive data by using Microsoft Purview and related services.',
  },
  {
    title: 'Microsoft Certified: AI Fundamentals',
    provider: 'Microsoft',
    badge: 'AI-900',
    status: 'Planned',
    date: '2025',
    category: 'Foundation',
    description:
      'AI workloads, machine learning, computer vision, and natural language processing on Azure.',
  },
  {
    title: 'Microsoft 365 Certified: Fundamentals',
    provider: 'Microsoft',
    badge: 'MS-900',
    status: 'Planned',
    date: '2025',
    category: 'Foundation',
    description: 'Core Microsoft 365 concepts, services, security, compliance, and support.',
  },
  {
    title: 'Microsoft Power Platform Fundamentals',
    provider: 'Microsoft',
    badge: 'PL-900',
    status: 'Planned',
    date: '2025',
    category: 'Foundation',
    description: 'Business value and core capabilities of Power Platform.',
  },
  {
    title: 'Microsoft Certified: Copilot & Agent Administration Fundamentals',
    provider: 'Microsoft',
    badge: 'AB-900',
    status: 'Planned',
    date: '2025',
    category: 'Foundation',
    description: 'Copilot and agent administration foundations, governance, and readiness.',
  },
  {
    title: 'Microsoft Certified: Azure AI Engineer',
    provider: 'Microsoft',
    badge: 'AI-102',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description:
      'Design and implement Azure AI solutions using cognitive services and machine learning.',
  },
  {
    title: 'Microsoft Certified: Power Platform Functional Consultant Associate',
    provider: 'Microsoft',
    badge: 'PL-200',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description: 'Design solutions and implement Power Apps, Power Automate, and Power BI.',
  },
  {
    title: 'Microsoft Certified: Power Platform Developer Associate',
    provider: 'Microsoft',
    badge: 'PL-400',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description:
      'Build and extend Power Platform solutions, including custom connectors and Dataverse.',
  },
  {
    title: 'Microsoft Certified: Power Automate RPA Developer Associate',
    provider: 'Microsoft',
    badge: 'PL-500',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description: 'Implement automation solutions with Power Automate and RPA.',
  },
  {
    title: 'Microsoft Certified: Power Platform Solution Architect Expert',
    provider: 'Microsoft',
    badge: 'PL-600',
    status: 'Planned',
    date: '2026',
    category: 'Expert',
    description: 'Lead solution design and architecture for Power Platform implementations.',
  },
  {
    title: 'Microsoft 365 Certified: Administrator Expert',
    provider: 'Microsoft',
    badge: 'MS-102',
    status: 'Planned',
    date: '2026',
    category: 'Expert',
    description: 'Design and implement Microsoft 365 services, security, and governance.',
  },
  {
    title: 'Microsoft Certified: AI Transformation Leader',
    provider: 'Microsoft',
    badge: 'AB-731',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description: 'Lead AI adoption strategy, change management, and business transformation.',
  },
  {
    title: 'Microsoft Certified: AI Business Professional',
    provider: 'Microsoft',
    badge: 'AB-730',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description: 'Apply AI capabilities to business processes and decision-making.',
  },
  {
    title: 'Microsoft Certified: Azure Security Engineer',
    provider: 'Microsoft',
    badge: 'AZ-500',
    status: 'Planned',
    date: '2026',
    category: 'Specialization',
    description:
      'Implement security controls, maintain security posture, and manage identity and access.',
  },
];

export const statusColors: Record<CertStatus, string> = {
  'In Progress': 'bg-blue-100 text-blue-800',
  Planned: 'bg-gray-100 text-gray-800',
  Completed: 'bg-green-100 text-green-800',
  Next: 'bg-yellow-100 text-yellow-800',
};

export const categoryColors: Record<CertCategory, string> = {
  Foundation: 'border-gray-200',
  Specialization: 'border-gray-200',
  Expert: 'border-gray-200',
};
