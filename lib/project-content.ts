import type { ProjectArchitecture } from "@/components/ArchitectureDiagram";

export interface OfflineSyncDesign {
  localStore: string;
  synchronization: string;
  conflicts: string;
  retries: string;
  queue: string;
  updateDelivery: string;
}

export interface ProjectModernization {
  objectives: string[];
  legacyChallenges: string[];
  experienceImprovements: string[];
  responsivenessNote: string;
  architectureLayers: {
    name: string;
    responsibility: string;
  }[];
  architectureBenefits: string[];
  previousUpdateWorkflow: string[];
  modernizedUpdateWorkflow: string[];
  updateSafeguards: string[];
  staffFeedback: string[];
}

export interface ProjectCaseStudy {
  role: string;
  status: string;
  problem: string;
  approach: string[];
  tradeoff: string;
  result: string;
  proof: string;
  metrics?: { label: string; value: string }[];
  offlineSync?: OfflineSyncDesign;
  modernization?: ProjectModernization;
}

export interface ProjectMediaItem {
  src?: string;
  alt: string;
  caption: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  links: {
    github?: string | null;
    live?: string | null;
  };
  repositories?: {
    label: string;
    href: string;
  }[];
  media: ProjectMediaItem[];
  architecture?: ProjectArchitecture;
  caseStudy: ProjectCaseStudy;
}
