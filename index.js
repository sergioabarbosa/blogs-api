const express = require('express');
const root = require('./controllers/root');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', root);

app.listen(3000, () => console.log('ouvindo porta 3000!'));