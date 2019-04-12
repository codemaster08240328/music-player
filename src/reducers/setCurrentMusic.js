import * as actionTypes from '../constants/actionTypes/';
const setCurrentMusic = (state = 0, action)=>{
	switch (action.type){
		case actionTypes.SET_CURRENT_MUSIC:
			return action.id
			break;
		default:
			return state;
	}
}

export default setCurrentMusic;