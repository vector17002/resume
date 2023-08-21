import { Html } from "@react-three/drei";
import { three } from "maath";
import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
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
      date: "May 2023 - Present",
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
        "Discover new animes and manage watched ones in a single place.",
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
      image:"https://media.springernature.com/w580h326/nature-cms/uploads/collections/AI_HERO-58306268c6f4b659459f5b7b2dd3e8a5.jpg",
           source_code_link: "https://github.com/vector17002/openai",
         "link":"https://aiimage-generation.web.app/",
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
      name: "Sumz",
      description:
        "An AI powered application which gives you the summary of an article on the web. Just copy the url of the article you are reading and let the AI summarize it for you.",
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
          name: "OpenAi API",
          color: "orange-text-gradient",
        },
      ],
      image: "https://geekflare.com/wp-content/uploads/2022/07/What-Is-an-Article-Summarizer.jpeg",
      source_code_link: "https://github.com/vector17002/Article-summarizer",
       "link" :"https://sumz.vercel.app/"
    },
  ];
  
  export { technologies, experiences ,projects };
