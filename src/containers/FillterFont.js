import React, { Component } from 'react';
import config from '../config.js';
import '../css/fillterFont.css';
import ApiService from '../ApiService.js';
import { connect } from 'react-redux';
import { fillterByLanguage, fillterByCategories, sorting } from '../actions';

class FillterFont extends Component {
	constructor(props) {
		super(props);
	}

  componentWillMount() {
    this.listLanguage = config.languages.map(language =>
      <option key={language}>{language}</option>
    );
    this.categories = config.categories.map(category => (
      <div className="form-check" key={category}>
        <input type="checkbox" value={category} className="form-check-input" onChange={(e) => {this.props.onChangeCategory(e)}} defaultChecked={true} />
        <label className="form-check-label" htmlFor={category}>{category}</label>
      </div>
    ));
      
    this.sortList = config.sorting.map((item) => (
      <option key={item.value} value={item.value}>{item.title}</option>
    ));
  }

  componentDidMount () {

  }

  render() {
    return (
      <div>
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
              <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fa fa-search text-white" aria-hidden="true"></i></span>
          </div>
          <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
        </div>

        <div className="font-category">
          {this.categories}
        </div>

        <div className="form-group">
          <label htmlFor="sort-font">Sorting</label>
          <select className="form-control" id="sort-font" onChange={(e) => {this.props.onSorting(e)}}>
            {this.sortList}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="list-languages">Languages</label>
          <select className="form-control" onChange={(e) => {this.props.onChange(e)}} id="list-languages">
            <option value='all'>All Languages</option>
            {this.listLanguage}
          </select>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
      onChange: (e) => { dispatch(fillterByLanguage(e.target.value)); },
      onChangeCategory: (e) => { dispatch(fillterByCategories(e.target.value, e.target.checked));},
      onSorting: (e) => {dispatch(sorting(e.target.value));}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FillterFont);