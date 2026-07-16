export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  tools: string[];
  isVolunteer?: boolean;
}

export const experience: Experience[] = [
  {
    id: "grandida",
    company: "Grandida LLC",
    role: "Executive Assistant & Operations Coordinator",
    location: "Remote — Miramar, Florida, USA",
    start: "Aug 2022",
    end: "Nov 2025",
    summary:
      "Provided high-level executive and operational support to a fast-paced remote organization, coordinating executive priorities, administrative operations, customer relationships, and workflow optimization.",
    achievements: [
      "Directed executive calendar operations involving 200+ meetings and appointments monthly, reducing scheduling conflicts by 35%",
      "Maintained 500+ CRM records monthly, improving data integrity by 25% and supporting reliable business reporting",
      "Engineered workflow automations using Zapier that cut repetitive administrative work by 40%",
      "Resolved 95% of customer inquiries within SLA across email and chat while sustaining a 95% satisfaction rating",
      "Cultivated client relationships through proactive communication and structured follow-up, contributing to a 20% increase in customer retention",
    ],
    tools: ["CRM", "Google Workspace", "Zapier", "Slack", "Zoom"],
  },
  {
    id: "netmark",
    company: "Netmark Systems and Technologies",
    role: "Administrative & Operations Assistant",
    location: "Remote",
    start: "Feb 2020",
    end: "May 2022",
    summary:
      "Supported business operations by coordinating customer communications, CRM administration, administrative processes, reporting, and marketing support activities.",
    achievements: [
      "Handled 200+ customer interactions weekly across phone, email, and live chat while maintaining a 95% satisfaction rating",
      "Coordinated CRM updates and lead management activities that contributed to a 15% growth in sales opportunities",
      "Organized and maintained 500+ customer records monthly, improving reporting accuracy and operational efficiency",
      "Scheduled digital marketing campaigns across multiple platforms, increasing audience engagement by 20%",
      "Produced business research and operational reports that informed marketing decisions and process improvements",
    ],
    tools: ["CRM", "Zendesk", "Lead Management", "Reporting"],
  },
  {
    id: "green-agro",
    company: "Green Agro Integrated Co. Ltd.",
    role: "Executive Administrative Assistant",
    location: "Abuja, Nigeria",
    start: "Oct 2018",
    end: "Nov 2019",
    summary:
      "Provided executive administrative support to senior leadership, coordinating communications, documentation, reporting, travel logistics, and day-to-day operational activities.",
    achievements: [
      "Oversaw executive correspondence and administrative communications, improving response times by 40%",
      "Coordinated executive meetings, travel arrangements, and scheduling while reducing booking errors by 20%",
      "Prepared financial reports and reconciliations with 99% data accuracy",
      "Maintained confidential business documentation and CRM records, improving information accuracy by 30%",
    ],
    tools: ["Microsoft 365", "Documentation", "Travel Coordination"],
  },
];

export const leadership: Experience[] = [
  {
    id: "gloryzone",
    company: "GloryZone International Ministry",
    role: "Executive Assistant to the Senior Pastor",
    location: "Abuja, Nigeria",
    start: "Jan 2022",
    end: "Present",
    summary:
      "Serve as the primary administrative partner to the Senior Pastor, managing executive schedules, leadership engagements, communications, and ministry operations.",
    achievements: [
      "Coordinate 50+ executive appointments monthly, reducing scheduling conflicts by 35%",
      "Maintain confidential correspondence and ministry records for 500+ congregation members with professionalism and discretion",
      "Coordinate leadership meetings, ministry events, and executive follow-ups, ensuring seamless execution of strategic priorities",
      "Implement and continuously refine administrative systems that reduce manual workload by 40%",
    ],
    tools: ["Documentation", "Stakeholder Communication", "Scheduling"],
    isVolunteer: true,
  },
];
