import React, { useState, useEffect } from "react";

const StateChangeLogger = () => {
  const [myState, setMyState] = useState("");

  useEffect(() => {
    // This function will run whenever `myState` changes
    console.log("State changed:", myState);
  }, [myState]); // Dependency array with `myState` as a dependency

  const handleChange = (event) => {
    // Update the state when an input value changes
    setMyState(event.target.value);
  };

  return (
    <div>
      <h2>State Change Logger</h2>
      <input type="text" value={myState} onChange={handleChange} />
      <p>Current State: {myState}</p>
    </div>
  );
};

export default StateChangeLogger;
