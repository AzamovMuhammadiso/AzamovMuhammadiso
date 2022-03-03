import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const AddList = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const AddTodo = () => {
    setItems((e) => {
      return [...e, input];
    });
    setInput("");
  };

  const DeleteTodo = (id) => {
    setItems((e) => {
      return e.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App container d-flex justify-content-center row">
      <div className="text-title d-flex align-items-center justify-content-center ">
        <h1 className="text-warning fs-1">Todo List</h1>
      </div>
      <div className="container text-input my-3 d-flex align-items-center justify-content-center">
        <input
          type="text"
          className="px-2"
          placeholder="write text..."
          value={input}
          onChange={AddList}
        />
        <div className="btn-group d-block mx-3">
          <div
            className="btn px-3 py-1 text-white text-align-center justify-content-center bg-success"
            onClick={AddTodo}
          >
            Add Todo
          </div>
        </div>
      </div>
      {items.map((item, index) => {
        return (
          <div
            key={index + 1}
            className="container item-container d-flex align-items-center justify-content-center"
          >
            <h3 className="item-text text-warning col-md-8">{item}</h3>
            <div className="btn-group col-md-3">
              <button className="px-3 py-1 text-white bg-danger" onClick={() => DeleteTodo(index)}>Add Todo</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
