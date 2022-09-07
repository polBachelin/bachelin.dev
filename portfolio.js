import emoji from "react-easy-emoji"

export const greetings = {
  name: "Pol Bachelin",
  title: "Hi all, I'm Pol",
  description:
    "I am passionate about full-stack development. I have experience in multiple web development projects; I am capable of bringing a project from start to finish with complicated technologies.\nI can also work on projects with low-level services\nWith my experience in leadership and education in my school I am able to lead a development team on a project.",
  resumeLink:
    "https://drive.google.com/file/d/1hdNw640O53nNXTH0kGSpcnCp_TOQ2x-z/view?usp=sharing",
}

export const openSource = {
  githubUserName: "polBachelin",
}

export const contact = {}

export const socialLinks = {
  twitter: "https://twitter.com/pol_bachelin",
  github: "https://github.com/polBachelin",
  linkedin: "https://www.linkedin.com/in/polbachelin/",
}

export const skillsSection = {
  title: "What I do",
  subTitle:
    "Software Developer and Cybersecurity Enthusiast, I am always looking to learn new technologies and overcome challenges",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building RESTful APIs in Django & GO"),
        emoji("⚡ Building fullstack web applications with NestJs and VueJs"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NestJs",
          fontAwesomeClassname: "logos:nestjs",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "VueJs",
          fontAwesomeClassname: "logos:vue",
        },
        {
          skillName: "GO",
          fontAwesomeClassname: "logos:go",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "logos:github-actions",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "vscode-icons:file-type-jenkins",
        },
      ],
    },
    {
      title: "Cybersecurity",
      lottieAnimationFile: "/lottie/skills/cybersecurity.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Experience in pentesting using Kali Linux and tools like nmap, metasploit, sqlmap"
        ),
        emoji(
          "⚡ Building Scripts to automate intrusion tests in bash or python"
        ),
        emoji(
          "⚡ CTF and cybersecurity seminar organiser in my school to promote good cybersecurity practices. As well as help students learn cybersecurity red team and blue team "
        ),
        emoji(
          "⚡ Participation in many local events such as one with the French Cyberdefense commandement"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Kali Linux",
          fontAwesomeClassname: "simple-icons:kalilinux",
        },
        {
          skillName: "Nmap",
          fontAwesomeClassname: "file-icons:nmap",
        },
        {
          skillName: "Assembly",
          fontAwesomeClassname: "vscode-icons:file-type-assembly",
        },
        {
          skillName: "Scripting",
          fontAwesomeClassname: "carbon:script",
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "logos:bash-icon",
        },
      ],
    },
    {
      title: "Management",
      lottieAnimationFile: "/lottie/skills/agile.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ I have experience in agile methodologies from being a scrum master and a project lead in numerous different groups"
        ),
        emoji("⚡ Time management and organisation are my strong suit"),
        emoji("⚡ I can adapt and integrate a team quickly"),
      ],
      softwareSkills: [
        {
          skillName: "Teams",
          fontAwesomeClassname: "logos:microsoft-teams",
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "cib:notion",
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "logos:jira",
        },
      ],
    },
  ],
}

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "60", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "90",
  },
]

export const educationInfo = [
  {
    schoolName: "EPITECH - European Institute of Technology",
    subHeader: "Master of Science in Computer Science",
    duration: "September 2019 - April 2024",
    desc: "Choosen to integrate the pedagogy team of EPITECH",
    grade: "GPA 3.5",
    descBullets: [],
  },
]

export const experience = [
  {
    role: "Web Developer",
    company: "TBSCG",
    companylogo: "/img/icons/common/tbscg_icon_logo.jpg",
    date: "Apr 2022 – Sept 2022",
    desc: "I worked as a web developer on different CMS projects. Working in the cloud with AWS and mostly on the CMS Magnolia in Java.",
  },
  {
    role: "Java Developer",
    company: "Beetween",
    companylogo: "/img/icons/common/beetween_logo.jpeg",
    date: "Jul 2020 – Dec 2020",
    desc: "I was a member of Beetween's multiposting team. I integrated the Facebook and Twitter APIs to automate the creation of social media posts for their clients. I had the task of developing a new module for their Resume parser using the OpenCV library",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Pedagogy Assistant",
    company: "EPITECH - European Institute of Technology",
    companylogo: "/img/icons/common/epitechlogo.webp",
    date: "Feb 2021 - Apr 2022",
    desc: "I integrated the pedagogy team of EPITECH. My tasks were to help students with their projects. To correct their assignments as well as carry out the project presentations. During this time I worked with a team of 6 other students, while balancing my studies.",
  },
  {
    role: "Co-Founder | Scrum Master | Fullstack developer",
    company: "Nuage Malin",
    companylogo: "/img/icons/common/NuageMalin_logo4.png",
    date: "Oct 2021 - May 2021",
    desc: "Nuage Malin is a green cloud solution that helps businesses archive their data while taking care of the environment. The project is ongoing",
  },
]

export const projects = [
  {
    name: "Socialzr",
    desc: "Web application to create and manage social events. Frontend was done in React.js and the backend is in GO with a MongoDB database",
    github: "https://github.com/polBachelin/Socialzr/",
  },
  {
    name: "Zapier - Remake",
    desc: "Web application that connects different APIs to automate tasks. Frontend is in Vue.js and backend is in NestJs",
    github: "https://github.com/polBachelin/AREA",
  },
  {
    name: "Babel",
    desc: "Creation of VoIP protocol with its implementation in C++. Using libraries like Qt, Boost::Asio, PortAudio, Opus, Sqlite3",
    github: "https://github.com/polBachelin/Babel",
  },
  {
    name: "BomberVerse",
    desc: "Development of a game engine in C++, using this game engine to then create a 3D bomberman game",
    github: "https://github.com/polBachelin/BomberVerse",
  },
]

export const feedbacks = [
  {
    name: "Killian Vallette - Swity",
    feedback:
      "Pol's profesionalism in saying what he does and doing what he says, combined with a technical competence that I have rarely seen, demonstrates a more than adequate potential as a developer. I would recommand him for any assignment he might be asked to do.",
  },
]

// See object prototype on SEO.jsx page
export const seoData = {
  title: "Pol Bachelin",
  description:
    "A passionate Full Stack Web Developer and Blockchain Developer.",
  author: "Pol Bachelin",
  image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
  url: "https://polBachelin.github.io/bachelin.dev",
  keywords: [
    "Pol",
    "Pol Bachelin",
    "@polBachelin",
    "polBachelin",
    "Portfolio",
    "Pol Portfolio ",
    "Pol Bachelin Portfolio",
    "Pol Bachelin Developer",
  ],
}
