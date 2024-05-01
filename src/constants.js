import { Html } from "@react-three/drei";
import { three } from "maath";
import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    threejs,
    mongodb,
    git,
    express,
    cpp,
    java,
  } from "./assets";
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    }, 
    {
      name: "Express",
      icon: express,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Next JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      icon: html,
      iconBg: "#383E56",
      date: "March 2021 - June 2021",
      points: [
        "Developing and maintaining web applications using HTML , CSS and Javascript.",
        "Implementing responsive design using media queries.",
        "Building a Tic-Tac-Toe game using HTML, CSS and Javascript",
      ],
    },
    {
      title: "MERN Training Bootcamp",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "July 2022 - September 2022",
      points: [
        "Developing and maintaining web applications using React.js , Express and MongoDb.",
        "Collaborating with batch mates, and creating a full stack project.",
        "Implementing responsive design and attractive UI.",
      ],
    },
    {
      title: "MERN Bootcamp from UDEMY",
      icon: reactjs,
      iconBg: "#383E56",
      date: "May 2023 - Jun 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Working on my back-end skills as in previous bootcamp I could not focus on backend development that much.",
      ],
    },
    {
      title: "Next Js",
      icon: threejs,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Learning in NextJS.",
        "Developing and maintaining web applications using NextJS",
        "Creating attractive anime website using NextJS.",
      ],
    },
  ];
   const projects = [
    {
      name: "Anime Bucket",
      description:
        "Working on a web application where you can discover new animes and manage watched ones in a single place.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
              name:"JIKAN api",
              color:"pink-text-gradient",
        },
      ],
      image:"https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg",
           source_code_link: "https://github.com/vector17002/animbuketsu",
         "link":"https://animbuketsu.vercel.app/",
    },
    {
      name: "UShare",
      description:
        "A photo sharing social media platform for sharing your memories with the community. This contains features such as filtering the captions",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "https://media.istockphoto.com/id/1293898018/vector/the-best-thing-about-memories-is-making-them-motivational-quote.jpg?s=612x612&w=0&k=20&c=sDwmwy_G7OTbE7NI2d9h0OzudbF0NMNk07rQL3TwaGo=",
      source_code_link: "https://github.com/vector17002/ushareProject/tree/master",
      "link" :"https://usharereact.netlify.app/",
    },
    {
      name: "Slack Cord",
      description:
        "A simple Chat application with real time updates using Socket.io Programming and secure authentication using JWT.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "orange-text-gradient",
        },
          {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
          {
          name: "ExpressJs",
          color: "blue-text-gradient",
        },
          {
          name: "Socket.io",
          color: "green-text-gradient",
        },
            {
          name: "JWT",
          color: "blue-text-gradient",
        },
      ],
      image: "https://camo.githubusercontent.com/d11adc3ccddb3c1ad9d1f75528614b3b650f7021224ac5b78c1e2de397804fa4/68747470733a2f2f776d757a612e6769746875622e696f2f536f636b6574494f2d436861742d4170702f7075626c69632f696d672f636861742d6170702e504e47",
      source_code_link: "https://github.com/vector17002/slackcord",
       "link" :"https://slackcord.onrender.com"
    },
  ];
  
  export { technologies, experiences ,projects };
