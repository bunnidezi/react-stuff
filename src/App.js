import React, { useState } from "react";
import Form from "./Form.js";

const App = () => {
  return (
    <div
      className="App container"
      style={{ border: "1px solid black", padding: "1em" }}
    >
      <h1>Header is this</h1>
      <Form username="tuan" email="tuan@gmail" />
    </div>
  );
};

export default App;
