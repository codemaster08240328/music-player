import React from 'react';
import Filter from './Filter';
import { connect } from 'react-redux';
import { addSong } from '../actions/';

class PlayList extends React.Component{
	constructor(props){
		super(props);
		console.log(props.state.setCurrentMusic);
	}
	render(){
		return(
			<div className="searchPanel">
            	<Filter current={this.props.state.setCurrentMusic} songs = {this.props.state.addSong} curtime = {this.props.state.setCurrentTime}/*onPlay={this.handleplayAudio.bind(this)}*//>
          	</div>
		);
	}
}

// function mapDispatchToProps(dispatch){
// 	return{
// 		onclick : song=>{
// 			dispatch(addSong(song));
// 		}
// 	};
// }

function mapStateToProps(state){
	
	return{
		state:state
	}
	
}

export default connect(mapStateToProps)(PlayList);