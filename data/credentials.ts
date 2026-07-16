export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    id: "pmp",
    name: "Project Management Professional (PMP)",
    issuer: "British Project Management Academy",
    year: "2018",
    description:
      "Standard for leading and directing projects, from scope and scheduling to risk and stakeholder management.",
  },
  {
    id: "alx-va",
    name: "Virtual Assistant Certification",
    issuer: "ALX Africa",
    year: "2021",
    description:
      "Project-based training in remote executive support, client communication, and digital tools for distributed teams.",
  },
  {
    id: "northwestern",
    name: "High-Performance Collaboration: Leadership, Teamwork & Negotiation",
    issuer: "Northwestern University",
    year: "2023",
    description:
      "Leadership and negotiation strategies for coordinating and getting the best out of cross-functional teams.",
  },
];

export interface Education {
  id: string;
  school: string;
  degree: string;
  location: string;
  year: string;
}

export const education: Education[] = [
  {
    id: "jos",
    school: "Federal University of Jos",
    degree: "B.Sc. Geology & Mining Engineering",
    location: "Jos, Nigeria",
    year: "2017",
  },
];
