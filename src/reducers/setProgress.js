import * as actionTypes from '../constants/actionTypes/';
const setProgress = (state = 0, action)=>{
	switch (action.type){
		case actionTypes.SET_PROGRESS:
			return action.progress;
			break;
		default:
			return state;
	}
}

export default setProgress;