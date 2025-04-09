const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/escape', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'No text provided' });

  const escapedText = JSON.stringify(text);
  res.json({ escaped: escapedText });
});

app.get('/', (req, res) => {
  res.send('API працює 😎');
});

app.listen(port, () => {
  console.log(`API слухає на порту ${port}`);
});