import React, { Component } from 'react';
import ListFont from '../containers/ListFont';
import FillterFont from '../containers/FillterFont';
import { getLanguages } from '../actions/index';

class App extends Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className="App">
      	<div className="row">
      		<div className="col-md-10">
      			<ListFont />
      		</div>
      		<div className="col-md-2">
      			<FillterFont />
      		</div>
	    </div>
      </div>
    );
  }
}

export default App;