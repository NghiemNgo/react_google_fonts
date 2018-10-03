import React, { Component } from 'react';
import ListFont from '../containers/ListFont';

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.setState(() => {
			return {
				'fonts': this.props.db,
			};
		});
	}

	getFont() {
		return this.state.fonts.slice(0, 20);;
	}

  render() {
    return (

      <div className="App">
	      <ListFont fonts={this.getFont()} />
      </div>
    );
  }
}

export default App;