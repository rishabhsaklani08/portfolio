import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  growkul,
  homians,
  Summarizer,
  Budgeting,
  AIkeyword,
  QR,
  Rockgame,
  TypeSpeed,
  ToDo,
  Cardgame,
  Cardgametimer,
  Alarm,
  News,
  growkulsite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

const technologies = [
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Homians Pvt.Ltd",
    icon: homians,
    iconBg: "#E6DEDD",
    date: "December 2022 - March 2023",
    points: [
      "Developed user interface with modern JavaScript frameworks, HTML5, and CSS3, which improved user satisfaction by 75%.",
      "Created Multiple changes in the website implemented the Bootstrap framework to make the site more interactive resulting in a 30 % increase in website visits.",
      "Designed Multiple fully interactive Mock UX/UI Templates guiding a team of 5 members",
    ],
  },
  {
    title: "Founder",
    company_name: "Growkul",
    icon: growkul,
    iconBg: "#383E56",
    date: "May 2021 - November 2022",
    points: [
      "Created a fully responsive multipage website from scratch using Bootstrap framework with an interactive UI, resulting in a 50% increase in user clicks subsequently 33% in customer purchases.",
      "Built API following RESTful standards to allow users to submit information by storing data in MongoDB.",
      "Successfully integrated Razorpay payment gateway using Razorpay API took 500+ customer orders.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed semper sapien. Praesent ipsum orci, consequat eu felis id, aliquam ultricies urna.",
    name: "Your Name",
    designation: "designation",
    company: "company or place",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Growkul (Ed-Tech Platform)",
    description:
      "I developed a fully responsive website for ed-tech platform Growkul using Bootstrap, HTML, CSS, and JavaScript. The site showcases modern UI/UX components, intuitive navigation, and seamless user experience. It includes multiple pages with relevant information and functionalities. I successfully integrated the secure Razorpay payment gateway for online transactions. The combination of HTML, CSS, and JavaScript allowed me to create dynamic and interactive elements. The website demonstrates my proficiency in front-end development and ability to optimize for different screen sizes. The project highlights my skills in working with third-party APIs and delivering a visually appealing ed-tech platform.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "BootStrap",
        color: "blue-text-gradient",
      },
      {
        name: "UX/UI",
        color: "green-text-gradient",
      },
    ],
    image: growkulsite,
    source_code_link: "https://growkul.netlify.app/",
  },
  {
    name: "AI Article Summarizer",
    description:
      "This project involved using ReactJS and Rapid API to create a tool that allows users to summarize articles and other text-based content quickly and easily. The AI summarizer features an intuitive and user-friendly interface that makes it easy to input articles or other content and generate a summary. The app uses machine learning algorithms to analyze the text and identify the key points and main ideas, allowing it to generate accurate and informative summaries.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Rapid API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Summarizer,
    source_code_link: "https://react-ai-summarizer-by-rishabhsaklani.netlify.app",
  },
  {
    name: "Budgeting Web App (KhataBook)",
    description:
      "The KhataBook app features a user interface that allows users to input their daily transactions and track their spending across different categories. The app also includes features such as the ability to set budgets, view spending trends, and receive alerts when they exceed their budget. One of the key features of the KhataBook app is the use of React Router, which allows users to navigate between different pages and components without the need for a full page reload. This provides a smooth and seamless user experience, making it easy for users to quickly access the information they need.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Routes",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: Budgeting,
    source_code_link: "https://khata-book-by-rishabhsaklani.netlify.app",
  },
  {
    name: "AI Keywords Extractor",
    description:
      "The AI Keywords Extractor features a user interface that allows users to input text and select the language they want to extract keywords. The app uses an OpenAI API to analyze the text and extract the most relevant keywords. The interface is user-friendly and easy to navigate. Through building this AI Keywords Extractor, I was able to improve my skills in ReactJS and gain valuable experience in creating useful tools that incorporate AI-based algorithms. I am excited to continue developing my skills and applying them to real-world projects.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: AIkeyword,
    source_code_link: "https://ai-keyword-extractor-by-rishabh.netlify.app",
  },
  {
    name: "Rock-Paper-Scissors Game",
    description:
      "The Rock-Paper-Scissors game features a simple user interface that allows players to choose their move from three options: rock, paper, or scissors. The computer opponent also chooses a move, and the winner is determined based on the traditional game rules. The app also includes features such as a score tracker, allowing players to track their progress and compete against their own previous scores.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: Rockgame,
    source_code_link: "https://rock-paper-scissors-by-rishabhsaklani.netlify.app",
  },
  {
    name: "Typing Speed Test Game",
    description:
      "The Typing Speed game features a user interface that displays a randomly generated phrase, sentence or paragraph that the player must type as quickly and accurately as possible. The game includes a timer that starts counting down as soon as the player starts typing, adding an extra challenge to the game. The app also includes features such as a score tracker, allowing players to track their progress.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: TypeSpeed,
    source_code_link: "https://typing-speed-test-by-rishabhsaklani.netlify.app",
  },
  {
    name: "To-do List",
    description:
      "A simple and user-friendly To-Do list application built using JavaScript. Features include adding, editing, and deleting tasks. The application is optimized for performance and designed with a responsive layout. This project involved using JavaScript to create a dynamic and interactive user interface for managing tasks.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: ToDo,
    source_code_link: "https://to-do-list-by-rishabh-saklani.netlify.app",
  },
  {
    name: "Memory Card Game",
    description:
      "This project involved using JavaScript to create an engaging and interactive game that challenges players to test their memory skills. The Memory Card game features a grid of cards that are shuffled at the beginning of each game. The objective of the game is to match pairs of cards with identical images by flipping them over two at a time. The game ends when all pairs have been matched.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: Cardgame,
    source_code_link: "https://memory-card-game-by-rishabhsaklani.netlify.app",
  },
  {
    name: "Memory Card Game with Timer",
    description:
      "The Memory Card game with timer features a grid of cards that are shuffled at the beginning of each game. The objective of the game is to match pairs of cards with identical images by flipping them over two at a time. However, the game also includes a timer that counts down from a set time, adding an extra challenge to the game.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: Cardgametimer,
    source_code_link: "https://memory-card-game-with-timer-rishabh.netlify.app",
  },
  {
    name: "QR Code Generator",
    description:
      "The QR code generator allows users to enter text, URLs, or other information and generates a QR code that can be scanned by a mobile device.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: QR,
    source_code_link: "https://qrcodegenerator-by-rishabhsaklani.netlify.app/",
  },
  {
    name: "Alarm Clock ",
    description:
      "A simple and user-friendly Alarm Clock application built using JavaScript. The Alarm Clock app allows users to set alarms and customize each alarm's settings, such as the time, and sound. The app also includes features such as a countdown timer. The application is optimized for performance and designed with a responsive layout.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML3",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "pink-text-gradient",
      },
    ],
    image: Alarm,
    source_code_link: "https://alarm-clock-by-rishabh-saklani.netlify.app/",
  },
  {
    name: "Bullet News",
    description:
      "This is a React application that displays news articles based on different categories like Sports, Business, Entertainment, etc. The application is made up of several components.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NewsAPI",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: News,
    source_code_link: "https://github.com/rishabhsaklani08/BulletNews-React-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
