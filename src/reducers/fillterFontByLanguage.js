
const fillterFontByLanguage = (languageDefault = 'all', action) => {
	switch (action.type) {
		case 'FILLTER_LANGUAGES':
			return action.language;
		default:
			return languageDefault;
	}
}

export default fillterFontByLanguage;