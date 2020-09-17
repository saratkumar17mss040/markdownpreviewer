import React, { Component } from 'react';
import './App.scss';
import Markdowneditor from './Markdowneditor';
import Preview from './Preview';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: `# React Markdown Previewer!

## This is a sub-heading...

Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://ashusingh.me), and
> Block Quotes!`,
		};
		this.setInput = this.setInput.bind(this);
		this.clearEditorAndPreview = this.clearEditorAndPreview.bind(this);
	}

	setInput(event) {
		this.setState({
			input: event.target.value,
		});
	}

	clearEditorAndPreview() {
		this.setState({
			input: '',
		});
	}

	render() {
		return (
			<div className="App">
				{/* <header className="App-header">
      </header> */}
				<Markdowneditor
					input={this.state.input}
					setInput={this.setInput}
					clearEditorAndPreview={this.clearEditorAndPreview}
				/>
				<Preview input={this.state.input} />
			</div>
		);
	}
}

export default App;
