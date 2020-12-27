import React from "react";
import s from "./style.module.css";
import Header from "../Header";
import TodoList from "../TodoList";
import AddBar from "../AddBar";

export default class App extends React.Component {
  render() {
    const data = [
      { id: 1, text: "Do it!" },
      { id: 2, text: "Do it!" },
      { id: 3, text: "Just Do it!", important: true },
      { id: 4, text: "Do it!" },
    ];
    return (
      <div className={s.App}>
        <Header />
        <TodoList todos={data} />
        <AddBar />
      </div>
    );
  }
}
