import React, { Component } from 'react';
import './index.scss';
import Markdowneditor from './Markdowneditor';
import Preview from './Preview';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![Desktop w/ Image](https://www.iconfinder.com/data/icons/online-communication-v1/64/data_web_online-128.png)
`,
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
			<div className="row">
				{/* <header className="App-header">
      </header> */}
				<Markdowneditor
					input={this.state.input}
					setInput={this.setInput}
					clearEditorAndPreview={this.clearEditorAndPreview}
				/>
				<Preview 
					input={this.state.input} />
			</div>
		);
	}
}

export default App;
