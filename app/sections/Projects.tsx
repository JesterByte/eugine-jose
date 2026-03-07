"use client";

import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "Green Haven Memorial Park System",
    description: "Award-winning management and digital mapping system.",
    tech: ["CodeIgniter 4", "Leaflet JS", "Paymongo API", "MySQL"],
    links: {
      github: "https://github.com/JesterByte/ghmp", // You can list the main one or add logic for multiple
      live: null,
    },
    details: `Awarded "Thesis of the Year" and "Web Developer of the Year." 

    I architected a distributed system to modernize manual cemetery operations:
    • Admin Panel (Custom MVC): Engineered for intensive data management and fiscal reporting.
    • Customer Portal (CodeIgniter 4): Built for high-traffic access with Paymongo API integration. 
    • Digital Kiosk: A specialized interface for on-site visitor navigation.

    Technical Challenge: Implemented geospatial mapping using Leaflet JS and OpenStreetMap to overlay a digital grid onto a non-standard cemetery layout, allowing real-time plot status tracking and automated navigation for customers.`,
    images: [
      "/projects/ghmp-dashboard.png",
      "/projects/ghmp-landing-page.png",
      "/projects/ghmp-kiosk.png",
    ],
    featured: true,
  },
  {
    title: "Diocese of Malolos Digitized Records",
    description: "Document management and online request platform.",
    tech: ["PHP", "Bootstrap", "jQuery", "MySQL"],
    links: {
      github: null,
      live: "https://www.catholicrecords.ph/",
    },
    details: `Developed for the Diocese of Malolos to bridge the gap between legacy paper records and modern digital access. 

    I transformed a 100% manual, physical request process into a streamlined 24/7 digital portal. This system handles sensitive document requests and manages the logistics of church record deliveries across the diocese.

    Impact: Significantly reduced manual paperwork and processing time for church staff while providing a transparent, user-friendly interface for the public to track their document requests.`,
    images: ["/projects/church-records.png"],
    featured: false,
  },
  {
    title: "Verde Heights HOA System",
    description: "Subdivision management for billing and resident records.",
    tech: ["PHP", "Bootstrap", "jQuery", "MySQL"],
    links: {
      github: "https://github.com/JesterByte/vh-hoa",
      live: null,
    },
    details: `A comprehensive management suite built to digitize Homeowners Association operations. 

    I focused on automating the core "friction points" of subdivision management: automated monthly billing, resident record auditing, and automated income/expense reporting.

    Technical Focus: Designed a robust MySQL database schema to ensure data integrity across complex financial transactions, providing the HOA board with accurate, real-time fiscal insights that were previously managed via scattered spreadsheets.`,
    images: ["/projects/hoa-dashboard.png"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 max-w-6xl mx-auto px-6 scroll-mt-20"
    >
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">
          Featured Projects
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
