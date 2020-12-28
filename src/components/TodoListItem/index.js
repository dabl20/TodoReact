import React from "react";
import s from "./style.module.css";

export default class TodoListItem extends React.Component {
  state = {
    done: false,
  };

  onTextClick = () => {
    console.log(this.props.text);
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  render() {
    const { important, text } = this.props;
    const { done } = this.state;

    let style = {
      color: important ? "blue" : "black",
    };

    if (done) {
      console.log("done");
      style.textDecorationLine = "line-through";
    }

    return (
      <span className={s.item} style={style} onClick={this.onTextClick}>
        {text}
      </span>
    );
  }
}
