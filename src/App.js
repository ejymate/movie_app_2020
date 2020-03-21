import React from "react";

function Food({ fav }) {
  return <h3>I love {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <Food fav="A" />
      <Food fav="B" />
      <Food fav="C" />
      <Food fav="D" />
    </div>
  );
}

export default App;
