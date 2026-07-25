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
  {
    id: "sop-executive-calendar",
    title: "SOP: Executive Calendar & Scheduling Management",
    category: "Documentation & Content",
    summary:
      "A complete, 7-section Standard Operating Procedure governing how an executive calendar gets managed end to end — written so any assistant could pick it up and run it without guesswork.",
    impact: [
      "Covers daily calendar audits, incoming request intake, and conflict resolution rules",
      "Defines meeting preparation and post-meeting follow-up as explicit, repeatable steps",
      "Sets clear performance targets: under 5% scheduling conflicts, 95%+ same-day resolution, 100% follow-up completion",
      "Version history (v1.0–v1.2) shows the SOP has been actively maintained since 2023, not a one-off document",
    ],
    tools: ["SOP Documentation", "Process Design", "Executive Support"],
    year: "2023–2026",
    href: "/documents/sop-executive-calendar-management.docx",
  },
  {
    id: "crm-tools-research-brief",
    title: "Research Brief: AI-Powered CRM Tools",
    category: "Documentation & Content",
    summary:
      "A structured, five-minute strategic brief comparing HubSpot, Salesforce, Zoho CRM, and Pipedrive for a distributed 10–25 person remote sales team — built to move leadership from open question to decision.",
    impact: [
      "Compares four platforms head-to-head on AI features, pricing, and best-fit team size",
      "Recommends HubSpot for immediate adoption, with Salesforce flagged as the scale-up path",
      "Closes with 5 concrete next steps — trial plan, migration mapping, and a named CRM owner — not just findings",
    ],
    tools: ["Research", "Reporting", "HubSpot", "Salesforce", "Zoho CRM", "Pipedrive"],
    year: "2026",
    href: "/documents/research-brief-crm-tools.docx",
  },
  {
    id: "executive-communication-templates",
    title: "Executive Communication Templates",
    category: "Documentation & Content",
    summary:
      "Five ready-to-send email templates — refined over 5+ years of executive support — covering the most common communication moments, from the first meeting request through escalation.",
    impact: [
      "Covers meeting requests, agenda-backed confirmations, rescheduling, follow-up, and escalation",
      "Formatted for immediate use, not just a style guide someone still has to translate",
      "Keeps executive correspondence consistent across an entire team, not just one person",
    ],
    tools: ["Executive Communications", "Documentation", "Templates"],
    year: "2026",
    href: "/documents/executive-communication-templates.docx",
  },
  {
    id: "zapier-automation-case-study",
    title: "Zapier Automation Case Study",
    category: "Operations & Automation",
    summary:
      "A step-by-step technical walkthrough of all five automation workflows built at Grandida LLC over a 3-week, 14-hour build — each documented with its trigger, its actions, and its measured result.",
    impact: [
      "5 production workflows: CRM logging, follow-up sequencing, pipeline alerts, calendar-link sync, and audit reminders",
      "100% consistent post-meeting CRM logging and zero link-related meeting disruptions after deployment",
      "CRM data completeness rose from ~75% to 96% within 8 weeks; all 5 workflows still active 12+ months later",
    ],
    tools: ["Zapier", "Workflow Automation", "Technical Documentation"],
    year: "Jun–Aug 2023",
    href: "/documents/zapier-automation-case-study.docx",
  },
  {
    id: "project-documentation-writeups",
    title: "Project Documentation: Grandida & GloryZone",
    category: "Documentation & Content",
    summary:
      "Two full project write-ups — the Grandida LLC Workflow Automation Initiative and the GloryZone Ministry Administrative Systems Overhaul — each covering the problem, the actions taken, the results, and what was learned.",
    impact: [
      "Grandida: self-initiated audit uncovered 6–8 lost hours/week, leading to 40% less admin workload and 25% better CRM accuracy",
      "GloryZone: built the systems behind a 98% follow-through rate and a 35% drop in calendar conflicts for 500+ members",
      "Each write-up includes a problem statement, actions taken, results, and key learnings — not just outcomes",
    ],
    tools: ["Documentation", "Process Design", "Case Study Writing"],
    year: "2023–2026",
    href: "/documents/project-documentation.docx",
  },
];
