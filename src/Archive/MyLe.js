import React, { useState } from "react";
function App() {
  const [reaction, setReaction] = useState([
    { logo: "like", count: 0 },
    { logo: "unlike", count: 0 },
  ]);

  const handleReaction = (e) => {
    const a = e.target.innerText;
    if (a === "like") {
      setReaction((prevReaction) => {
        const arr = [...prevReaction];
        arr[0].count = prevReaction[0].count + 1;
        return [...arr];
      });
    } else
      setReaction((prevReaction) => {
        const arr = [...prevReaction];
        arr[1].count = prevReaction[1].count + 1;
        return [...arr];
      });
  };
  return (
    <div className="App">
      <h1>hello</h1>
      {reaction.map((e) => {
        return (
          <div>
            <button onClick={handleReaction}>{e.logo}</button>
            <span>{e.count}</span>
          </div>
        );
      })}
    </div>
  );
}
export default App;
