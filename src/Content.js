// import images
import Hero_person from "./assets/images/hero/person.png";

import figma from "./assets/images/skills/figma.png";
import sketch from "./assets/images/skills/sketch.png";
import asp from "./assets/images/skills/asp.png";
import reactjs from "./assets/images/skills/react.png";
import nodejs from "./assets/images/skills/node.png";
import javascript from "./assets/images/skills/javascript.png";
import python from "./assets/images/skills/python.png";

import services_logo1 from "./assets/images/services/logo1.png";
import services_logo2 from "./assets/images/services/logo2.png";
import services_logo3 from "./assets/images/services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

// import avatar1 from "./assets/images/testimonials/avatar1.png";
// import avatar2 from "./assets/images/testimonials/avatar2.png";
// import avatar3 from "./assets/images/testimonials/avatar3.png";
// import avatar4 from "./assets/images/testimonials/avatar4.png";

// import Hireme_person from "./assets/images/Hireme/person.png";
// import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
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
    title: "Web Developer",
    firstName: "Wilson",
    LastName: "San",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experince in Web development",
      },
      {
        count: "10+",
        text: "Projects in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    // subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Pixel-perfect Design",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Express, Passport, OAuth, Passport",
        logo: nodejs,
      },
      {
        name: "ASP.NET",
        para: "ASP.NET Core, MVC",
        logo: asp,
      },
      {
        name: "React js and React-native",
        para: "Reactive UI website and mobile-friendly",
        logo: reactjs,
      },
      
      {
        name: "Javascript",
        para: "Grunt, Gulp, WebSocket, Backbone.js",
        logo: javascript,
      },
      // {
      //   name: "PHP",
      //   para: "ASP, PHP8",
      //   logo: python,
      // },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT CAN I OFFER",
    service_content: [
      {
        title: "Frontend Development",
        para: "Fully functional website, conducted coding in HTML and CSS, and ensured mobile functionality",
        logo: services_logo1,
      },
      {
        title: "Crypto-currency",
        para: "From Web3 Dapp to Crypo exchange buro",
        logo: services_logo2,
      },
      {
        title: "Backend Development",
        para: "Node+Express Integration with 3rd party APIs",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    // subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "FINE App Civil",
        image: project1,
      },
      {
        title: "Medical Care",
        image: project2,
      },     
    ],
  },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    // image1: Hireme_person,
    // image2: Hireme_person2,
    para: "Skilled experience and problem-solving skills of mine will bring you more benefits.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "photonfaust914@proton.me",
        icon: GrMail,
        link: "mailto:photonfaust914@proton.me",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      // {
      //   text: "codeaprogram",
      //   icon: BsInstagram,
      //   link: "https://www.instagram.com/codeaprogram/",
      // },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
