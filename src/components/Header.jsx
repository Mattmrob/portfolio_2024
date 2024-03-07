import { Link } from 'react-router-dom';
import Nav from './Navbar';

export default function Header() {
  return (
    <>

  <div className="header-container">

    <div className="nav-container">
      <Nav
        links={[

          <Link key={1} className="navlink" to="/About">
          About Me
          </Link>,

          <Link key={2} className="navlink" to="/Portfolio">
          Portfolio
          </Link>,

          <Link key={3} className="navlink" to="/Contact">
          Contact Me
          </Link>,

          <Link key={4} className="navlink" to="/Resume">
          Resume
          </Link>,

        ]}
      />
    </div>

    <div className='header-n-container'>
      <img className="logoimg" src="/assets/imgs/mmrobertslogo.svg"></img>
      <h2 className="header-name">Matthew M. Roberts</h2>
    </div>
  </div>

    </>
  );
}