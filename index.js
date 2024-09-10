// p2-handson/index.js
import express from 'express';
import router from './routes.js';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a root route to serve HTML
app.get('/', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>P2 Handson</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        h1 {
          font-size: 2em;
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>P2 Handson</h1>
    </body>
    </html>
  `);
});

// Use the routes defined in routes.js
app.use('/', router);

// Port settings (default to 3333 if not set in environment)
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
