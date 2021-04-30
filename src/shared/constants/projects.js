import LDAPConnector from '../../../public/images/ldap-connector.png';
import AdviceApp from '../../../public/images/react-advice-app-resize.png';
import MernApp from '../../../public/images/mern-stack-app.png';
import Covid19 from '../../../public/images/Covid-19-Tracker.png';

export const PROJECTS =
[
    {
        title: "Covid-19 Tracker",
        description: "This Covid-19 tracker was built to track the number of active, recovered, and death cases from Covid-19 based on data from the John Hopkins CSSE. This project was built using ReactJS, Material-UI and is hosted on Firebase.",
        linkToProject: "https://react-covid19-tracker.firebaseapp.com/",
        linkToRepo: "https://github.com/AustinSpinazze/react-covid19-tracker",
        image: Covid19,
        technologies: ["ReactJS", "Firebase", "Material-UI"]
    },
    {
        title: "LDAP Connector",
        description: "This project was built as a proof of concept to show that it is possible to securely connect and read from an active directory service using React and Electron. This project was built using React, Electron, and ActiveDirectory2.",
        linkToRepo: "https://github.com/AustinSpinazze/LDAP-Connector",
        image: LDAPConnector,
        technologies: ["ReactJS", "Electron", "ActiveDirectory2"]
    },

    {
        title: "React Advice App",
        description: "This simple project was built to practice the basics of React functional components and making API requests using Axios to fetch data.",
        linkToProject: "https://reactadviceapp.firebaseapp.com/",
        linkToRepo: "https://github.com/AustinSpinazze/ReactAdviceApp",
        image: AdviceApp,
        technologies: ["ReactJS", "Axios", "Firebase"]
    },

    {
        title: "Your Places",
        description: "This is a full stack application in progress that allows users to create accounts, post images of places, mark them with Google Maps, and more. This application was built using the MERN (MongoDB, ExpressJS, ReactJS, NodeJS) Stack",
        linkToRepo: "https://github.com/AustinSpinazze/MERNLocationSharingApp",
        image: MernApp,
        technologies: ["ReactJS", "MongoDB", "NodeJS"]
    }, 
]
