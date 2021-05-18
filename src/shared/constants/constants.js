import Covid19 from "../../../public/images/Covid-19-Tracker.png";
import LDAPConnector from "../../../public/images/Ldap-Connector.png";
import AdviceApp from "../../../public/images/React-Advice-App-Resize.png";
import MernApp from "../../../public/images/Mern-Stack-App.png";
import java from "../../../public/images/java.png";
import javascript from "../../../public/images/javascript.png";
import electron from "../../../public/images/electron.png";
import nodejs from "../../../public/images/nodejs.png";
import react from "../../../public/images/react.png";
import spring from "../../../public/images/spring.png";
import typescript from "../../../public/images/typescript.png";

export const NAV_LINK = "navLink";
export const IMAGE_LINK = "imageLink";
export const LANDING_LINK = "landingLink";
export const LINK_BUTTON = "linkButton";
export const TAB_LINK = "tabLink";
export const SEND_FORM = "sendForm";

export const PROJECTS = [
  {
    title: "Covid-19 Tracker",
    description: "This Covid-19 tracker was built to track the number of active, recovered, and death cases from Covid-19 based on data from the John Hopkins CSSE. This project was built using ReactJS, Material-UI and is hosted on Firebase.",
    linkToProject: "https://react-covid19-tracker.firebaseapp.com/",
    linkToRepo: "https://github.com/AustinSpinazze/react-covid19-tracker",
    image: Covid19,
    technologies: ["ReactJS", "Firebase", "Material-UI"],
  },
  {
    title: "LDAP Connector",
    description:
      "This project was built as a proof of concept to show that it is possible to securely connect and read from an active directory service using React and Electron. This project was built using React, Electron, and ActiveDirectory2.",
    linkToRepo: "https://github.com/AustinSpinazze/LDAP-Connector",
    image: LDAPConnector,
    technologies: ["ReactJS", "Electron", "ActiveDirectory2"],
  },

  {
    title: "React Advice App",
    description:
      "This simple project was built to practice the basics of React functional components and making API requests using Axios to fetch data.",
    linkToProject: "https://reactadviceapp.firebaseapp.com/",
    linkToRepo: "https://github.com/AustinSpinazze/ReactAdviceApp",
    image: AdviceApp,
    technologies: ["ReactJS", "Axios", "Firebase"],
  },

  {
    title: "Your Places",
    description:
      "This is a full stack application in progress that allows users to create accounts, post images of places, mark them with Google Maps, and more. This application was built using the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack",
    linkToRepo: "https://github.com/AustinSpinazze/MERNLocationSharingApp",
    image: MernApp,
    technologies: ["ReactJS", "MongoDB", "NodeJS"],
  },
];

export const SKILLS = [
    {
        title: "React",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin"],
        techIcon: react
    },
    {
        title: "JavaScript",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin"],
        techIcon: javascript
    },
    {
        title: "ElectronJS",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin"],
        techIcon: electron
    },
    {
        title: "NodeJS",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin"],
        techIcon: nodejs
    },
    {
        title: "TypeScript",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin", "not-filled fa fa-circle-thin"],
        techIcon: typescript
    },
    {
        title: "ExpressJS",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin", "not-filled fa fa-circle-thin"],
    },
    {
        title: "Java",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin", "not-filled fa fa-circle-thin"],
        techIcon: java
    },
    {
        title: "SpringBoot",
        level: ["filled fa fa-circle", "filled fa fa-circle", "filled fa fa-circle", "not-filled fa fa-circle-thin", "not-filled fa fa-circle-thin"],
        techIcon: spring
    },
]

export const EXPERIENCE_TABS = [
    {
        id: 0,
        employerName: "Perficient",
        title: "Technical Consultant",
        duties: [
            "Write modern, efficient, maintainable code for a diverse array of enterprise clients and internal projects",
            "Work with a variety of different languages, frameworks, and libraries such as JavaScript, TypeScript, Java, React, ElectronJS, NodeJS, ExpressJS, and SpringBoot",
            "Communicate with multi-disciplinary teams of engineers, designers, project managers and clients on a daily basis"
        ],
        timePeriod: "January 2020 - Present",
        employerLink: "https://www.perficient.com/"
    },
    {
        id: 1,
        employerName: "Agilink LLC",
        title: "Junior Developer",
        duties: [
            "Developed and maintained code for in-house and client websites primarily using Vue, ASP .NET, C#, and JavaScript",
            "Created UI mockups and wire-frames for clients using Balsamiq and Marvel App",
            "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness"
        ],
        timePeriod: "January 2019 - December 2019",
        employerLink: "https://agilink.net/"
    }
]

    
