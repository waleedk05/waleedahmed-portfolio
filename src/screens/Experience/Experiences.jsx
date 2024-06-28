import React, { useEffect, useState } from "react";
import "./experiences.css";

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Tech Company Inc.",
    location: "San Francisco, CA",
    date: "June 2022 - August 2022",
    description:
      "Worked on frontend development using React and backend with Node.js.",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Design Studio XYZ",
    location: "New York, NY",
    date: "January 2021 - May 2021",
    description:
      "Designed user interfaces for various digital products and conducted user research.",
  },
  // Add more experiences as needed
];

const Experiences = () => {
  return (
    <div id="experiences" className="experience-page">
      <h1 className="container-title"> Experiences</h1>
      {experiences.map((experience) => (
        <div key={experience.id} className="experience">
          <h3>{experience.title}</h3>
          <h4>{experience.company}</h4>
          <p className="location-date">
            {experience.location} | {experience.date}
          </p>
          <p className="description">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
