import config from '../config.js';
const sorting = (sortDefault = config.sorting[0].value, action) => {
	console.log(action);
	switch (action.type) {
		case 'FILLTER_SORT':
			return action.value;
		default:
			return sortDefault;
	}
}

export default sorting;