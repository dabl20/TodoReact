import React from "react";
import s from "./style.module.css";
import Header from "../Header";
import TodoList from "../TodoList";
import AddBar from "../AddBar";

export default class App extends React.Component {
  state = {
    data: [
      { id: 1, text: "Do it!" },
      { id: 2, text: "Do it!" },
      { id: 3, text: "Just Do it!", important: true },
      { id: 4, text: "Do it!" },
    ],
  };

  delItem = (id) => {
    this.setState(({ data }) => {
      const idEl = data.findIndex((el) => el.id === id);

      const newArr = [...data.slice(0, idEl), ...data.slice(idEl + 1)];

      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className={s.App}>
        <Header />
        <TodoList todos={this.state.data} delButtonClick={this.delItem} />
        <AddBar />
      </div>
    );
  }
}
