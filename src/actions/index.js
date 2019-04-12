import * as actionTypes from '../constants/actionTypes';
let nextTodoId = 0;
export const setCurrentMusic = id => { 
	return {
		type:actionTypes.SET_CURRENT_MUSIC,
		id
	}
}

export const setVolume = volume => {
	return {
		type:actionTypes.SET_VOLUME,
		volume

	}
}

export const setActive = active => {
	return {
		type:actionTypes.SET_ACTIVE,
		active

	}
}

export const visibleFilter = filter => {
	return {
		type:actionTypes.SET_VISIBILITY_FILTER,
		filter
	}
}

export const addSong = song => {
	return{
		type:actionTypes.SET_SONGS_LIST,
		song
	}
}

export const setProgress = progress => {
	return{
		type : actionTypes.SET_PROGRESS,
		progress
	}
}

export const setCurrentTime = time => {
	return{
		type : actionTypes.SET_CURRENT_TIME,
		time
	}
}

export const setPlaying = playing => {
	return {
		type : actionTypes.SET_PLAYING,
		playing
	}
}
