import React, { Component } from "react";
import Thumbnail from "../assests/image/thumbnail.jpg";
export class Header extends Component {
  render() {
    return (
      <header id="header ">
        <div className="homepage-hero-module">
          <div className="background-container">
           
            <div className="poster hidden"></div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="header-text">
                  {this.props.data.title}
                  <span></span>
                </h1>
                <p className="sub-text">
                  {this.props.data ? this.props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
