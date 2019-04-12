import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import	reducers from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import * as resources from './constants/resources/';

const store = createStore(reducers);


ReactDOM.render(

		<Provider store = {store}>
			<App songs={resources.songs} />
		</Provider>	, document.getElementById('root'));
registerServiceWorker();
