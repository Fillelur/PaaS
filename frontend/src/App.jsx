import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        setRows(result.rows.name);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <p>{rows ? rows.join(', ') : 'Loading...'}</p>
    </>
  );
}

export default App;
