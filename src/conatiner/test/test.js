import React, { Component } from "react"

export default class extends Component {
  
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="https://www2.cs.uic.edu/~i101/SoundFiles/StarWars3.wav"></source>
        </audio>
      </div>
    )
  }
}