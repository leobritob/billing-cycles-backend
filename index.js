const express = require('express');
const knex = require('./database');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Ok! deu certo (:' });
});

app.get('/revenues', async (req, res) => {
  const revenues = await knex('revenues');

  return res.status(200).json({ revenues });
});

app.post('/revenues', async (req, res) => {
  const body = req.body;

  const result = await knex('revenues').insert(body);

  return res.status(201).json({ result });
});

app.listen(3333, () => console.log('Server is running..'));
