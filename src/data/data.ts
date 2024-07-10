export interface ProjectProps {
    name?: String;
    description?: String;
    technology?: String[];
    github?: String;
    live?: String | "";
  }
  
  export const ProjectsList = [
    {
      name: "daily expense tracker",
      description:
        "an intuitive application that helps you track your daily expenses effortlessly. Record your spending, categorize expenses, and gain insights into your financial habits to stay on top of your budget and savings goals.",
      technology: ["html", "css", "php", "mysql"],
      github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
    },
    {
      name: "recipedia",
      description:
        "a comprehensive tool for organizing and managing your favorite recipes. Easily add, categorize, and search for recipes, create shopping lists, and plan meals to make cooking at home more enjoyable and efficient.",
      technology: ["react", "express", "nodejs", "mongodb"],
      github: "https://github.com/soumik-aj12/recipedia",
    },
    {
      name: "helpify",
      description:
        "a location and community-based social media application designed to connect people in need with those who can help. Users can post requests for assistance, offer support, and collaborate within their local communities to create a more supportive and connected environment",
      technology: ["react", "express", "nodejs", "mongodb"],
      github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
    },
    {
      name: "Daily Expense Tracker",
      description:
        "A Daily Expense Tracker helps a regular user tracks expenses daily",
      technology: ["HTML", "CSS", "PHP", "MySQL"],
      github: "https://github.com/soumik-aj12/Daily-Expense-Tracker",
    },
  ];
  
  