import * as actionTypes from '../constants/actionTypes/';
const setPlaying = (state = 'false', action)=>{
	switch (action.type){
		case actionTypes.SET_PLAYING:
			return action.playing;
			break;
		default:
			return state;
	}
}

export default setPlaying;