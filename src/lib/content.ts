import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GraduationCap,
  HandHelping,
  Landmark,
  Laptop,
  Lightbulb,
  Mail,
  MessageCircle,
  Network,
  Rocket,
  Route,
  School,
  ShieldCheck,
  ShoppingCart,
  UsersRound,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const brand = {
  name: "YAD God's Hand",
  shortName: "YAD",
  division: "YAD Tech & Digital Aid",
  tagline: "To Help. To Guide. To Build.",
  launchLine: "Sierra Leone's technology support and digital transformation partner.",
  heroImage: "/brand/yad-hero-wide.png",
  logoImage: "/brand/yad-logo-square.png",
  comingSoonImage: "/brand/yad-coming-soon.png",
};

// Replace these values before public launch.
export const contact = {
  whatsappNumber: "23230064022",
  whatsappDisplay: "+232 30 064 022",
  email: "hello@yadgodshand.com",
  defaultMessage:
    "Hello YAD, I would like help with a technology or digital transformation project.",
};

export const contactLinks = {
  whatsapp: `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.defaultMessage,
  )}`,
  email: `mailto:${contact.email}?subject=${encodeURIComponent(
    "Technology support inquiry",
  )}`,
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/vision", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

export const mandate = [
  {
    title: "Help",
    description:
      "Show up at the point of need with practical, reliable, and accessible technology solutions.",
    icon: HandHelping,
  },
  {
    title: "Guide",
    description:
      "Train, advise, and walk with clients until their technology decisions become clearer and stronger.",
    icon: Route,
  },
  {
    title: "Build",
    description:
      "Turn real-world problems into systems, tools, platforms, and people that create lasting value.",
    icon: Building2,
  },
] satisfies IconItem[];

export const values = [
  {
    title: "Purpose",
    description:
      "Every service, product, and partnership must serve a meaningful goal.",
  },
  {
    title: "Integrity",
    description:
      "YAD keeps its commitments, communicates clearly, and protects the trust placed in it.",
  },
  {
    title: "Empowerment",
    description: "Clients should leave more capable, not more dependent.",
  },
  {
    title: "Innovation",
    description: "Field problems become opportunities to design better systems.",
  },
  {
    title: "Excellence",
    description:
      "The standard is work that is careful, professional, and built to last.",
  },
];

export const audiences = [
  {
    title: "Businesses",
    description:
      "Small businesses, growing companies, retail operations, and service providers that need dependable technology.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Institutions",
    description:
      "Schools, NGOs, religious institutions, government offices, and community organizations.",
    icon: Landmark,
  },
  {
    title: "Startups",
    description:
      "Founders and innovators who need technical direction, MVP execution, automation, and cloud support.",
    icon: Rocket,
  },
  {
    title: "Individuals",
    description:
      "Professionals, students, freelancers, remote workers, and everyday users who need clear technical help.",
    icon: UsersRound,
  },
] satisfies IconItem[];

export const services = [
  {
    title: "IT Support & Technical Assistance",
    description:
      "Responsive help for devices, software, performance issues, setup, and ongoing support.",
    icon: Laptop,
    items: ["Troubleshooting", "Device setup", "Remote and on-site support"],
  },
  {
    title: "Website Solutions",
    description:
      "Professional websites, repairs, maintenance, optimization, hosting support, and security basics.",
    icon: Code2,
    items: ["Design and development", "Maintenance", "Website security"],
  },
  {
    title: "Software Development",
    description:
      "Custom web, mobile, portal, workflow, API, and modernization projects built around real operations.",
    icon: Workflow,
    items: ["Custom systems", "Web apps", "Integrations"],
  },
  {
    title: "Cloud Services",
    description:
      "Cloud migration, storage, backup, administration, collaboration platforms, and optimization.",
    icon: Cloud,
    items: ["Migration", "Backup", "Cloud administration"],
  },
  {
    title: "Networks & Infrastructure",
    description:
      "Network design, deployment, Wi-Fi planning, servers, remote access, and infrastructure assessments.",
    icon: Network,
    items: ["Wi-Fi planning", "Server setup", "Connectivity"],
  },
  {
    title: "Cybersecurity & Digital Protection",
    description:
      "Practical security assessments, policies, awareness training, access control, and risk planning.",
    icon: ShieldCheck,
    items: ["Assessments", "Risk planning", "Staff awareness"],
  },
  {
    title: "AI & Automation",
    description:
      "AI adoption, intelligent workflows, chatbots, virtual assistants, and productivity automation.",
    icon: Bot,
    items: ["AI strategy", "Chatbots", "Workflow automation"],
  },
  {
    title: "Business Systems",
    description:
      "CRM, ERP support, productivity tools, collaboration systems, digital workplace setup, and change support.",
    icon: Building2,
    items: ["CRM", "ERP support", "Productivity systems"],
  },
  {
    title: "Data & Information Management",
    description:
      "Database design, migration, dashboards, analytics, reporting, and digital records management.",
    icon: Database,
    items: ["Dashboards", "Reporting", "Data migration"],
  },
  {
    title: "Digital Communication Systems",
    description:
      "Professional email, messaging, video conferencing, communication infrastructure, and team tools.",
    icon: Mail,
    items: ["Professional email", "Messaging", "Video meetings"],
  },
  {
    title: "E-Commerce & Digital Commerce",
    description:
      "Online stores, payment integrations, inventory connections, digital products, and customer experience.",
    icon: ShoppingCart,
    items: ["Online stores", "Payments", "Inventory"],
  },
  {
    title: "Training & Digital Capacity Building",
    description:
      "Digital literacy, software onboarding, cybersecurity awareness, AI literacy, and practical workshops.",
    icon: GraduationCap,
    items: ["Workshops", "Digital literacy", "AI literacy"],
  },
  {
    title: "Technology Consulting & Advisory",
    description:
      "Assessments, roadmaps, procurement support, vendor evaluation, governance, and innovation strategy.",
    icon: Lightbulb,
    items: ["Roadmaps", "Vendor evaluation", "Advisory"],
  },
];

export const processSteps = [
  {
    title: "Assess",
    description:
      "Understand the real challenge, the environment, the workflow, and the goal before proposing a solution.",
    icon: CheckCircle2,
  },
  {
    title: "Deliver",
    description:
      "Implement practical, tested, and sustainable solutions with clear communication from start to finish.",
    icon: ArrowRight,
  },
  {
    title: "Teach",
    description:
      "Transfer knowledge through walkthroughs, documentation, and training so clients become more capable.",
    icon: School,
  },
  {
    title: "Support",
    description:
      "Remain available for maintenance, upgrades, questions, and continuous improvement as needs evolve.",
    icon: MessageCircle,
  },
] satisfies IconItem[];

export const tracks = [
  "Service",
  "Build",
  "Train & Develop",
  "Invest",
  "Consult & Govern",
  "License & IP",
  "Infrastructure",
];

export const differentiators = [
  "Knowledge is transferred so the client grows stronger.",
  "Every service engagement informs future tools, systems, and platforms.",
  "Pricing is professional and accessible, with social-sector sensitivity.",
  "YAD builds people and internal capability alongside client solutions.",
];

export const roadmap = [
  {
    phase: "Phase 1",
    title: "Service & Foundation",
    timing: "Now to Year 1",
    description:
      "Launch YAD Tech & Digital Aid, serve first clients, build internal standards, and establish trust in Sierra Leone.",
  },
  {
    phase: "Phase 2",
    title: "Build & Train",
    timing: "Year 2",
    description:
      "Develop first proprietary tools, launch YAD Academy, and turn field lessons into repeatable systems.",
  },
  {
    phase: "Phase 3",
    title: "Invest & Consult",
    timing: "Year 3",
    description:
      "Grow into strategic advisory, aligned venture participation, published frameworks, and broader market authority.",
  },
  {
    phase: "Phase 4",
    title: "Infrastructure & Ecosystem",
    timing: "Years 4 to 5",
    description:
      "Deploy YAD-built platforms, expand regionally, and formalize social impact through deeper community programs.",
  },
];

export const contactMethods = [
  {
    title: "WhatsApp",
    description: contact.whatsappDisplay,
    href: contactLinks.whatsapp,
    icon: MessageCircle,
  },
  {
    title: "Email",
    description: contact.email,
    href: contactLinks.email,
    icon: Mail,
  },
];

export const servicePrompts = [
  "I need technical support",
  "I need a website or web app",
  "I need cybersecurity guidance",
  "I need AI or automation",
  "I need training for my team",
  "I need a technology roadmap",
];

export const proofPoints = [
  { value: "13", label: "technology service areas" },
  { value: "4", label: "stage engagement model" },
  { value: "1", label: "founding division with a long-term mandate" },
];

export const flywheel = [
  "Service creates real-world insight.",
  "Insight informs better tools.",
  "Tools improve delivery quality.",
  "Better delivery deepens trust.",
  "Trust funds the next build.",
];

export const siteActions = {
  primary: {
    label: "Start on WhatsApp",
    href: contactLinks.whatsapp,
    icon: MessageCircle,
  },
  secondary: {
    label: "Explore services",
    href: "/services",
    icon: ArrowRight,
  },
  email: {
    label: "Email YAD",
    href: contactLinks.email,
    icon: Mail,
  },
};
