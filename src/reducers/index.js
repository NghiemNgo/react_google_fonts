import { combineReducers } from 'redux';
import fillterFontByLanguage from './fillterFontByLanguage';
import fonts from './fonts';
import fillterFontByCategories from './fillterFontByCategories';
import sorting from './sorting';
import searching from './searching';

export default combineReducers({
	fillterFontByLanguage,
	fillterFontByCategories,
	sorting,
	fonts,
	searching
});