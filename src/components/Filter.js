import React from 'react';
import SearchBar from './SearchBar';
import ListItems from './ListItems';
import { visibleFilter } from '../actions/';
import { connect } from 'react-redux';

class Filter extends React.Component{
    playAudio(id){
    	this.props.onPlay(id);
    }
	render(){
		return(
			<div>
		        <SearchBar />
		        <ListItems current={this.props.currentId} items = {this.props.songs} filterText={this.props.filterText} curtime = {this.props.currentTime} onPlay={this.playAudio.bind(this)}/>
	      	</div>
		);
	}
}

function mapStateToProps(state){
	return{
		currentId:getCurrentMusicId(state),
		songs:getSongs(state),
		currentTime:getCurrentTime(state),
		filterText:getFilter(state)

	}
}
function getCurrentMusicId(state){
	return state.setCurrentMusic;
}
function getSongs(state){
	return state.addSong;
}
function getCurrentTime(state){
	return state.setCurrentTime;
}
function getFilter(state){
	return state.visibleFilter;
}
export default connect(mapStateToProps)(Filter);


