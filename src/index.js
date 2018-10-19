import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadState } from './database';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
