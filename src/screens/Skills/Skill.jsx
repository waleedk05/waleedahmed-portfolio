
import React from 'react';
import './skill.css'; // Importing CSS file for styling


const Skill = () => {
  return (
    <>
      <h1 className='container-title'>Skills</h1>

      <div className="skills-container">
        <div className="row">
          <div className="skill-box">

            <img src="../../../public/icons/figma.png" alt="Figma Icon" className="skill-icon" />
            <p className="skill-name">Figma</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/reactjs.png" alt="Adobe Icon" className="skill-icon" />
            <p className="skill-name">React</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/node-js.png" alt="Adobe Icon" className="skill-icon" />
            <p className="skill-name">Node</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/html-icon.png" alt="Adobe Icon" className="skill-icon" />
            <p className="skill-name">Html</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/css-icon.png" alt="Adobe Icon" className="skill-icon" />
            <p className="skill-name">CSS</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/javascript.png" alt="Adobe Icon" className="skill-icon" />
            <p className="skill-name">JavaScript</p>
          </div>

        </div>

        <div className="row">

          <div className="skill-box">
            <img src="../../../public/icons/adobe-premiere.png" alt="Premiere Icon" className="skill-icon" />
            <p className="skill-name">Premiere</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/adobe-photoshop.png" alt="Premiere Icon" className="skill-icon" />
            <p className="skill-name">Photoshop</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/adobe-illustrator.png" alt="Premiere Icon" className="skill-icon" />
            <p className="skill-name">Illustrator</p>
          </div>

          <div className="skill-box">
            <img src="../../../public/icons/adobe-after-effects.png" alt="Premiere Icon" className="skill-icon" />
            <p className="skill-name">After Effects</p>
          </div>

        </div>
      </div>
    </>

  );
};

export default Skill;
