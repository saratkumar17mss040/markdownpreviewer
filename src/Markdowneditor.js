import React, { Component } from 'react';

class Markdowneditor extends Component {

	render() {
		return (
			<div id="editor">
                <h3>Markdown editor</h3>
                <button type="button" id="btn-clear" onClick={this.props.clearEditorAndPreview}>clear</button>
                <textarea value={this.props.input} onChange={this.props.setInput} cols="50" rows="50">
                </textarea>
			</div>
		);
	}
}

export default Markdowneditor;
