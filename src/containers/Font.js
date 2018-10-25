import React, { Component } from 'react';
import config from '../config.js';

class Font extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.font = this.props.font;
		this.countFonts = Object.values(this.font.fonts).length;
		this.designers = '';
		this.designers += this.font.designers.map(name => {return (name + ' ')});
    this.divStyle = {
      fontFamily: 'Charmonman script=latin rev=2',
    };
	}

  render() {
    return (
      <li className="grid-list-tile">
      	<section className="font-preview-fonts-module fonts-module">
      		<h1 className="fonts-module-title">{this.font.family}</h1>
      		<h2 className="fonts-module-subtitle"> {this.designers}
      			<span> { '(' + this.countFonts }</span><span> {this.countFonts > 1 ? 'styles)':'style)'}</span>
      		</h2>
          <textarea style={{fontFamily:this.font.family}} defaultValue={config.word_example[1]} className="font-preview-text"></textarea>
      	</section>
      </li>
    );
  }
}

export default Font;