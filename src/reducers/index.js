import { combineReducers } from 'redux';
import addSong from './addSong';
import setCurrentMusic from './setCurrentMusic';
import setCurrentTime from './setCurrentTime';
import setProgress from './setProgress';
import setVolume from './setVolume';
import visibleFilter from './visibleFilter';

const reducers = combineReducers({
	addSong,
	setVolume,
	setProgress,
	setCurrentTime,
	setCurrentMusic,
	visibleFilter
});

export default reducers;