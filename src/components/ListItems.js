import React from 'react';
import PlayListItem from './PlayListItem';
import { connect } from 'react-redux';

class ListItems extends React.Component{
	playAudio(id){
		this.props.onPlay(id);
	}
	render(){
		let audioItems;
		let id=-1;
		//console.log(this.props.current);
		if (this.props.items){
			audioItems = this.props.items.map((item) => {
				
				id++;
				var addclass = "";
				var curtime = "00:00";
				// console.log('currentMusicId//////////',this.props.currentMusicId);
				if(id === this.props.currentMusicId){ addclass = "selectedMusic"; curtime = this.props.currentMusicTime;}
				if ((item.song_name).toLowerCase().includes((this.props.filterText)) || (item.art_name).toLowerCase().includes((this.props.filterText))){
					return (
						<PlayListItem key={item.song_name} item = {item} additionalClass={addclass} curtime = {curtime} number = {id} onPlay={this.playAudio.bind(this)}/>
					);
				}
				
			});
		}
		return(
			<div className="audioList">
				{audioItems}
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		currentMusicId:getCurrentMusicId(state),
		currentMusicTime:getCurrentMusicTime(state),
	}
}
function getCurrentMusicId(state){
	return state.setCurrentMusic;
}
function getCurrentMusicTime(state){
	return state.setCurrentTime;
}
export default connect(mapStateToProps)(ListItems);