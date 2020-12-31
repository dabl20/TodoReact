import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddBar from "./components/AddBar";
import InfoBar from "./components/InfoBar";

export default class App extends React.Component {
  countId = 0;

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

  switchPropKey(arr, id, nameKey) {
    const idEl = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idEl];
    const newItem = { ...oldItem, [nameKey]: !oldItem[nameKey] };

    return [...arr.slice(0, idEl), newItem, ...arr.slice(idEl + 1)];
  }

  doneItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.switchPropKey(data, id, "done"),
      };
    });
  };

  importantItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.switchPropKey(data, id, "important"),
      };
    });
  };

  render() {
    const { data } = this.state;

    const doneInfo = data.filter((el) => el.done).length;
    const todoInfo = data.length - doneInfo;

    return (
      <article className='container'>
        <Header/>
        <InfoBar todo={todoInfo} done={doneInfo} />
        <TodoList
          todos={data}
          delButtonClick={this.delItem}
          onTextClick={this.doneItem}
          impButtonClick={this.importantItem}
        />
        <AddBar
          addItemText={this.addItem}
        />
      </article>
    );
  }
}
