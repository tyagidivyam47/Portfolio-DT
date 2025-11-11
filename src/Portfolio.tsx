/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Server,
  Brain,
  Cloud,
  Database,
  MessageSquare,
  Rocket,
  Layers,
  Cpu,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

// -------------------------------
// Data (edit here to update site)
// -------------------------------
const resume = {
  name: "Divyam Tyagi",
  role: "Full Stack Developer",
  summary:
    "Results-driven .NET Developer with 1.5 years of experience building and optimizing scalable, high-performance web applications. Strong in .NET, Azure, and Elasticsearch; expanding into Generative AI with Semantic Kernel and Azure AI Foundry.",
  location: "Noida, UP, India",
  email: "tyagidivyam47@gmail.com",
  phone: "+91 9548114838",
  links: {
    linkedin: "https://www.linkedin.com/in/divyam-tyagi-a62651201/",
    github: "https://github.com/tyagidivyam47",
  },
  experience: [
    {
      company: "Codestore Solutions",
      title: "Fullstack Developer",
      period: "Feb 2024 – Present",
      location: "Noida, UP",
      highlights: [
        "Implemented an AI-powered document processing pipeline with Azure Document Intelligence to convert unstructured files into structured JSON.",
        "Built an intelligent chatbot using Semantic Kernel with custom plugins for natural language querying of logistics data.",
        "Cut a critical search query from 90s to <1s by architecting and integrating Elasticsearch.",
        "Designed scalable cloud architecture with Azure App Service, Functions, and Service Bus.",
        "Set up Azure DevOps CI/CD pipelines to automate deployments and improve reliability.",
        "Engineered background jobs with Hangfire + Azure WebJobs to process 100+ jobs/day (PDFs, data processing, email notifications).",
        "Promoted SOLID, N-Layer, and CQRS to improve maintainability and scalability.",
      ],
      tech: [
        ".NET 8",
        "C#",
        "ASP.NET MVC",
        "EF Core",
        "Azure",
        "Service Bus",
        "Functions",
        "Elasticsearch",
        "React",
        "Hangfire",
        "WebJobs",
        "CI/CD",
      ],
    },
    {
      company: "Zaperon",
      title: "Fullstack Developer Intern",
      period: "Aug 2023 – Feb 2024",
      location: "Noida, UP",
      highlights: [
        "Led frontend development for the user portal using React + Redux, creating a responsive dashboard and complex API integrations.",
        "Built a Blogs CMS with Firebase: admin roles, rich-text editor, and image upload to publish content to the company website.",
      ],
      tech: ["React", "Redux", "TypeScript", "Firebase", "REST APIs"],
    },
  ],
  education: [
    {
      school: "ABES Engineering College, Ghaziabad, UP",
      degree: "B.Tech. in Information Technology",
      period: "2020 – 2024",
    },
  ],
  skills: {
    Backend: ["C#", ".NET Core", "ASP.NET MVC", "Entity Framework", "REST APIs", "Microservices", "gRPC", "Hangfire", "SignalR"],
    "Cloud & DevOps": ["Azure App Service", "Azure Functions", "Service Bus", "Blob Storage", "CI/CD (Azure DevOps)"],
    Frontend: ["React", "Redux", "TypeScript", "Angular", "HTML5", "CSS3"],
    Databases: ["MS SQL", "Elasticsearch", "MongoDB", "Firebase", "Redis"],
    "AI / ML": ["Azure AI Foundry", "Semantic Kernel", "Generative AI"],
    Architecture: ["DDD", "CQRS", "N-Layer", "SOLID"],
  },
  certifications: [
    {
      name: "Microsoft Certified: Azure Developer Associate",
      url:
        "https://learn.microsoft.com/api/credentials/share/en-us/DivyamTyagi-4652/C6CCDD02110BAEDD?sharingId=A19350FBD68261FC",
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      url:
        "https://learn.microsoft.com/api/credentials/share/en-us/DivyamTyagi-4652/4871F88A49BC0E9E?sharingId=A19350FBD68261FC",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      url:
        "https://learn.microsoft.com/api/credentials/share/en-us/DivyamTyagi-4652/53DD4DA0C6C24714?sharingId=A19350FBD68261FC",
    },
  ],
};

// -------------
// UI primitives
// -------------
const Section = ({ id, title, icon, children }: any) => (
  <section id={id} className="scroll-mt-24 py-12 md:py-16">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-6xl px-4"
    >
      <div className="mb-6 flex items-center gap-3">
        {icon}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
    {children}
  </Badge>
);

// ---------
// NAV + HERO
// ---------
function Nav() {
  const items = [
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certs", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-tight">
          {resume.name}
        </a>
        <nav className="hidden gap-2 md:flex">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {i.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`mailto:${resume.email}`}>
            <Button size="sm" variant="default" className="rounded-full">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </a>
          <a href={resume.links.linkedin} target="_blank" rel="noreferrer">
            <Button size="icon" variant="outline" className="rounded-full">
              <Linkedin className="h-4 w-4" />
            </Button>
          </a>
          <a href={resume.links.github} target="_blank" rel="noreferrer">
            <Button size="icon" variant="outline" className="rounded-full">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24"
      >
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> {resume.location}
          </div>
          <h1 className="mb-3 text-3xl font-bold leading-tight md:text-5xl">
            {resume.name}
          </h1>
          <p className="mb-4 text-xl text-primary">{resume.role}</p>
          <p className="mb-6 max-w-xl text-muted-foreground">{resume.summary}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact">
              <Button size="lg" className="rounded-full">
                <MessageSquare className="mr-2 h-5 w-5" /> Let’s talk
              </Button>
            </a>
            <a href={resume.links.github} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="rounded-full">
                <Github className="mr-2 h-5 w-5" /> GitHub
              </Button>
            </a>
            <a href={resume.links.linkedin} target="_blank" rel="noreferrer">
              <Button size="lg" variant="ghost" className="rounded-full">
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
              </Button>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Pill>.NET 8</Pill>
            <Pill>Azure</Pill>
            <Pill>Elasticsearch</Pill>
            <Pill>Semantic Kernel</Pill>
            <Pill>React</Pill>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-3xl border bg-gradient-to-br from-muted to-background p-6 shadow-xl"
          >
            <div className="grid grid-cols-2 gap-4">
              <Stat icon={<Rocket className="h-5 w-5" />} label="Perf boost" value="90s → <1s" sub="Search query" />
              <Stat icon={<Cloud className="h-5 w-5" />} label="Azure-first" value="AppSvc/Funcs/SB" sub="Cloud-native" />
              <Stat icon={<Database className="h-5 w-5" />} label="Data jobs" value="100+/day" sub="Hangfire + WebJobs" />
              <Stat icon={<Brain className="h-5 w-5" />} label="GenAI" value="Prod Chatbot" sub="Semantic Kernel" />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <GridGlow />
    </section>
  );
}

function Stat({ icon, label, value, sub }: any) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {icon}
          <span>{label}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </CardContent>
    </Card>
  );
}

// -------------
// EXPERIENCE
// -------------
function Experience() {
  return (
    <Section id="experience" title="Experience" icon={<Server className="h-6 w-6" />}>
      <div className="space-y-6">
        {resume.experience.map((exp, idx) => (
          <Card key={idx} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex flex-wrap items-center justify-between gap-2">
                <span>
                  {exp.title} · <span className="text-primary">{exp.company}</span>
                </span>
                <span className="text-sm font-normal text-muted-foreground">{exp.period}</span>
              </CardTitle>
              <div className="mt-1 text-sm text-muted-foreground">{exp.location}</div>
            </CardHeader>
            <CardContent>
              <ul className="mb-4 list-disc space-y-2 pl-5 text-sm">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------
// SKILLS
// ---------
function Skills() {
  const groups = Object.entries(resume.skills);
  const icons: Record<string, any> = {
    Backend: <Cpu className="h-5 w-5" />,
    "Cloud & DevOps": <Cloud className="h-5 w-5" />,
    Frontend: <Layers className="h-5 w-5" />,
    Databases: <Database className="h-5 w-5" />,
    "AI / ML": <Brain className="h-5 w-5" />,
    Architecture: <Server className="h-5 w-5" />,
  };
  return (
    <Section id="skills" title="Skills" icon={<Brain className="h-6 w-6" />}>
      <Tabs defaultValue={groups[0]?.[0] ?? ""}>
        <TabsList className="flex w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          {groups.map(([name]) => (
            <TabsTrigger key={name} value={name} className="rounded-full">
              {name}
            </TabsTrigger>
          ))}
        </TabsList>
        {groups.map(([name, items]) => (
          <TabsContent key={name} value={name} className="mt-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {icons[name]}
                  <span>{name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {(items as string[]).map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

// -------------
// EDUCATION
// -------------
function Education() {
  return (
    <Section id="education" title="Education" icon={<Layers className="h-6 w-6" />}>
      <div className="grid gap-6 md:grid-cols-2">
        {resume.education.map((e, idx) => (
          <Card key={idx} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">{e.school}</CardTitle>
              <div className="text-sm text-muted-foreground">{e.degree}</div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">{e.period}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// -----------------
// CERTIFICATIONS
// -----------------
function Certifications() {
  return (
    <Section id="certs" title="Certifications" icon={<Badge className="h-6 w-6" /> as any}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resume.certifications.map((c, idx) => (
          <Card key={idx} className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-base">{c.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
                href={c.url}
                target="_blank"
                rel="noreferrer"
              >
                View credential <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

// ---------
// CONTACT
// ---------
function Contact() {
  return (
    <Section id="contact" title="Contact" icon={<MessageSquare className="h-6 w-6" />}>
      <Card className="rounded-2xl">
        <CardContent className="grid gap-6 p-6 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <a className="hover:underline" href={`mailto:${resume.email}`}>{resume.email}</a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <a className="hover:underline" href={`tel:${resume.phone}`}>{resume.phone}</a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span>{resume.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-5 w-5 text-muted-foreground" />
            <a className="hover:underline" href={resume.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn Profile
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Github className="h-5 w-5 text-muted-foreground" />
            <a className="hover:underline" href={resume.links.github} target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Download className="h-5 w-5 text-muted-foreground" />
            <a className="hover:underline" href="https://pdfhost.io/v/7p5yBRWNJw_Resume_1" target="_blank">
              Download Resume (PDF)
            </a>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}

// -------------
// DECORATION
// -------------
function GridGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/0.25) 0%, transparent 60%)",
      }} />
      <div className="[mask-image:radial-gradient(200px_200px_at_center,black,transparent)] absolute inset-0 bg-[linear-gradient(to_right,theme(colors.muted.DEFAULT)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.muted.DEFAULT)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
}

// -------------
// FOOTER
// -------------
function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {resume.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a className="hover:underline" href="#experience">Experience</a>
          <a className="hover:underline" href="#skills">Skills</a>
          <a className="hover:underline" href="#education">Education</a>
          <a className="hover:underline" href="#certs">Certifications</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// -------------
// PAGE
// -------------
export default function Portfolio() {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground">
      <Nav />
      <Hero />
      <main>
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
