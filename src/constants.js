// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import gstuLogo from './assets/education_logo/gstu2.jpeg';
import azharLogo from './assets/education_logo/kazi-azhar-ali.jpeg';

// Project Section Logo's
import careerLogo from './assets/work_logo/career-guide.PNG';
import gadetLogo from './assets/work_logo/gadet-haven.PNG';
import gymLogo from './assets/work_logo/gym.PNG';
import petLogo from './assets/work_logo/pet-adoption.PNG';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: gstuLogo,
      school: "Gopalganj Science and Technology University, Gopalganj-8100",
      date: "December 2019 - June 2025",
      grade: "3.25 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from GSTU University, Gopalganj. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at GSTU University allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: azharLogo,
      school: "Kazi Azhar Ali College, Fakirhat",
      date: "June 2017 - June 2018",
      grade: "A Grade in HSC (Higher Secondary Certificate)",
      desc: "I completed my class 11 and 12 education from Kazi Azhar Ali College, Fakirhat, under the Jessore board, where I studied Physics, Chemistry, Biology, ICT and Mathematics. My education at this institution instilled in me a passion for learning and a curiosity for technology, which ultimately led me to pursue a career in computer science.",
      degree: "none",
    },
    {
      id: 2,
      img: 'none',
      school: "Mulghar Govt. High School, Fakirhat",
      date: "January 2010 - December 2016",
      grade: "A+ Grade in SSC (Secondary School Certificate)",
      desc: "I completed my Secondary School Certificate (SSC) from Mulghar Govt. High School, Fakirhat, where I developed a strong foundation in various subjects. My education at this institution instilled in me a passion for learning and a curiosity for technology, which ultimately led me to pursue a career in computer science.",
      degree: "none",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Career Guide Pro",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: careerLogo,
      tags: ["HTML", "CSS", "JavaScript", "Tailwind", "React JS", "API"],
      github: "https://github.com/redoy-kumar/career-guide-pro",
      webapp: "https://clinquant-cactus-03d816.netlify.app/",
    },
    {
      id: 1,
      title: "Gadget Haven",
      description:
        "Gadget Haven is a modern e-commerce platform for discovering, exploring, and purchasing the latest tech gadgets. Built with React and styled using DaisyUI, the application ensures a user-friendly and visually appealing experience.",
      image: gadetLogo,
      tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/redoy-kumar/gadget-heaven",
      webapp: "https://gadget-haven-08.netlify.app/",
    },
    {
      id: 2,
      title: "Peddy",
      description:
        "The Pet Adoption Platform is a fully responsive web application that allows users to view, sort, and adopt pets dynamically fetched from an API. This project features a mobile-friendly layout, interactive categories, and a smooth user experience designed according to a Figma design template. Users can explore pets, like them, and proceed to adopt their favorite pet with just a few clicks.",
      image: petLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/redoy-kumar/pet-adopt-website",
      webapp: "https://pet-adaption-website.netlify.app/",
    },
    {
      id: 3,
      title: "The Burn Zone",
      description:
        "A responsive gym website built using HTML and CSS, designed to provide users with information about gym services, trainers, and membership options. The website features a clean layout, engaging visuals, and easy navigation to enhance the user experience.",
      image: gymLogo,
      tags: ["HTML", "CSS"],
      github: "https://github.com/redoy-kumar/assignment-no2",
      webapp: "https://redoy-kumar.github.io/assignment-no2/",
    }
  ];  