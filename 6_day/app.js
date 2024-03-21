import express from 'express';

const app = express();

// GET, POST, PUT, DELETE

app.get('/user/:userId/name', (req, res) => {
  const { path, params, headers, cookies } = req;
  const data = { path, params, headers, cookies };
  res.end(JSON.stringify(data));
});

app.get('/user+', (req, res) => {
  const query = req.query;

  res.status(201)
  res.setHeader("Roman", "Dumanskyi")
  res.end(JSON.stringify(query));
});

app.listen(3200, () => {
  console.log('Server started');
});
