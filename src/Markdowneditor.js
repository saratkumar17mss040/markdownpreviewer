import React, { Component } from 'react';
import './index.scss';
// Markdowneditor component - It can also be a simple functional component as there are no state for it separately
class Markdowneditor extends Component {
	render() {
		return (
			<div className="input">
				{/* inline styling */}
				<h3 style={{ fontSize: '22px' }}>Markdown editor</h3>
				<textarea
					style={{ marginTop: '20px' }}
					id="editor"
					value={this.props.input}
					onChange={this.props.setInput}
					cols="120"
					rows="30"
				>
					{this.props.input}
				</textarea>
				<button
					className="btn"
					type="button"
					id="btn-clear"
					onClick={this.props.clearEditorAndPreview}
				>
					clear
				</button>
			</div>
		);
	}
}

export default Markdowneditor;
