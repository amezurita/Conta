"use strict";
import React, { Component } from "react";
import sample from "../Assets/Landing.mp4";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: "../Assets/Landing.mp4"
    };
  }

  render() {
    return (
      <>
        <video className="videoTag" autoPlay loop muted style={{width:"100%", height:"100%", objectFit: "fill"}}>
          <source src={sample} type="video/mp4" />
        </video>
      </>
    );
  }
}

export default Video;
