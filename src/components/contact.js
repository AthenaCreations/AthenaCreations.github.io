import React from 'react';
const Contact = props => {
  //display component for loading
  function handleEmail(e) {
    e.preventDefault();
    window.location.href = "mailto:user@example.com?subject=Info%20request.&body=I%20saw%20your%20portfolio%20and%20was%20looking%20for%20som%20additional%20information%20regarding%20your%20services.";
  }
  return (
    <div className="container">

      <section>
        <h3>What Im up to lately</h3>
          <p className="">
            Currently I work for TeamTreehouse.com as a project reviewer and slack moderator. I spend a lot of my free time sharpening my programming skills and learning new ones with a few personal projects that I'm working on. As of late JAVA and Android Dev has been my topic of choice. I also have hobbies that I've picked up over the years that I like to work on such as tattooing and glassblowing to name only a couple.
          </p>
      </section>

      <div className="vert-wrapper">

        <section id="availability">
          <h3>Availability</h3>
          <iframe title="mobile-calendar" className="calendar tablet" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=200&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=athenaozanich%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" styles={"border-width:0"} width="200" height="200"></iframe>
          <iframe title="dsktop-calendar" className="calendar desktop" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=250&amp;wkst=1&amp;bgcolor=%23666666&amp;src=athenaozanich%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" styles={"border:solid 1px #777"} width="400" height="250"></iframe>
          <aside>
            <p>Have questions or comments? Feel free to drop me a line.</p>
            <button id="email-cli" onClick={handleEmail}>Email me</button>
          </aside>
        </section>

        <section>
          <h3>My Services</h3>

          <aside>
            <h6>U.I.  ($30hr)</h6>
            <p>I provide profesional elegant <span>designs</span> with a modern approach to improve your online presence.</p>

          </aside>

          <aside>
            <h6>F.E.W.D.  ($30hr)</h6>
            <p>Simple, efficient and effective <span>Front End Develpment</span> aimed at a pleasant user experience.</p>

          </aside>

          <aside>
            <h6>CONSULT   ($15hr)</h6>
            <p>Honest advice on creating your <span> web presence </span> and unifying <span>social media connectivity</span>.</p>

          </aside>
        </section>

      </div>

  </div>
  );
}
export default Contact;
