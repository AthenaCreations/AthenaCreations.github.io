import React from 'react';
const Ref = props => {
  //display component for loading
  return (
    <div className="container">

      <section>
        <h3>Testimonials</h3>
        <p>Real life testimonials from past and current business associates and clients.</p>
      </section>

      <div className="vert-wrapper">

        <section>
          <h3>Personal References</h3>
          <aside>
            <h6>Omar Rogers</h6>
            <p>"<span>Honest</span> and <span>dependable</span>, I can always count on Athena to get the job done right!"</p>
          </aside>
          <aside>
            <h6>Julia Zimmerman</h6>
            <p>"Athena is <span>accountable</span> and <span>reliable</span> with excellent <span>communication</span> skills."</p>
          </aside>
          <aside>
            <h6>Stephanie Jones</h6>
            <p>"Extremely <span>creative</span> and has a great attention to detail."</p>
          </aside>
        </section>
        <section>
          <h3>Professional References</h3>
          <aside>
            <h6>Nathan Weitzman</h6>
            <p>"<span>Friendly</span> and <span>dedicated</span>, Athena always works to provide the best service she can."</p>
          </aside>
          <aside>
            <h6>Victoria Jones</h6>
            <p>"<span>Hardworking</span> and <span>consistent</span> to an admirable level, she always strives to impress."</p>
          </aside>
          <aside>
            <h6>Jordann Kitchens</h6>
            <p>"<span>Innovative</span> and <span>resourceful</span> provides great great feedback and advice."</p>
          </aside>
        </section>
      </div>
    </div>
  );
}
export default Ref;
