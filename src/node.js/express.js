const express = require('express');
const localStorage = require('localStorage');

const app = express();

// Endpoint for getting the stored data
app.get('/my-data', (req, res) => {
  const data = JSON.parse(localStorage.getItem('myData'));
  res.json(data);
});

// Endpoint for updating the stored data
app.put('/my-data', (req, res) => {
  const newData = req.body;
  localStorage.setItem('myData', JSON.stringify(newData));
  res.json({ message: 'Data updated.' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
