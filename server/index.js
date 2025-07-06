import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Security check
if (!MONGODB_URI) {
  console.error('MONGODB_URI environment variable is required');
  process.exit(1);
}

// Middleware
app.use(cors({
  origin: NODE_ENV === 'production' 
    ? ['https://ezil-pzkl17zla-thanush-chowdary-garimellas-projects.vercel.app', 'https://ezil.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting middleware (simple implementation)
const requestCounts = new Map();
const rateLimit = (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100;

  if (!requestCounts.has(ip)) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    const current = requestCounts.get(ip);
    if (now > current.resetTime) {
      current.count = 1;
      current.resetTime = now + windowMs;
    } else {
      current.count++;
    }

    if (current.count > maxRequests) {
      return res.status(429).json({ error: 'Too many requests' });
    }
  }
  next();
};

app.use('/api', rateLimit);

// MongoDB connection
let db;
let collection;

async function connectToMongoDB() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log('Connected to MongoDB');
    
    db = client.db('waitlist');
    collection = db.collection('join_waitlist');
    
    console.log('Database and collection initialized');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// API Routes
app.post('/api/trial-signup', async (req, res) => {
  try {
    const { name, email, organization, phone, message, submittedAt, type } = req.body;
    
    // Validate required fields
    if (!name || !email || !organization) {
      return res.status(400).json({ 
        error: 'Name, email, and organization are required fields' 
      });
    }
    
    // Create the document to insert
    const signupData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization.trim(),
      phone: phone ? phone.trim() : '',
      message: message ? message.trim() : '',
      submittedAt: submittedAt || new Date().toISOString(),
      type: type || 'free-trial',
      status: 'pending',
      createdAt: new Date()
    };
    
    // Insert into MongoDB
    const result = await collection.insertOne(signupData);
    
    console.log('New trial signup:', {
      id: result.insertedId,
      name: signupData.name,
      email: signupData.email,
      organization: signupData.organization
    });
    
    res.status(201).json({ 
      message: 'Trial signup submitted successfully',
      id: result.insertedId
    });
    
  } catch (error) {
    console.error('Error processing trial signup:', error);
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message, submittedAt, type } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required fields' 
      });
    }
    
    // Create the document to insert
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      submittedAt: submittedAt || new Date().toISOString(),
      type: type || 'contact',
      status: 'pending',
      createdAt: new Date()
    };
    
    // Insert into MongoDB
    const result = await collection.insertOne(contactData);
    
    console.log('New contact submission:', {
      id: result.insertedId,
      name: contactData.name,
      email: contactData.email
    });
    
    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      id: result.insertedId
    });
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    database: db ? 'connected' : 'disconnected'
  });
});

// Get all signups (for admin purposes)
app.get('/api/signups', async (req, res) => {
  try {
    const signups = await collection.find({}).sort({ createdAt: -1 }).toArray();
    res.json(signups);
  } catch (error) {
    console.error('Error fetching signups:', error);
    res.status(500).json({ error: 'Failed to fetch signups' });
  }
});

// Start server
async function startServer() {
  await connectToMongoDB();
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/api/health`);
    console.log(`Trial signup endpoint: http://localhost:${PORT}/api/trial-signup`);
  });
}

startServer().catch(console.error);
