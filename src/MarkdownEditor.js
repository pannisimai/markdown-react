import React, { Component } from "react";
import Remarkable from "remarkable";
let md = new Remarkable();

export class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello **World**!" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  getRawMarkup() {
    const md = new Remarkable();
    return { __html: md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h2>Input</h2>
        <h3>Enter some text</h3>
        <textarea
          rows="4"
          cols="50"
          defaultValue={this.state.value}
          onChange={this.handleChange}
        />
        <h2>Output</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

export default MarkdownEditor;
