import React from "react";
import s from "./style.module.css";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
  render() {
    const { todos, delButtonClick, onTextClick, impButtonClick } = this.props;
    const liElements = todos.map((el) => {
      const { id, ...elProps } = el;

      return (
        <li key={id} className={s.li}>
          <TodoListItem
            {...elProps}
            delButtonClick={() => delButtonClick(id)}
            onTextClick={() => onTextClick(id)}
            impButtonClick={() => impButtonClick(id)}
          />
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
