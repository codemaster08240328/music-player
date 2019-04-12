import React, { Component } from 'react';

class Volume extends Component {
  constructor(props){
    super(props)
    this.state = { volume : props.value }
  }
  setVolume(e){
    const target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
    const width = target.clientWidth;
    const rect = target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const duration = 1;
    var currentVolume = (duration * offsetX) / width;
    //const progress = (currentVolume*100) / duration;

    this.setState({
      volume: currentVolume,
    });
    this.props.onVolumeChange(currentVolume);
  }

  render() {
    return (
      <div className="player-progress-container volume-control" onClick={this.setVolume.bind(this)}>
        <span className="player-progress-value" style={{width: this.state.volume*100 + '%'}}></span>
      </div>


    );
  }
}


export default Volume;
