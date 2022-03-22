import React, { useState } from "react";

const Monday = () => {
  const [reaction, setReaction] = useState({
    "👍": 0,
    "👎": 0,
    "💕": 0,
  });
  const handleReaction = (e) => {
    e.preventDefault();
    const field = e.target.name;
    setReaction({ ...reaction, [field]: reaction[field] + 1 });
  };
  return (
    <div>
      {Object.keys(reaction).map((reactionType) => {
        return (
          <button
            name={reactionType}
            key={reactionType}
            onClick={handleReaction}
          >
            {reactionType} :<span>{reaction[reactionType]}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Monday;
