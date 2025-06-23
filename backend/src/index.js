const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});