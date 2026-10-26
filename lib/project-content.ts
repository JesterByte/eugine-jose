import type { ProjectArchitecture } from "@/components/ArchitectureDiagram";

export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

export interface ProjectCaseStudy {
  role: string;
  status: string;
  sections: CaseStudySection[];
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
  images: string[];
  architecture?: ProjectArchitecture;
  caseStudy: ProjectCaseStudy;
}
