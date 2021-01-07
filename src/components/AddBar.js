import React from "react";
import s from "./style.module.css";

export default class AddBar extends React.Component {
  state = {
    text: "",
  };

  onChangeInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.addItemText(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input
            className={s.input}
            placeholder="Place for typing todo"
            onChange={this.onChangeInput}
            value={this.state.text}
          />
          <button>ADD</button>
        </form>
      </div>
    );
  }
}
