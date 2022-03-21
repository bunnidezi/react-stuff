import Message from "./Message.js";

function App() {
  const greeting = "Hello";
  const name = "tuan";
  return (
    <div className="App">
      <Message greeting={greeting} name={name} />
    </div>
  );
}

export default App;
