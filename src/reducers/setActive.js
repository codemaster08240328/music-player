import * as actionTypes from '../constants/actionTypes/';
const setActive = (state = false, action)=>{
	switch (action.type){
		case 'SET_ACTIVE':
			return action.active
			break;
		default:
			return state;
	}
}

export default setActive;