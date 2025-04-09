const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Додаємо можливість парсити text/plain
app.use(express.text({ type: '*/*' }));

app.post('/escape', (req, res) => {
  const rawText = req.body;

  if (typeof rawText !== 'string') {
    return res.status(400).json({ error: 'Expected raw text as plain text' });
  }

  const escaped = JSON.stringify(rawText);
  res.json({ escaped });
});

app.get('/', (req, res) => {
  res.send('API працює 😎');
});

app.listen(port, () => {
  console.log(`API слухає на порту ${port}`);
});