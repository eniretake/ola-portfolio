import React from "react";
import "./Projects.scss";
import Twitter from "../../Assets/Images/Twitter.png";
import Todo from "../../Assets/Images/Todo.png";

function Projects() {
  const projects = [
    {
      title: "Todo List",
      desc: "Simple todo app with check, done, delete and edit task. Done with React ",
      url: "https://github.com/eniretake/ol-react-todo",
      imageUrl: Todo,
    },
    {
      title: "Twitter Feed",
      desc: "News feed of Twitter. Done with React ",
      url: "https://github.com/VeronikaMi/ol-academy-imitated-twitter-posts/tree/master/twitter",
      imageUrl: Twitter,
    },
  ];

  return (
    <div className="Container">
      <div className="ProjectContent">
        <h2>My Projects</h2>
        <div className="Main">
          {projects.map((project, index) => {
            return (
              <div key={index} className="Project">
                <div className="ProjectImage">
                  <img src={project.imageUrl} alt={project.title} />
                </div>

                <div className="Description">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
                <button className="Button">
                  <a href={project.url}>View on Github</a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
