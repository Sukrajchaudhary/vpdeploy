const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Express API!',
    status: 'Finally CI/CD Success Bro!'
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    timestamp: new Date().toISOString()
  });
});

app.get('/hello/:name', (req, res) => {
  const { name } = req.params;
  res.json({
    message: `Hello, ${name}!`,
    greeting: 'Welcome to our containerized app'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
