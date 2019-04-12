import React from 'react';
import Volume from './Volume';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { setProgress } from '../actions/';
import { setCurrentTime } from '../actions/';
import { setCurrentMusic } from '../actions/';
import { setPlaying } from '../actions/';
import { connect } from 'react-redux';
import Filter from './Filter';
import * as $ from 'jquery';

class PlayerPanel extends React.Component{
	static propTypes = {
	    autoplay: PropTypes.bool,
	    onTimeUpdate: PropTypes.func,
	    onEnded: PropTypes.func,
	    onError: PropTypes.func,
	    onPlay: PropTypes.func,
	    onPause: PropTypes.func,
	    onPrevious: PropTypes.func,
	    onNext: PropTypes.func,
	};
	  
	static defaultProps = {
	    onTimeUpdate: () => {},
	    onEnded: () => {},
	    onError: () => {},
	    onPlay: () => {},
	    onPause: () => {},
	    onPrevious: () => {},
	    onNext: () => {},
	};

	constructor(props){
		super(props);
		this.state = {
			playing : !!props.autoplay
		}
		this.selectedId = -1;
		// console.log('withduration////////////-------',props.state);
 

	    this.audio = document.createElement('audio');
	    props.setPlaying(!!props.autoplay);
	    var songs = props.state.addSong;
	    var currentMusicId = props.state.setCurrentMusic;
	    this.audio.src = songs[currentMusicId].url;
	    console.log(this.audio.src);
	    //this.audio.autoplay = 'true';

	    this.audio.addEventListener('timeupdate', e => {
	      this.updateProgress();

	      props.onTimeUpdate(e);
	    });
	    this.audio.addEventListener('ended', e => {
	      this.next();

	      props.onEnded(e);
	    });
	    this.audio.addEventListener('error', e => {
	      this.next();

	      props.onError(e);
	    });
	    //this.audio.volume = this.state.volume;
	}

	setProgress = e => {
	    const target = e.target.nodeName === 'SPAN' ? e.target.parentNode : e.target;
	    const width = target.clientWidth;
	    const rect = target.getBoundingClientRect();
	    const offsetX = e.clientX - rect.left;
	    const duration = this.audio.duration;
	    const currentTime = (duration * offsetX) / width;
	    const progress = (currentTime * 100) / duration;

	    this.audio.currentTime = currentTime;

	    this.props.setProgress(progress);

	    this.play();
	};
	formatTime(s){
	    var total_seconds = Math.floor(s);
	    var hours = Math.floor( total_seconds / 3600 );
	    var minutes = Math.floor( total_seconds / 60 ) - hours*60; 
	    var seconds = total_seconds - hours*3600 - minutes*60;
	    if(hours)
	      return hours + ':' + this.forma2Num(minutes) + ':' + this.forma2Num(seconds);
	    return this.forma2Num(minutes) + ':' + this.forma2Num(seconds);
	}
	  
	forma2Num(num){
	    var str = num + "";
	    if(str.length == 1){
	      return '0'+str;
	    }
	    if(str.length == 0){
	      return '00';
	    }
	    return str;
	}

	updateProgress = () => {
	    const { duration, currentTime } = this.audio;
	    const progress = (currentTime * 100) / duration;
	    var curtime = this.formatTime(currentTime);
	    this.props.setProgress(progress);
	    this.props.setCurrentTime(curtime);
	    
	};



	play = () => {
		
	    this.setState({
	    	playing:true,
	    });
	    this.audio.play();

	    this.props.onPlay();
	};

	pause = () => {
	    this.setState({
	      playing: false,
	    });

	    this.audio.pause();

	    this.props.onPause();
	};

	toggle = () => {
		console.log('pressed');
		//console.log(this.state.playing);
		var playing = this.state.playing;
		playing ? this.pause() : this.play();
	}

	next = () => {
	   	var current = this.props.state.setCurrentMusic;
		var songs = this.props.state.addSong;
	    const total = songs.length;
	    const newSongToPlay = current < total - 1 
	                            ? current + 1 
	                            : 0;
	    const active = songs[newSongToPlay];

	    this.props.setCurrentMusic(newSongToPlay);
	    this.props.setProgress(0);
	    // this.setState({
	    //   current: newSongToPlay,
	    //   active: active,
	    //   progress: 0,
	    // });

	    this.audio.src = active.url;
	    this.play();
	    this.props.onNext();
	};

	previous = () => {
		var current = this.props.state.setCurrentMusic;
		var songs = this.props.state.addSong;
	    const total = songs.length;
	    const newSongToPlay = current > 0 ? current - 1 : total - 1;
	    var active = songs[newSongToPlay];
	    this.props.setCurrentMusic(newSongToPlay);
	    this.props.setProgress(0);
	    // this.setState({
	    //   current: newSongToPlay,
	    //   active: active,
	    //   progress: 0,
	    // });

	    this.audio.src = active.url;
	    this.play();
	    this.props.onPrevious();
	};

	handleplayAudio(id){
	    if (id === this.selectedId){
	      $("#playpauseBtn").trigger('click');
	      return;
	    }
	    this.selectedId = id;
	    var songs = this.props.state.addSong;
	    const newSongToPlay = id;
	    const active = songs[newSongToPlay];
	    this.props.setCurrentMusic(newSongToPlay);
	    this.props.setProgress(0);
	    // this.setState({
	    //   current: newSongToPlay,
	    //   active: active,
	    //   progress: 0,
	    // });

	    this.audio.src = active.url;
	    this.play();
	}

	handleVolumChange(changedvolume){
	    this.audio.volume = changedvolume;
    }

	render(){
		// var active = this.props.state.addSong[this.props.state.setCurrentMusic];
		// console.log('active//////',active);
		// this.audio.src = active
		const playPauseClass = classnames({
	      'fa': true,
	      'fa-play': !this.state.playing,
	      'fa-pause': this.state.playing,
	    });
	    const progress = this.props.state.setProgress;
	    // console.log("progress////",progress);
		return(
			<div className="playerContainer">
			<div className="controlPanel">
	            <div className="controlBtns col-md-2">
	                <button
	                  onClick={this.previous}
	                  className="player-btn medium col-md-6"
	                  title="Previous Song"
	                >
	                  <i className="fa fa-step-backward"></i>
	                </button>
	                <button
	                  onClick={this.toggle}
	                  className="player-btn medium col-md-6"
	                  id="playpauseBtn"
	                  title="Play/Pause"
	                >
	                  <i className={playPauseClass}></i>
	                </button>
	                <button
	                  onClick={this.next}
	                  className="player-btn medium col-md-6"
	                  title="Next Song"
	                >
	                  <i className="fa fa-step-forward"></i>
	                </button>
	            </div>

	            <div className="status col-md-7">
	              <div className="player-progress-container" onClick={e => this.setProgress(e)}>
	                <span className="player-progress-value" style={{width: progress + '%'}}></span>
	              </div>
	            </div>
	            <div className="volumepanel col-md-3">
	               <Volume value = {this.props.state.setVolume} onVolumeChange = {this.handleVolumChange.bind(this)}/>
	            </div>
	         </div>
	        <div className="searchPanel">
            	<Filter current={this.props.state.setCurrentMusic} songs = {this.props.state.addSong} curtime = {this.props.state.setCurrentTime} onPlay={this.handleplayAudio.bind(this)}/>
          	</div>
          </div>
		
		)
	}
}

const mapDispatchToProps = dispatch => {
  return{
    setProgress:progress=>{
      dispatch(setProgress(progress));
    },
    setCurrentTime:curtime=>{
      dispatch(setCurrentTime(curtime));
    },
    setCurrentMusic:id=>{
    	dispatch(setCurrentMusic(id));
    },
    setPlaying:playing=>{
    	dispatch(setPlaying(playing));
    }
  }
}

function mapStateToProps(state){
  
  return{
    state:state
  }
  

}

export default connect(mapStateToProps,mapDispatchToProps)(PlayerPanel);
