import React, { Component } from 'react';
import Font from './Font';
import '../css/fontList.css';
import { connect } from 'react-redux';
import config from '../config';
import ApiService from '../ApiService';

class ListFont extends Component {

	constructor(props) {
		super(props);
		this.fonts = undefined;
		this.categories = config.categories;
	}

	UNSAFE_componentWillMount() {
		this.fonts = this.getFonts(this.props.fonts, this.props.language, this.props.sorting, this.props.searching);
		this.setFontsCss(this.fonts);
	}

	shouldComponentUpdate(nextProps) {
	    if (
	    	this.props.language !== nextProps.language
	    	 || this.props.category.value !== nextProps.category.value 
	    	 || this.props.category.checked !== nextProps.category.checked
	    	 || this.props.sorting !== nextProps.sorting
	    	 || this.props.searching !== nextProps.searching
	    ) {
	    	this.fonts = this.getFonts(
	    		this.props.fonts, 
	    		nextProps.language, 
	    		nextProps.sorting, 
	    		nextProps.searching, 
	    		nextProps.category
	    	);
	    	this.setFontsCss(this.fonts);
	    	console.log('update');
	      	return true;
	    }
	    return false;
	}

	setFontsCss(fonts) {
		let subUrl = '';
		let firstItem = true;
		fonts.map(font => {
			if (firstItem) {
				subUrl += font.family.replace(' ', '+');
				firstItem = false;
			} else {
				subUrl += ':400%7C' + font.family.replace(/\s/g, "+"); 
			}
		});
		let url = ApiService.fontCss.url + subUrl + ApiService.fontCss.key;
		fetch(url).then(response => response.text()).then(data => {
	        let style = document.createElement('style');
			let content = document.createTextNode(data);
    		style.appendChild(content);
    		style.className = 'custome-style';
			document.getElementsByTagName('head')[0].appendChild(style);
		});
	}

	getFonts(fonts, language, sorting, searching, category = undefined) {
		console.log(searching);
		if (category) {
			if (category.checked) {
				if (this.categories.indexOf(category.value) === -1) {
					this.categories.push(category.value);
				}
			} else {
				let index = this.categories.indexOf(category.value);
				if (index !== -1) {
					this.categories.splice(index,1);
				}
			}
		}
		if (searching) {
			fonts = fonts.filter(font => {
				if (font.family.toLowerCase().includes(searching.toLowerCase())) {
			        return true;
			    }
			});
		}
		fonts = fonts.filter(font => {
			if (this.categories.indexOf(font.category) !== -1) {
				return true;
			} else {
				return false;
			}
		});
		if (language !== 'all') {
			fonts = fonts.filter(font => {return (font.subsets.includes(language.toLowerCase()))});
		}
		fonts = fonts.slice(0, 20);
		fonts = fonts.sort(function(a, b) {
			let valueA = a[sorting.toLowerCase()];
			let valueB = b[sorting.toLowerCase()];
			if (valueA > valueB) {
			    return 1;
			}
			if (valueA < valueB) {
			    return -1;
			}
			  	return 0;
			}
		);
		return fonts.slice(0, 20);
	}

	render() {
	  	let i = 0;
	    return (
	      <div className="font-list">
		      <ul className="grid-list-tiles">
		      {
		      	this.fonts.map(font => {
		      		return (
		      		<Font key={font.defaultSort} font={font} />
		      	)})
		      }
		      </ul>
	      </div>
	    );
	}
}


const mapStateToProps = (state) => {
    return {
        fonts: state.fonts,
        language: state.fillterFontByLanguage,
        category: state.fillterFontByCategories,
        sorting: state.sorting,
        searching: state.searching
    };
}

// const mapDispatchToProps = (dispatch) => {
// 	//ToDo
// }

export default connect(mapStateToProps)(ListFont);