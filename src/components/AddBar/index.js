import React from "react";
import s from "./style.module.css";

export default class AddBar extends React.Component {
  render() {
    const text = "Place for typing todo";

    return (
      <div>
        <input className={s.input} placeholder={text} />
      </div>
    );
  }
}
