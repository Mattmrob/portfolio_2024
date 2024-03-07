export default function ResumePage() {
    return (
      <div className="p-container">
        <h1 className="title2">Resume</h1>

        <p className="resume-blurb">
          To download my full Resume, please click this link! Otherwise, 
          below you can find a tldr of my skills and experience.
        </p>

        <p className="resume-download"><a href="./src/assets/imgs/notready.png" download>Resume Download</a></p>


        <h2 className="title2">Web Resume</h2>

        <div className="row">

          <div className="col-md-6 skills">
            <h3>Skills</h3>
            <ul>
              <li>Web languages: HTML, CSS, JS, React, jQuery</li>
              <li>Databases: SQL, NoSQL, MongoDB/Mongoose, IndexDB</li>
              <li>Website Conceptualization and Mockups</li>
              <li>Full Stack Web Developement</li>
            </ul>
          </div>

          <div className="col-md-6 experience">
            <h3>Experience</h3>
            <ul>
              <li>UC Berkeley Full-Stack Bootcamp - Ongoing / 6 months</li>
              <li>Web Design Internship with Company 'MDout' - 2 months</li>
              <li>mmroberts Business Site Developement - Ongoing</li>
            </ul>
          </div>
        </div>

        <h2 className="title2">Design Resume</h2>

        <div className="row">

          <div className="col-md-6 skills">
            <h3>Skills</h3>
            <ul>
              <li>Software: Adobe Photoshop, Indesign, Illustrator</li>
              <li>Print-Ready or Web-Ready Quality</li>
              <li>Original Vector Graphics</li>
              <li>Logos, Fliers, Banners, Business Cards, Vehicle Wraps, Signs, Books</li>
              <li>Character / Mascot Illustration</li>
            </ul>
          </div>

          <div className="col-md-6 experience">
            <h3>Experience</h3>
            <ul>
              <li>Designer / Production Manager - Print Club - 2 Years</li>
              <li>Designer / Owner - mmroberts Design Services - Ongoing / 1 Year</li>
              <li>Bachelor of Fine Arts in Graphic Design, California State East Bay - Graduation in 2019</li>
            </ul>
          </div>
        </div>

      </div>
    );
  }