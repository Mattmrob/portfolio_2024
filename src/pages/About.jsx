export default function AboutPage() {
    return (

      <div className="container-fluid pt-4">

        <div className='row align-center'>

          <div className="col-md-3 d-flex justify-content-center">
            <div className="profileimg-container">
              <img className="profileimg" src="/assets/imgs/profileimg.jpg" alt="A picture of myself" />
            </div>
          </div>

          <div className="d-flex flex-column justify-content-center col-md-9">
            <h1 className="title">About Me</h1>
            <p className="bodytxt">
              My name is Matthew Michael Roberts and I am a creative with expertise in Full-stack Web Developement and Graphic Design.
              You can find me locally in Antioch, California, where I operate a small design business out of my home.

            <br></br>
            <br></br>

            After graduating from California State University Hayward in 2019 with a B.F.A. in Graphic Design, I got dropped right into
            the start of the Covid-19 pandemic. During this time I worked on my artistic skills and sought work, eventually landing a
            job at a local print shop, The Print Club. I worked there for 2 years, managing multiple machines, interfacing with customers, and 
            and working on various design projects for the City of Antioch's 150th Year Sesquicentennial, 
            The Delta Veterans Group, Tri Delta Transit, An Elderly Wish Foundation, and other businesses.

            <br></br>
            <br></br>

            As time passed, I found myself leaving The Print Club to persue new ventures and improve my skills further. I opened up
            a small design business in 2023 by the name of mmroberts, to which I offer design services such as logo design,
            image vectorization, flier design, and business card design. Continuing to push myself, I then enrolled into the UC Berkely
            Full-Stack Developement Bootcamp, a program to get me up-to-date on the latest web developement technologies.

            <br></br>
            <br></br>

            I am currently looking for employment, so please take a look at my resume and my Portfolios if you are interested!
            <br></br>
            My Web Portfolio is current hosted on this site - just click the 'portfolio' link at the top!
            <br></br>
            My Design Portfolio is hosted <a target="_blank" href="https://mmroberts.com/pages/portfolio.html">here</a>!
            </p>
          </div>

        </div>

      </div>
    );
  }