export type ProjectCategory =
  | "Operations & Automation"
  | "Customer Success"
  | "Leadership & Ministry Operations"
  | "Documentation & Content";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  impact: string[];
  tools: string[];
  year: string;
  href?: string;
  repo?: string;
}

export const projectCategories: ProjectCategory[] = [
  "Operations & Automation",
  "Customer Success",
  "Leadership & Ministry Operations",
  "Documentation & Content",
];

export const projects: Project[] = [
  {
    id: "grant-proposal-automation",
    title: "Automated Grant Proposal Pipeline",
    category: "Operations & Automation",
    summary:
      "Built a Node.js document-generation pipeline that turns structured funding data into a fully formatted, submission-ready Word proposal — used to produce a 37-page institutional grant application end to end.",
    impact: [
      "Cut proposal formatting time from days to hours",
      "Produced a consistent, reusable template for future funding applications",
      "Delivered a submission-ready document with zero manual formatting passes",
    ],
    tools: ["Node.js", "docx (npm)", "Process Design"],
    year: "2025",
  },
  {
    id: "crm-workflow-automation",
    title: "Executive CRM & Scheduling Automation",
    category: "Operations & Automation",
    summary:
      "Redesigned the intake-to-booking workflow for a remote executive, connecting scheduling, CRM entry, and follow-up communication into a single automated flow.",
    impact: [
      "Reduced scheduling conflicts by 35%",
      "Cut repetitive administrative work by 40% via Zapier automation",
      "Kept 500+ monthly CRM records accurate, lifting data integrity by 25%",
    ],
    tools: ["Zapier", "CRM", "Google Workspace", "Slack"],
    year: "2022–2025",
  },
  {
    id: "lead-management-reporting",
    title: "Lead Management & Reporting System",
    category: "Customer Success",
    summary:
      "Owned CRM lead management and reporting for a growing customer base — cleaning up records, tightening follow-up cadence, and surfacing the data marketing needed to act on.",
    impact: [
      "Contributed to a 15% growth in sales opportunities through better lead follow-up",
      "Kept 500+ customer records accurate monthly for reliable reporting",
      "Produced research and reports that directly informed marketing decisions",
    ],
    tools: ["CRM", "Zendesk", "Reporting"],
    year: "2020–2022",
  },
  {
    id: "customer-support-onboarding",
    title: "High-Volume Support & Retention Program",
    category: "Customer Success",
    summary:
      "Owned the daily support queue across email and chat, standardizing responses and follow-up to keep satisfaction high and turn support interactions into retained customers.",
    impact: [
      "Resolved 95% of inquiries within SLA across email and chat",
      "Sustained a 95% customer satisfaction rating",
      "Structured proactive follow-up that contributed to a 20% increase in customer retention",
    ],
    tools: ["Zendesk", "CRM", "Support Playbooks"],
    year: "2022–2025",
  },
  {
    id: "ministry-operations-system",
    title: "Ministry Records & Scheduling System",
    category: "Leadership & Ministry Operations",
    summary:
      "As Executive Assistant to the Senior Pastor, built and maintain the administrative systems behind a 500+ member organization — scheduling, records, and event coordination.",
    impact: [
      "Coordinate 50+ executive appointments monthly with a 35% drop in conflicts",
      "Maintain confidential records for 500+ congregation members",
      "Reduced manual administrative workload by 40% through refined systems",
    ],
    tools: ["Documentation", "Scheduling", "Stakeholder Communication"],
    year: "2022–Present",
  },
  {
    id: "org-communications-system",
    title: "Organizational Communications System",
    category: "Documentation & Content",
    summary:
      "Set up a repeatable system for leadership correspondence, event messaging, and internal documentation for a multi-thousand-member organization — from templates to approval workflow.",
    impact: [
      "Standardized formal correspondence and event communications",
      "Cut drafting time for recurring communications significantly",
      "Created a documentation library still in active use",
    ],
    tools: ["Microsoft 365", "Documentation", "Editorial Workflow"],
    year: "2023",
  },
  {
    id: "resume-generation-system",
    title: "ATS-Optimized Resume Generation System",
    category: "Documentation & Content",
    summary:
      "Built a code-based system for generating role-tailored, ATS-safe resumes from a single structured data source, enabling fast, consistent tailoring across dozens of applications.",
    impact: [
      "Generated multiple role-specific resume variants from one data model",
      "Kept formatting fully ATS-compliant across every version",
      "Reduced per-application tailoring time from hours to minutes",
    ],
    tools: ["Node.js", "docx (npm)", "ATS Formatting"],
    year: "2025",
  },
];
