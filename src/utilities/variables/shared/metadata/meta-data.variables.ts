import { amountOfExperience } from "@utilities/variables/common/about/about-cards.variables";

export const PAGE_METADATA = {
  home: {
    title: "Home page",
    description: `Hello! My name is Miguel. As a full stack developer with over 5 years of experiences, I can make your vision to life. I will dedicate my full time and passion to your success!`,
    pageUri: "/",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  about: {
    title: "About page",
    description: `Get to know me better! I'm Miguel, a passionate fullstack developer with over 5 years of experience in JavaScript. In this page, I share my story, skills, and interests. Learn about my professional journey and discover how I can help you build engaging web experiences.`,
    pageUri: "/about",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  skills: {
    title: "Skills page",
    description:
      " ",
    pageUri: "/skills",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  services: {
    title: "Services page",
    description:
      "Welcome to my services page. Let's work together to bring your ideas to life!",
    pageUri: "/services",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  portfolio: {
    title: "Portfolio page",
    description:
      "Check out my latest work! This page showcases some of my most recent projects, from simple landing pages to complex web applications. Each project highlights my technical skills and my commitment to delivering high-quality and user-friendly web experiences!",
    pageUri: "/portfolio",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  contact: {
    title: "Contact page",
    description:
      "Let's get in touch! I'm always eager to connect with new people and discuss exciting projects. On this page, you'll find different ways to reach out to me, from email to social media. Don't hesitate to drop me a message and let's create something amazing together!",
    pageUri: "/contact",
    needsIndexation: true,
    allowRobotCrawlers: true,
  },
  error404: {
    title: "Error 404 - Page not found",
    description:
      "Sorry, the page you were looking for is not available. Please try again or contact me for assistance.",
    pageUri: "/404",
    needsIndexation: true,
    allowRobotCrawlers: false,
  },
  error500: {
    title: "Error 500 - Server error",
    description:
      "Oops, something went wrong. We apologize for the inconvenience and are working to fix the issue. Please try again later or contact me for assistance",
    pageUri: "/500",
    needsIndexation: true,
    allowRobotCrawlers: false,
  },
};

export const OPEN_GRAPH = {
  image: {
    url: " ",
    width: 130,
    height: 170,
  },
};
