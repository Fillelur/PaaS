import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        setRows(result.rows);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {rows.length > 0 ? (
        rows.map((row, index) => (
          <p key={index}>{row}</p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;