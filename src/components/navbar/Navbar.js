import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="container-fluid navbar d-flex">
        <div className="my-resume col-sm-6">
          <Link to="/">
            <p>MY RESUME</p>
          </Link>
        </div>
        <div className="col-sm-6 d-flex mr-3">
          <div className="nav-coloum ">
            <Link to="/About">
              <p>About</p>
            </Link>
          </div>
          <div className="nav-coloum">
            <Link to="/skills">
              <p>Skills</p>
            </Link>
          </div>
          <div className="nav-coloum">
            <Link to="/experiences">
              <p>Experiance</p>
            </Link>
          </div>
          <div className="nav-coloum">
            <Link to="/educations">
              <p>Education</p>
            </Link>
          </div>
          <div className="nav-coloum">
            <Link to="/portfolios">
              <p>Portfolios</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
