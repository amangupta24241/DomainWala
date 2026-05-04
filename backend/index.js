const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/domainwala';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));

// Schemas
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  balance: { type: Number, default: 0 }
});
const User = mongoose.model('User', userSchema);

const domainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  tags: [String],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  isSold: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
const Domain = mongoose.model('Domain', domainSchema);

// Routes
// 1. Auth: Register
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    
    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    user = new User({ username, password, balance: 0 });
    await user.save();
    
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// 2. Auth: Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// 3. Add Funds
app.post('/api/users/:id/add-funds', async (req, res) => {
  try {
    const { amount } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    user.balance += Number(amount);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// 4. Get all domains (only unsold)
app.get('/api/domains', async (req, res) => {
  try {
    const domains = await Domain.find({ isSold: false }).sort({ createdAt: -1 });
    res.json(domains);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

// 5. Add a new domain
app.post('/api/domains', async (req, res) => {
  try {
    const { name, price, tags, userId } = req.body;
    const tagsArray = typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : tags;
    
    const newDomain = new Domain({ name, price, tags: tagsArray, ownerId: userId });
    const savedDomain = await newDomain.save();
    res.status(201).json(savedDomain);
  } catch (error) {
    res.status(500).json({ message: 'Error adding domain', error });
  }
});

// 6. Purchase Domain
app.post('/api/domains/:id/purchase', async (req, res) => {
  try {
    const { userId } = req.body;
    const domain = await Domain.findById(req.params.id);
    const user = await User.findById(userId);

    if (!domain || domain.isSold) return res.status(400).json({ message: 'Domain not available' });
    if (!user) return res.status(404).json({ message: 'User not found' });
    
    if (user.balance < domain.price) {
      return res.status(400).json({ message: 'Insufficient funds' });
    }

    user.balance -= domain.price;
    await user.save();

    domain.isSold = true;
    domain.ownerId = user._id;
    await domain.save();

    res.json({ message: 'Purchase successful', user, domain });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
