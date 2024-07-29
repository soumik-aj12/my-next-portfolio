

import { FaCss3, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const size = "h-10 w-10 p-1 rounded-lg hover:scale-110";


export const ProjectsList= [
  {
    name: "daily expense tracker",
    description:
      "an intuitive application that helps you track your daily expenses effortlessly. Record your spending, categorize expenses, and gain insights into your financial habits to stay on top of your budget and savings goals.",
    technology: [<FaHtml5 className={`${size} bg-orange-600 h-10 w-10`}/>, <FaCss3 className={`${size} bg-blue-400`}/>, <FaPhp className={`${size} bg-violet-400`}/>, <SiMysql className={`${size} text-orange-600 bg-blue-900`}/>],
    github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
  },
  {
    name: "recipedia",
    description:
      "a comprehensive tool for organizing and managing your favorite recipes. Easily add, categorize, and search for recipes, create shopping lists, and plan meals to make cooking at home more enjoyable and efficient.",
      technology: [<FaReact className={`${size} text-blue-400`}/>, <SiTailwindcss className={`${size} text-cyan-400`}/>, <SiExpress className={`${size} bg-gray-400 p-2 rounded-full`}/>, <FaNodeJs className={`${size} text-green-300`}/>, <SiMongodb className={`${size} text-green-600`}/>],
      github: "https://github.com/soumik-aj12/recipedia",
  },
  {
    name: "helpify",
    description:
      "a location and community-based social media application designed to connect people in need with those who can help. Users can post requests for assistance, offer support, and collaborate within their local communities to create a more supportive and connected environment",
    technology: [<FaReact className={`${size} text-blue-400`}/>, <SiTailwindcss className={`${size} text-cyan-400`}/>, <SiExpress className={`${size} bg-gray-400 p-2 rounded-full`}/>, <FaNodeJs className={`${size} text-green-300`}/>, <SiMongodb className={`${size} text-green-600`}/>],
    github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
  },
  {
    name: "my portfolio",
    description:
      "a professional and personalized digital portfolio showcasing my skills, projects, and achievements. ",
    technology: [<SiNextdotjs className={`${size} bg-gray-700 text-white rounded-full`}/>, <SiTypescript className={`${size} bg-blue-500 text-white`}/>, <SiTailwindcss className={`${size} text-cyan-400`}/>],
    github: "https://github.com/soumik-aj12/my-next-portfolio",
  },
];
