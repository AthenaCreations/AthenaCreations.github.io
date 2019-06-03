import React from 'react';

const Blog = props => {
  //display component for loading
  return (
    <div className="container">
      <section id="about">
        <img src={require("./imgs/profile.jpg")} alt="A pic of my mug!"/>
        <div id="bio">
        <h3>About Me</h3>
        <p>Hello and welcome to my portfolio. My name is Athena and I am a <span>Front End Web Developer</span> with a passion for <span>design</span>.
          I love to help others achieve their goals with a web presence that is a satisfying, enjoyable and memorable experience.</p>
        </div>
        </section>
        <div className="vert-wrapper">
          <section>
            <h3>My Services</h3>
            <aside>
              <h6>U.I.</h6>
              <p>I provide professional elegant <span>designs</span> with a modern approach.</p>
            </aside>
            <aside>
              <h6>F.E.W.D.</h6>
              <p>Efficient and effective <span>Front End Development</span> aimed at a pleasant user experience.</p>
            </aside>
            <aside>
              <h6>CONSULT</h6>
              <p>Honest advice on creating your <span> web presence </span> and unifying <span>social media connectivity</span>.</p>
            </aside>
          </section>
          <section>
            <h3>My Skills</h3>
            <aside>
              <h6>U.I.</h6>
                <p><span>Prototyping, Wireframing & Mockups, Color Theory</span></p>
            </aside>
            <aside>
              <h6>F.E.W.D.</h6>
                <p><span>Html, Css, Javascript, Git & Github</span></p>
            </aside>
            <aside>
              <h6>CONSULT</h6>
                <p><span>Project Planning, Short-term and Extended, Social Media Presence</span></p>
            </aside>
          </section>
        </div>
    </div>
  );
}
export default Blog;
