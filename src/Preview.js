import React, { Component } from 'react';
import './Preview.scss';
import marked from 'marked';

class Preview extends Component {
	render() {
		return (
			<div id="preview">
                <p dangerouslySetInnerHTML={{ __html: marked(this.props.input) }}></p>
			</div>
		);
	}
}

export default Preview;
