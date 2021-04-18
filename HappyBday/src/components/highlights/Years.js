import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "../utils/MyButton";

class Years extends Component {
  state = {
    yearStart: 0,
    yearEnd: 3,
  };

  porcentage = () => {
    if (this.state.yearStart < this.state.yearEnd) {
      this.setState({ yearStart: this.state.yearStart + 1 });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 300);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="years_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="years_porcentage">
              <span>{this.state.yearStart}</span>
              <span>years</span>
            </div>
          </Fade>

          <Slide right>
            <div className="years_description">
              <h3>Will celebrate her Bday on the 6th of SEPTEMBER</h3>
              <p>Lorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum</p>

              <MyButton
                text="Confirm presense"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"//TODO change link!
              />

            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Years;
