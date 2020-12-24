import React from "react";
import s from "./style.module.css";

const AddBar = () => {
  const text = "Place for typing todo";
  
  return (
    <div>
      <input
        className={s.input}
        placeholder={text}
      />
    </div>
  );
};

export default AddBar;
