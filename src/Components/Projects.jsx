import React from "react";
import Project from "./Project.jsx";
import "../styles/Projects.css";

const Projects = () => {
  const projectsInfo = [
    {
      name: "Tourism APi",
      desc: "Centered around tourism, this API facilitates tour booking for users. It boasts a variety of capabilities including tour listings, tour search functionality, user authentication, reviews, and a host of other features.",
      // liveLink: "website url",
      githubLink: "https://github.com/Olusegun-Light/Tourisim-API",
      techs: ["Javascript", "Nodejs", "Mongodb"],
      isOpenSource: true,
    },
    {
      name: "Natours",
      desc: "Natours – your go-to web app, perfectly synced with the Tourism API. Dive into exciting adventures, manage them effortlessly, and connect with like-minded explorers.",
      liveLink: "https://natours-hkay.onrender.com/",
      githubLink: "https://github.com/Olusegun-Light/Natours",
      techs: ["Javascript", "PUG", "CSS", "Nodejs", "Mongodb"],
      isOpenSource: true,
    },
    {
      name: "Jobs APi",
      desc: "This is a Job Api built with Node.js and Express. It allows users to manage their daily job search.",
      liveLink: "https://jobs-api-bnvf.onrender.com/",
      githubLink: "https://github.com/Olusegun-Light/Jobs-API",
      techs: ["Javascript", "Nodejs", "Mongodb"],
      isOpenSource: true,
    },
    {
      name: "Jobstar",
      desc: "A job tracking web-app built using the jobs api for the backend and react for the frontend. It allows users to manage their daily job search.",
      liveLink: "https://job-tracking-app-d1km.onrender.com/",
      githubLink: "https://github.com/Olusegun-Light/Job-Tracking-App",
      techs: ["Javascript", "Nodejs", "React"],
      isOpenSource: true,
    },
    // {
    //   name: "Wiki-APi",
    //   desc: "The Wiki API is designed to manage a collection of articles in a simple and efficient manner. It provides a set of endpoints to perform various operations, including retrieving all articles, adding new articles, updating existing ones, and deleting articles.",
    //   // liveLink: "website url",
    //   githubLink: "https://github.com/Olusegun-Light/Wiki-Api",
    //   techs: ["Javascript", "EJS", "Nodejs", "Mongodb"],
    //   isOpenSource: true,
    // },
    {
      name: "DignoWise: AI-Powered Symptom and Diagnosis Guidance",
      desc: "DignoWise is an intelligent companion for understanding your health. DignoWise employs AI technologies to provide guidance on symptoms and potential diagnoses.",
      // liveLink: "website url",
      githubLink: "https://github.com/Olusegun-Light/DignoWise",
      techs: ["Javascript", "Nodejs", "Mongodb", "Bot-Press"],
      isOpenSource: true,
    },
  ];
  return (
    <div className="Projects" id="projects">
      <h2>My Projects</h2>
      <div>
        {projectsInfo.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
