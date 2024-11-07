import React, { Component } from "react";

import About from "./About";
import Educations from "./Educations";
import Experiences from "./Experiences";
import Portfolios from "./Portfolios";
import Profile from "./Profile";
import Skills from "./Skills";

export default class Home extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 s12 m3">
              <Profile />
            </div>
            <div className="col s12 m9">
              <About />
              <Skills />
              <Experiences />
              <Educations />
              <Portfolios />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
