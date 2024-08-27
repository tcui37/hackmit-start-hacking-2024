import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = async () => {
    const response = await fetch('http://127.0.0.1:5000/');
    const data = await response.json();
    setMessage(data.message);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1> 
        {message}
        </h1>
    </div>
  );
}

export default App;