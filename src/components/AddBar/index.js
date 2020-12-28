import React from "react";
import s from "./style.module.css";

export default class AddBar extends React.Component {
  render() {
    const { addButtonClick } = this.props;

    return (
      <div>
        <input className={s.input} placeholder="Place for typing todo" />
        <button onClick={() => addButtonClick('some text')}>ADD</button>
      </div>
    );
  }
}
