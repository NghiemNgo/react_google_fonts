import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { loadState } from './database';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './components/App';

const persistedState = loadState();

render(
	<App db={ persistedState } />,
	document.getElementById('root')
);
