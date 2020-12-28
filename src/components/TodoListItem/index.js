import React from "react";
import s from "./style.module.css";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
    important: false,
  };

  onTextClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  impButtonClick = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { text, delButtonClick } = this.props;
    const { important, done } = this.state;

    const styleClasses = [s.item];

    if (done) {
      styleClasses.push(s.done);
    }

    if (important) {
      styleClasses.push(s.important);
    }

    return (
      <span>
        <span className={styleClasses.join(" ")} onClick={this.onTextClick}>
          {text}
        </span>
        <button onClick={delButtonClick}>DEL</button>
        <button onClick={this.impButtonClick}>IMP</button>
      </span>
    );
  }
}
