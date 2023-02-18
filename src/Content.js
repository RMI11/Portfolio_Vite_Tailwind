// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import reactjs from "./assets/images/Skills/react.png";
import saas from "./assets/images/Skills/saas.png";
import sc from "./assets/images/Skills/sc.svg";
import tailwind from "./assets/images/Skills/tailwind.png";
import vite from "./assets/images/Skills/vite.png";
import git from "./assets/images/Skills/git.svg";
import node from "./assets/images/Skills/node.png";
import express from "./assets/images/Skills/express.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import person_project from "./assets/images/projects/person.png";

import bank_reactapp from "./assets/images/projects/bank_reactapp.png";
import weather_app from "./assets/images/projects/weather_app.png";
import video_tube from "./assets/images/projects/video_tube.png";
import tesla_clone from "./assets/images/projects/tesla_clone.png";
import netflix_clone from "./assets/images/projects/netflix_clone.png";
import restate from "./assets/images/projects/restate.png"
import developedia from "./assets/images/projects/developedia.png"

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Front-End Web Developer",
    firstName: "RAJKO",
    LastName: "RADOJKOVIC",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "",
        logo: html,
      },
      {
        name: "JavaScript",
        para: "",
        logo: js,
      },
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Vite js",
        para: "",
        logo: vite,
      },
      {
        name: "Node Js",
        para: "",
        logo: node,
      },
      {
        name: "Express Js",
        para: "",
        logo: express,
      },
      {
        name: "Styled Components",
        para: "",
        logo: sc,
      },
      {
        name: "CSS",
        para: "",
        logo: css,
      },
      {
        name: "Sass",
        para: "",
        logo: saas,
      },
      {
        name: "Tailwind CSS",
        para: "",
        logo: tailwind,
      },
      {
        name: "Git",
        para: "",
        logo: git,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "I provide a wide range of web development services. I use the latest technologies to provide your business with highly functional, interactive and secure web pages. Be sure that I will do my best to understand your requirements and provide you with a great looking and highly functional website.",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "I use modern web design techniques and technologies to make your website attractive, interactive, user-friendly and easy to navigate.",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Developedia",
        image: developedia,
        demo: 'https://unique-genie-a7df49.netlify.app/',
      code: 'https://github.com/RMI11/Developedia_MERNstack_SocialMedia'
      },
      {
        title: "Modern Bank App",
        image: bank_reactapp,
        demo: 'https://calm-lamington-13488f.netlify.app',
      code: 'https://github.com/RMI11/Bank_Modern_App_ReactJS/tree/main/bank_modern_app'
      },
      {
        title: "Weather App",
        image: weather_app,
        demo: 'https://silver-bublanina-9fccd2.netlify.app/',
      code: 'https://github.com/RMI11/Weather-App'
      },
      {
        title: "Video Tube",
        image: video_tube,
        demo: 'https://eclectic-bunny-bfd181.netlify.app',
      code: 'https://github.com/RMI11/VideoTube_ReactJS/tree/main/video_tube'
      },
      {
        title: "Tesla Clone",
        image: tesla_clone,
        demo: 'https://visionary-pixie-f26c55.netlify.app',
      code: 'https://github.com/RMI11/Tesla-Clone'
      },
      {
        title: "Netflix Clone",
        image: netflix_clone,
        demo: 'https://netflix-react-clone-803f3.web.app/',
      code: 'https://github.com/RMI11/Netflix-Clone_ReactJS'
      },
      {
        title: "Real Estate",
        image: restate,
        demo: 'https://silly-rolypoly-303c4d.netlify.app/',
      code: 'https://github.com/RMI11/Real-Estate-WebPage'
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“I have been looking for a web development service for a while and had no luck because of the high price. I found this site and decided to give it a try. I am very happy with the service I received. From the web developer, we got the site designed and developed in two weeks.”",
        img: avatar1,
        name: "Seth Robinson",
      },
      {
        review:
          "“I wanted to create a website that was clean and clear. When I first reached out to this company to discuss my ideas, they were very clear about what I wanted in a website and how I wanted it to look”",
        img: avatar2,
        name: "Harvey Russell",
      },
      {
        review:
          "“I wanted to make my website better. I had it done in the beginning, but I wanted to make sure that I was doing it right, and that my website was optimized for usability. I contacted RR-Development and they were able to help me make the necessary changes. I am currently so happy with the website I have now.”",
        img: avatar3,
        name: "Antonio Cooper",
      },
      {
        review:
          "“The web design and development services I've received from RR-Development have helped increase my business, professionally and personally. I've received great feedback from my clients, as well as from my peers, and they've recommended me to others. ”",
        img: avatar4,
        name: "Nathaniel Parks",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I am a professional web developer. I offer a full range of services from consulting, planning, development and testing to implementation and support. I create websites that are functional, simple and attractive. My clients can count on me to provide the best website development service to suit their business needs. I also ensure that my websites can be easily maintained.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "rajko.fed@gmail.com",
        icon: GrMail,
        link: "mailto:rajko.fed@gmail.com",
      },
      {
        text: "+381 61 628 7766",
        icon: MdCall,
        link: "https://wa.me/+381603120009",
      },
      {
        text: "Rajko Radojkovic",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/rajkoradojkovic",
      },
      {
        text: "RMI11",
        icon: BsGithub,
        link: "https://github.com/rmi11",
      },
    ],
  },
  Footer: {
    text: "All © CopyRight Reserved 2022",
  },
};
