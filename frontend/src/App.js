import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  // On récupère l'URL de l'API passée via Docker Compose
  const API = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    fetch(`${API}/api/hello`)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(console.error);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Message du backend :</h1>
      <p>{msg || 'Chargement...'}</p>
    </div>
  );
}

export default App;
