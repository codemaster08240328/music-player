import React from 'react';
import { connect } from 'react-redux';
import { setCurrentMusic } from '../actions/';
import { setCurrentTime } from '../actions/';
class PlayListItem extends React.Component{
	playAudio(id){
		this.props.onPlay(id);
	}
	render(){
		return(
			<li className={"audioItem "+this.props.additionalClass} >
				<div onClick={this.playAudio.bind(this, this.props.number)} className= "track">
					<div className="artwork-overlay">
						<p>{this.props.item.art_name} - {this.props.item.song_name}</p>
					</div>
					<div className="artwork-time">
						<span className = "currtime">{this.props.curtime}</span> / <span className = 'duration'>{this.props.item.duration}</span>
					</div>
				</div>
			</li>

		)
		
	}
}
function mapDispatchToProps(dispatch){
	return{
		setCurrentMusic:id=>{
			dispatch(setCurrentMusic(id));
		},
		setCurrentTime:time=>{
			dispatch(setCurrentTime(time));
		}
	}
}
function mapStateToProps(state){
	return{
		state:state
	}
}
export default connect(null,mapDispatchToProps)(PlayListItem);