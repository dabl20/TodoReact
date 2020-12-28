import React from "react";
import s from "./style.module.css";
import Header from "../Header";
import TodoList from "../TodoList";
import AddBar from "../AddBar";

export default class App extends React.Component {
  countId = 1000;

  state = {
    data: [
      this.createItem("Do IT!"),
      this.createItem("Do IT!"),
      this.createItem("Do IT!"),
      this.createItem("Just Do IT!!!"),
      this.createItem("Do IT!"),
    ],
  };

  createItem(text) {
    return {
      id: this.countId++,
      text,
      done: false,
      important: false,
    };
  }

  delItem = (id) => {
    this.setState(({ data }) => {
      const idEl = data.findIndex((el) => el.id === id);
      const newArr = [...data.slice(0, idEl), ...data.slice(idEl + 1)];

      return {
        data: newArr,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      id: this.countId++,
      text: text,
      important: false,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];

      return {
        data: newArr,
      };
    });
  };

  doneItem = (id) => {
    console.log("doneItem", id);
    this.setState(({ data }) => {
      const idEl = data.findIndex((el) => el.id === id);

      const oldItem = data[idEl];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [...data.slice(0, idEl), newItem, ...data.slice(idEl + 1)];

      return {
        data: newArr,
      };
    });
  };
  importantItem = (id) => {
    console.log("importantItem", id);
    this.setState(({ data }) => {
      const idEl = data.findIndex((el) => el.id === id);

      const oldItem = data[idEl];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [...data.slice(0, idEl), newItem, ...data.slice(idEl + 1)];

      return {
        data: newArr,
      };
    });
  };

  render() {
    return (
      <div className={s.App}>
        <Header />
        <TodoList
          todos={this.state.data}
          delButtonClick={this.delItem}
          onTextClick={this.doneItem}
          impButtonClick={this.importantItem}
        />
        <AddBar addButtonClick={this.addItem} />
      </div>
    );
  }
}
