import React, { Component } from 'react';
import './index.scss';
import marked from 'marked';

// Preview component - It can also be a simple functional component as there are no state for it separately
class Preview extends Component {
	render() {
		return (
			<div>
				{/* inline styling */}
				<h3
					style={{
						fontSize: '22px',
						marginLeft: '20px',
						position: 'relative',
						marginBottom: '65px',
					}}
				>
					Preview
				</h3>
				<div
					id="preview"
					style={{ backgroundColor: 'lightgrey', marginTop: '-60px' }}
					dangerouslySetInnerHTML={{ __html: marked(this.props.input) }}
				></div>
			</div>
		);
	}
}

export default Preview;
