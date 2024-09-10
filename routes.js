// p2-handson/routes.js
import { Router } from 'express';

const router = Router();

// Route for /subject
router.get('/subject', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Subject</title>
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
      <h1>ITE314</h1>
    </body>
    </html>
  `);
});

// Route for /exam
router.get('/exam', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exam</title>
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
      <h1>P2</h1>
    </body>
    </html>
  `);
});

// Route for /node
router.get('/node', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node</title>
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
      <h1>NODEJS</h1>
    </body>
    </html>
  `);
});

// Route for /mydata
router.get('/mydata', (req, res) => {
  const data = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Data</title>
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
        pre {
          font-size: 1.2em;
          color: #333;
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
      </style>
    </head>
    <body>
      <pre>${JSON.stringify({
        subject: 'ITE314',
        exam: 'P2',
        node: 'NODEJS'
      }, null, 2)}</pre>
    </body>
    </html>
  `;
  res.status(200).send(data);
});

export default router;
