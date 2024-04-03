import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Whatever!');
});

app.get('/notes', (req, res) => {
  res.send('Eat my shorts!');
});

app.post('/notes/:id', (req, res) => {
  res.send('Love is waiting for us all!');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
