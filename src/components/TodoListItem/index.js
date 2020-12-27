import React from "react";
import s from "./style.module.css";

export default class TodoListItem extends React.Component {
  render() {
    const { important, text } = this.props;

    const style = {
      color: important ? "blue" : "black",
    };
    return (
      <span className={s.item} style={style}>
        {text}
      </span>
    );
  }
}
