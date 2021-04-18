import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Voting extends Component {
  state = {
    variants: [1, 2, 3],
    positions: ["variant 1", "variant 2", "variant 3"], //TODO change events variants
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts",
      "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    linkto: ["google.com", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.variants.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="voting_item">
          <div className="voting_inner_wrapper">
            <div className="voting_title">
              <span>${this.state.variants[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="voting_description">{this.state.desc[i]}</div>
            <div className="voting_buttons">
              <MyButton
                text="VOTE"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper voting_section">
          <h2>Voting</h2>

          <div className="voting_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Voting;
