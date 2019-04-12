import * as actionTypes from '../constants/actionTypes/';
const setVolume = (state = 0.5, action)=>{
	switch (action.type){
		case actionTypes.SET_VOLUME:
			return action.volume;
			break;
		default:
			return state;
	}
}

export default setVolume;