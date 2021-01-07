import React from "react";

export default class InfoBar extends React.Component {
  render() {
    const { todo, done } = this.props;
    return (
      <span className="d-flex justify-content-end">
        {todo} active task and {done} done
      </span>
    );
  }
}
