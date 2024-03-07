export default function Footer() {
  return (

    <div className='footer-container'>


        <div className='footer'>

            <a className="footerlink" target='_blank' href="https://github.com/Mattmrob">
              <img className="footerlogo" src="/assets/imgs/github-logo.svg" alt="a link to my github profile" />
            </a>

            <a className="footerlink" target='_blank' href="https://www.linkedin.com/in/matthew-roberts-3829b9270/">
             <img className="footerlogo" src="/assets/imgs/linkedin-logo.svg" alt="a link to my linkedin profile" />
            </a>

            <a className="footerlink" target='_blank' href="https://mmroberts.com/index.html">
            <img className="footerlogo" src="/assets/imgs/mmrobertslogo.svg" alt="a link to mmroberts.com" />
            </a>

        </div>

        <h3 className='footertext'>Find me on Github, LinkedIn, or through mmroberts</h3>

      </div>
  );
}