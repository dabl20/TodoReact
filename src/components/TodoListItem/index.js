import React from "react";
import s from "./style.module.css";

const TodoListItem = ({ text, important = false }) => {
  const style = {
    color: important ? "blue" : "black",
  };
  return <span style={style}>{text}</span>;
};

export default TodoListItem;
