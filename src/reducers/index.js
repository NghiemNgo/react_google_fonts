import { combineReducers } from 'redux';
import fillterFontByLanguage from './fillterFontByLanguage';
import fonts from './fonts';
import fillterFontByCategories from './fillterFontByCategories';
import sorting from './sorting';

export default combineReducers({
	fillterFontByLanguage,
	fillterFontByCategories,
	sorting,
	fonts
});