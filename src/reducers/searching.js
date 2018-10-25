const searching = (searchDefault = false, action) => {
	console.log(action);
	switch (action.type) {
		case 'FILLTER_SEARCH':
			return action.value;
		default:
			return searchDefault;
	}
}

export default searching;