import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { editTodo, cancelTodo, fetchList } from "./actions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
