import React from 'react';
import db from './data/portData.json';
const Port = (data) => {
  //display component for loading
  let project;
  if(db){
    project = db.portItems.map((project, i) =>
    <section className={`port-item card__${i}`} key={"card-"+i}>

      <div className="container">
      <a href={project.url} key={"url-"+i}>
      <h6 key={"project-"+i}>{project.name}</h6>
      <img src={require(`./imgs/${project.img}`)} key={"img-"+i} alt={project.name}/>
      </a>
        <aside>
        <p key={"desc-"+i}>
          {project.desc}
        </p>

        </aside>
      </div>

    </section>
      );

      return (
      <div className="container">

        <section>
          <h3>Some of my work</h3>
          <p>A small collection of my work web related and otherwise.</p>
        </section>
        <div className="vert-wrapper">

          {project}
        </div>
      </div>
    );
  }

  }

export default Port;
