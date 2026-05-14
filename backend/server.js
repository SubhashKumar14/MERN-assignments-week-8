const express = require('express');
const cors = require('cors');
const userApi = require('./apis/userApi');

const app = express();

// Configure CORS for Render deployment (allow all or specific origins)
app.use(cors());
app.use(express.json());

// Routes
app.use('/user-api', userApi);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
