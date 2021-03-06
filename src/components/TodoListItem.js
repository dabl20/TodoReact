import React from "react";
import s from "./style.module.css";

export default class TodoListItem extends React.Component {
  render() {
    const {
      text,
      delButtonClick,
      onTextClick,
      impButtonClick,
      important,
      done,
    } = this.props;

    const styleClasses = [s.item];

    if (done) {
      styleClasses.push(s.done);
    }

    if (important) {
      styleClasses.push(s.important);
    }

    return (
      <div className="p-3 border bg-light">
        <button onClick={delButtonClick}>DEL</button>
        <button onClick={impButtonClick}>IMP</button>
        <span className={styleClasses.join(" ")} onClick={onTextClick}>
          {text}
        </span>
      </div>
    );
  }
}
