import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddBar from "./components/AddBar";

const App = () => {
  const data = [
    { id:1, text: "Do it!" },
    { id:2, text: "Do it!" },
    { id:3, text: "Just Do it!", important: true },
    { id:4, text: "Do it!" },
  ];
  return (
    <div className="App">
      <Header />
      <TodoList todos={data} />
      <AddBar />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
