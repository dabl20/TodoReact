import React from "react";
import s from "./style.module.css";
import TodoListItem from "../TodoListItem";

export default class TodoList extends React.Component {
  render() {
    const {todos} = this.props
    const liElements = todos.map((el) => {
      const { id, ...elProps } = el;

      return (
        <li key={id} className={s.li}>
          <TodoListItem {...elProps} />
        </li>
      );
    });

    return (
      <div>
        <ul>{liElements}</ul>
      </div>
    );
  }
}
