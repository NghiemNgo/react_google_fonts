import React, { Component } from 'react';
import Font from './Font';
import '../css/fontList.css';

class ListFont extends Component {

	constructor(props) {
		super(props);
		this.fonts = undefined;
	}

	UNSAFE_componentWillMount() {
		this.fonts = this.props.fonts;
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

export default ListFont;