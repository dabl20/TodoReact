import React from "react";

const AddBar = () => {
  const text = "Place for typing todo";
  const style = {
    fontSize: '24px'
  }

  return (
    <div>
      <input
        placeholder={text}
        style={style}
      />
    </div>
  );
};

export default AddBar;
