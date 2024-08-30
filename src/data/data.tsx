import { FaCss3, FaHtml5, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import HtmlSvg from "../../public/icons/html.svg";
import CsssSvg from "../../public/icons/css.svg";
import PhpSvg from "../../public/icons/php.svg";
import JavascriptSvg from "../../public/icons/javascript.svg";
import MysqlSvg from "../../public/icons/mysql.svg";
import ReactjsSvg from "../../public/icons/reactjs.svg";
import NodejsSvg from "../../public/icons/nodejs.svg";
import ExpressSvg from "../../public/icons/express.svg";
import MongoDBSvg from "../../public/icons/mongodb.svg";
import TailwindSvg from "../../public/icons/tailwindcss.svg";
import TSSvg from "../../public/icons/typescript.svg";
import NextjsSvg from "../../public/icons/next.svg";

import det from "../../public/projects/det.png";
import helpify from "../../public/projects/helpify.png";
import recipedia from "../../public/projects/recipedia.jpg";
import port from "../../public/projects/port.png";

export const ProjectsList = [
  {
    title: "daily expense tracker",
    description:
      "an intuitive application that helps you track your daily expenses effortlessly. Record your spending, categorize expenses, and gain insights into your financial habits to stay on top of your budget and savings goals.",
      technology: [HtmlSvg, CsssSvg, PhpSvg, JavascriptSvg, MysqlSvg],
      techName: [HtmlSvg, CsssSvg, PhpSvg, JavascriptSvg, MysqlSvg],
      image: det,
    whiteBg: "",
    github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
  },
  {
    title: "recipedia",
    description:
      "a comprehensive tool for organizing and managing your favorite recipes. Easily add, categorize, and search for recipes, create shopping lists, and plan meals to make cooking at home more enjoyable and efficient.",
    technology: [ReactjsSvg, TailwindSvg, NodejsSvg, ExpressSvg, MongoDBSvg],
    image: recipedia,
    github: "https://github.com/soumik-aj12/recipedia",
  },
  {
    title: "helpify",
    description:
      "a location and community-based social media application designed to connect people in need with those who can help. Users can post requests for assistance, offer support, and collaborate within their local communities to create a more supportive and connected environment",
    technology: [ReactjsSvg, TailwindSvg, NodejsSvg, ExpressSvg, MongoDBSvg],
    image: helpify,

    github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
  },
  {
    title: "my portfolio",
    description:
      "a professional and personalized digital portfolio showcasing my skills, projects, and achievements. ",
    technology: [NextjsSvg, TSSvg, TailwindSvg],
    image: port,
    github: "https://github.com/soumik-aj12/my-next-portfolio",
  },
];
