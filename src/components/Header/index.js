import React from "react";
import s from "./style.module.css";

export default class Header extends React.Component {
  render() {
    return (
      <header className={s.header}>
        <h1>Todo React</h1>
      </header>
    );
  }
}
