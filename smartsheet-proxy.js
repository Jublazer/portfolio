// Simple proxy server for Smartsheet API requests
const express = require('express');
// import fetch from 'node-fetch';
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Proxy endpoint
app.get('/api/smartsheet', async (req, res) => {
  try {
    const response = await fetch('https://api.smartsheet.com/2.0', {
      headers: {
        'Authorization': `Bearer ${process.env.SMARTSHEET_TOKEN}`
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
