import data from '../../data.json';

// Images
import heroImg from "../assets/Hero.png"
import profileImg from '../assets/harsh.jpg'

// Certificates
import oci from '../assets/oci.jpeg'
import ai from '../assets/ai.jpeg'
import reactUdemy from '../assets/reactUdemy.jpg'
import promt from '../assets/prompt.jpg'

// Projects
import cafeImg from "../assets/demo-english.png"
import yt from "../assets/DEMO screenshot.PNG"
import cur from "../assets/forEx.jpg"

// Tech Stack
import CSS from "../assets/css.png"
import reactjs from "../assets/react.png"
import spring from "../assets/springboot.png"
import tailwind from "../assets/tailwind.png"
import mysql from "../assets/mysql.png"
import postgresql from "../assets/postgresql.png"
import microservices from "../assets/microservices.png"
import html from "../assets/html.png"

const imageMap = {
  projects: {
    1: cafeImg,
    2: cur,
    3: yt
  },
  certificates: {
    1: oci,
    2: ai,
    3: reactUdemy,
    4: promt
  },
  techStack: {
    "ReactJs": reactjs,
    "Spring Boot": spring,
    "MySQL": mysql,
    "PostgreSQL": postgresql,
    "Tailwind CSS": tailwind,
    "Microservices": microservices,
    "HTML": html,
    "CSS": CSS
  }
};

const getItems = (title) => data.extras?.find(e => e.section_title === title)?.items || [];

const heroItems = getItems("Hero");
const aboutItems = getItems("About");
const navItems = getItems("Navigation");
const certItems = getItems("Certifications");

const contactItems = getItems("Contact");

export const portfolioData = {
  // AI_EDITABLE_START
  ...data,
  // AI_EDITABLE_END

  profile: {
    name: data.personal.name,
    firstName: data.personal.first_name,
    lastName: data.personal.last_name,
    initials: data.personal.initials,
    role: data.personal.role,
    avatar: profileImg,
    linkedin: data.personal.linkedin,
    linkedinUrl: data.personal.linkedin_url,
    github: data.personal.github,
    githubUrl: data.personal.github_url,
    email: data.personal.email
  },
  hero: {
    welcomeText: heroItems.find(i => i.label === "Welcome Text")?.description || "",
    welcomeHighlight: heroItems.find(i => i.label === "Welcome Highlight")?.description || "",
    tagline: heroItems.find(i => i.label === "Tagline")?.description || "",
    descriptionPrefix: "Hi! I'm",
    descriptionSuffix: "based in India.",
    mainImage: heroImg
  },
  about: {
    title: "About",
    titleHighlight: "Me",
    description: aboutItems.find(i => i.label === "Description")?.description || ""
  },
  nav: navItems.map(item => ({
    label: item.label,
    href: item.description
  })),
  techStack: (data.skills || []).flatMap((group, gIdx) => 
    group.items.map((name, iIdx) => ({
      id: `${gIdx}-${iIdx}`,
      name: name,
      image: imageMap.techStack[name]
    }))
  ),
  projects: (data.projects || []).map((p, i) => ({
    id: i + 1,
    name: p.name,
    description: p.description,
    techStack: p.tech_stack,
    github: p.github_url,
    image: imageMap.projects[i + 1]
  })),
  certificates: certItems.map((c, i) => ({
    id: i + 1,
    cname: c.label,
    issuedby: c.description,
    date: c.date,
    Verify: c.url,
    image: imageMap.certificates[i + 1]
  })),
  contact: {
    title: "Get In Touch",
    subtitle: contactItems.find(i => i.label === "Subtitle")?.description || "",
    formTitle: "Send a Message",
    formDescription: contactItems.find(i => i.label === "Form Description")?.description || "",
    connectText: "Let's connect"
  },
  projectSection: {
    title: "My Creative Portfolio",
    description: "A showcase of my recent work, certifications and tech stack."
  },
  projectTabs: {
    projects: "Projects",
    certificates: "Certificates",
    techStack: "Tech"
  },
  logo: {
    text: "Portfolio"
  }
};
