import * as actionTypes from '../constants/actionTypes/';
const defaultState = [{
	
	url: 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
    art_name: 'Redfoo',
    song_name: 'New Thang',
    duration:"03:46"
}];
const addSong = (state = defaultState, action)=>{
	switch (action.type){
		case actionTypes.SET_SONGS_LIST:
			return [...state,{
				
				url : action.song.url,
				art_name : action.song.art_name,
				song_name : action.song.song_name,
				duration : action.song.duration
			}];
			break;
		default:
			return state;

			

	}
}
export default addSong;