import React from "react";
import project from "../project/Project.module.css";
import { projectData } from "./projectlist";
import { Circle } from "rc-progress";

const Project = () => {
  return (
    <>
      <div className={project.container}>
        <div className={project.smallcontainer}>
          <div className={project.heading}>
            <h2>Projects & skills</h2>
          </div>
          <div className={project.data}>
            <div className={project.skillsgroup}>
              <div className={project.progressbar}>
                <h3>html</h3>

                <Circle
                  percent={85}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  trailColor="black"
                  strokeWidth={10}
                  trailWidth={10}
                  className={project.Circle}
                />
              </div>
              <div className={project.progressbar1}>
                <h3>css</h3>

                <Circle
                  percent={60}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  trailColor="black"
                  strokeWidth={10}
                  trailWidth={10}
                  className={project.Circle}
                />
              </div>
              <div className={project.progressbar2}>
                <h3>javascript</h3>

                <Circle
                  percent={40}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  trailColor="black"
                  strokeWidth={10}
                  trailWidth={10}
                  className={project.Circle}
                />
              </div>
              <div className={project.progressbar3}>
                <h3>react</h3>

                <Circle
                  percent={70}
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  trailColor="black"
                  strokeWidth={10}
                  trailWidth={10}
                  className={project.Circle}
                />
              </div>
            </div>
            <div className={project.cardgroups}>
              {projectData.map((e, index) => {
                return (
                  <div className={project.card} key={index}>
                    <h3 className={project.title}>{e.title}</h3>
                    <p>{e.description}</p>
                    <div className={project.btnGoups}>
                      {e.btn1}
                      {e.btn2}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
