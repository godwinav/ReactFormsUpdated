import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleClick = (event) => {
    setName(event.target.value);
  };
  const [heading, setHeading] = useState("");

  const handleheading = () => {
    setHeading(name);
  };
  return (
    <div className="container">
      <h1>Hello {heading} </h1>
      <input
        onChange={handleClick}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleheading}>Submit</button>
    </div>
  );
}

export default App;
