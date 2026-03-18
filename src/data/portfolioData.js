import data from './data.json';

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

export const portfolioData = {
  // AI_EDITABLE_START
  ...data,
  // AI_EDITABLE_END

  profile: {
    ...data.profile,
    avatar: profileImg
  },
  hero: {
    ...data.hero,
    mainImage: heroImg
  },
  techStack: data.techStack.map(tech => ({
    ...tech,
    image: imageMap.techStack[tech.name]
  })),
  projects: data.projects.map(project => ({
    ...project,
    image: imageMap.projects[project.id]
  })),
  certificates: data.certificates.map(cert => ({
    ...cert,
    image: imageMap.certificates[cert.id]
  }))
};
