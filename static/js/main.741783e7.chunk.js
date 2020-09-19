(this.webpackJsonpmarkdownpreviewer=this.webpackJsonpmarkdownpreviewer||[]).push([[0],{10:function(e,t,n){e.exports=n(15)},15:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(8),o=n.n(i),s=(n(6),n(1)),l=n(2),c=n(5),u=n(4),d=n(3),p=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"input"},a.a.createElement("h3",{style:{fontSize:"22px"}},"Markdown editor"),a.a.createElement("textarea",{style:{marginTop:"20px"},id:"editor",value:this.props.input,onChange:this.props.setInput,cols:"120",rows:"30"},this.props.input),a.a.createElement("button",{className:"btn",type:"button",id:"btn-clear",onClick:this.props.clearEditorAndPreview},"clear"))}}]),n}(r.Component),h=n(9),m=n.n(h),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h3",{style:{fontSize:"22px",marginLeft:"20px",position:"relative",marginBottom:"65px"}},"Preview"),a.a.createElement("div",{id:"preview",style:{backgroundColor:"lightgrey",marginTop:"-60px"},dangerouslySetInnerHTML:{__html:m()(this.props.input)}}))}}]),n}(r.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![Desktop w/ Image](https://www.iconfinder.com/data/icons/online-communication-v1/64/data_web_online-128.png)\n"},e.setInput=e.setInput.bind(Object(c.a)(e)),e.clearEditorAndPreview=e.clearEditorAndPreview.bind(Object(c.a)(e)),e}return Object(l.a)(n,[{key:"setInput",value:function(e){this.setState({input:e.target.value})}},{key:"clearEditorAndPreview",value:function(){this.setState({input:""})}},{key:"render",value:function(){return a.a.createElement("div",{className:"row"},a.a.createElement(p,{input:this.state.input,setInput:this.setInput,clearEditorAndPreview:this.clearEditorAndPreview}),a.a.createElement(f,{input:this.state.input}),a.a.createElement("footer",{style:{backgroundColor:"#000",padding:"15px",marginTop:"25px"}},a.a.createElement("p",{style:{color:"#fff",fontSize:"18px",textAlign:"center"}},"Made with",a.a.createElement("span",{role:"img","aria-label":"green-heart-emoji"},"\ud83d\udc9a"),"by sarath and the github link for the repo - click",a.a.createElement("a",{style:{color:"green",marginLeft:"10px"},href:"https://github.com/saratkumar17mss040/markdownpreviewer"},"here!"))))}}]),n}(r.Component);o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(b,null)),document.getElementById("root"))},6:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.741783e7.chunk.js.map