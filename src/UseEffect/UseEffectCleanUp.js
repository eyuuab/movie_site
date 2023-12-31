import React, { useState, useEffect } from "react";

const StateChangeLoggerCleanUp = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerwidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p>Current window size: {windowWidth}</p>
    </div>
  );
};

export default StateChangeLoggerCleanUp;
