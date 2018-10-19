import config from '../config';
const fillterFontByCategories = (categoriesDefault = config.categories, action) => {
	switch (action.type) {
		case 'FILLTER_CATEGORIES':
			return {value: action.category, checked: action.checked};
		default:
			return categoriesDefault;
	}
}

export default fillterFontByCategories;