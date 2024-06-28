import React from "react";
import { useSwipeable } from "react-swipeable";
import "./projects.css";

const projectsData = [
  {
    id: 1,
    title: "LifeAid",
    description:
      "This is my final year project created using React Native and Firebase.",
    image: "../../../projects/lifeAid.png", // replace with your image path
    link: "https://github.com/your-profile/javascript-projects",
  },
  {
    id: 2,
    title: "Python",
    description:
      "Proficient in Python for data analysis, web development, and automation",
    image: "../../../projects/lifeAid.png", // replace with your image path
    link: "https://github.com/your-profile/python-projects",
  },
  // Add more projects as needed
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="projects">
      <h1 className="container-title">Projects</h1>

      <div className="projects-container" {...handlers}>
        <div className="projects-card" key={projectsData[currentIndex].id}>
          <img
            src={projectsData[currentIndex].image}
            alt={projectsData[currentIndex].title}
          />
          <h2>{projectsData[currentIndex].title}</h2>
          <p>{projectsData[currentIndex].description}</p>
          <a
            href={projectsData[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="github-icon uil uil-github"></i> View Project
          </a>
        </div>
        <button onClick={handlePrev} className="swipe-button left">
          <i class="uil uil-angle-left"></i>
        </button>
        <button onClick={handleNext} className="swipe-button right">
          <i class="uil uil-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Projects;
