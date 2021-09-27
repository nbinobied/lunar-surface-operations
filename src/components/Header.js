import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container px-4 px-lg-5">
              <Link className="navbar-brand" to="/">Lunar Surface Operations</Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="mx-2">Menu</span>
                  <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  {auth().currentUser
                    ? <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/master">Master Log</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/log">Personal Log</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" onClick={() => auth().signOut()} to="">Logout</Link></li>
                      </ul>
                    : <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link className="nav-link" to="/login">Sign In</Link></li>
                        <li className="nav-item"><Link className="nav-link " to="/signup">Sign Up</Link></li>
                      </ul>
                  }
              </div>
            </div>
        </nav>
    </header>
  );
}
export default Header;