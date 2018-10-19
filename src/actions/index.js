
export const fillterByLanguage = (language) => ({
	type: 'FILLTER_LANGUAGES',
	language
});

export const fillterByCategories = (category, checked) => ({
	type: 'FILLTER_CATEGORIES',
	'category': category,
	'checked': checked
});

export const sorting = (value) => ({
	type: 'FILLTER_SORT',
	value: value
});