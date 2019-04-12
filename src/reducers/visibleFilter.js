import * as actionTypes from '../constants/actionTypes/';
const visibleFilter = (state = '', action)=>{
	switch (action.type){
		case actionTypes.SET_VISIBILITY_FILTER:
			return action.filter;
			break;
		default:
			return state;
	}
}

export default visibleFilter;