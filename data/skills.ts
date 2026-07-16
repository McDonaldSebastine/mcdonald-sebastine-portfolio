export interface SkillGroup {
  category: string;
  description: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Executive Support",
    description:
      "Running the operational backbone behind a busy executive so nothing slips.",
    items: [
      "Executive Calendar Management",
      "Inbox Management",
      "Executive Communications",
      "Meeting Coordination",
      "Travel Logistics",
      "Stakeholder Management",
      "Confidential Information Management",
      "Relationship Management",
    ],
  },
  {
    category: "Business Operations",
    description:
      "Turning ad hoc requests into repeatable, documented processes.",
    items: [
      "CRM Administration",
      "Workflow Automation",
      "Project Coordination",
      "Process Improvement",
      "SOP Documentation",
      "Reporting",
      "Research",
      "Cross-functional Collaboration",
      "Administrative Operations",
    ],
  },
  {
    category: "Platforms & Tools",
    description: "Daily tools for CRM, support, project management, and collaboration.",
    items: [
      "Google Workspace",
      "Microsoft 365",
      "HubSpot",
      "Salesforce",
      "Zendesk",
      "Freshdesk",
      "Airtable",
      "ClickUp",
      "Notion",
      "Trello",
      "Asana",
      "Slack",
      "Zoom",
      "Zapier",
      "Canva",
    ],
  },
  {
    category: "AI Productivity",
    description:
      "Applying AI tools day-to-day to move faster on research, drafting, and decision support.",
    items: ["ChatGPT", "Claude AI", "Microsoft Copilot", "Perplexity AI"],
  },
];
