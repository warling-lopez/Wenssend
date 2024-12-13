const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Servidor 2 funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor 2 corriendo en http://localhost:${PORT}`);
});
