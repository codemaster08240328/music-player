import * as actionTypes from '../constants/actionTypes/';
const setCurrentTime = (state = "00:00", action)=>{
	switch (action.type){
		case actionTypes.SET_CURRENT_TIME:
			return action.time
			break;
		default:
			return state;
	}
}

export default setCurrentTime;