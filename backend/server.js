const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/items')
 .then(() => console.log('MongoDB connected'))
 .catch(err => {
   console.error('MongoDB connection error:', err);
   process.exit(1);
 });
const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));