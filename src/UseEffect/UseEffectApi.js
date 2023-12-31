import React, { useState, useEffect } from "react";

const CallApi = () => {
  const [data, setData] = useState(null);
  const [queryParam, setQueryParam] = useState(1);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${queryParam}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Set up interval for fetching every 10 seconds
    const intervalId = setInterval(() => {
      setQueryParam((prevParam) => prevParam + 1); // Increment query parameter
    }, 10000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [queryParam]); // Include queryParam in the dependency array

  const handleButtonClick = () => {
    // Manually trigger the API call when the button is clicked
    setQueryParam((prevParam) => prevParam + 1); // Increment query parameter
    fetchData();
  };

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>
        <code id="json-code">{JSON.stringify(data, null, 2)}</code>
      </pre>

      <p>Current Query Parameter: {queryParam}</p>

      <button onClick={handleButtonClick}>Fetch Data Now</button>
    </div>
  );
};

export default CallApi;
