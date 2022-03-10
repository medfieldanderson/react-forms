import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    setTitle(name);
    e.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {title}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          // Controlled Component - specifying name for single source of truth
          // https://reactjs.org/docs/forms.html#controlled-components
          value={name}
        />
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
