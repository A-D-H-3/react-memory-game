import React, { Component } from "react";
import "./MemoryCard.css";

class MemoryCard extends Component {
  clickHandler() {
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  constructor() {
    super();
    this.state = { isFlipped: false };
  }

  render() {
    let memoryCardInnerClass = this.state.isFlipped
      ? "MemoryCardInner flipped"
      : "MemoryCardInner";

    return (
      <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
        <div className={memoryCardInnerClass}>
          {/* <div className="MemoryCardInner"> */}
          <div className="MemoryCardBack">
            <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"></img>
          </div>
          <div className="MemoryCardFront">∆</div>
        </div>
      </div>
    );
  }
}

export default MemoryCard;
