import React from "react";

export class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input);

    this.setState({
      input: '',
    });
  }

  removeMessage() {
    this.props.deleteMessage();
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          { this.props.messages.map((msg, i) => {
            return (
              <div>
                <li key={i}>
                  {msg}
                  <button onClick={this.removeMessage}>X</button>
                </li>

              </div>
            );
          }) }
        </ul>
      </div>
    );
  }
}
