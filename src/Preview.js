import React, { Component } from 'react';
// import './Preview.scss';
import './index.scss';
import marked from 'marked';

class Preview extends Component {
	render() {
		return (
			<div>
				<h3 style={{ "fontSize": '22px' ,"marginLeft": '20px',"position": "relative","marginBottom": "65px" }}>Preview</h3>
				<div
					id="preview"
					style={{ "backgroundColor": 'lightgrey', "marginTop": "-60px" }}
					dangerouslySetInnerHTML={{ __html: marked(this.props.input) }}
				></div>
			</div>
		);
	}
}

export default Preview;
