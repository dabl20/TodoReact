import React from "react";

export default class InfoBar extends React.Component {
  render() {
    const { todo, done } = this.props;
    return (
      <span>
        {todo} active task and {done} done
      </span>
    );
  }
}
