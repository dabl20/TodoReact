import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddBar from "./components/AddBar";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <AddBar />
    </div>
)}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
