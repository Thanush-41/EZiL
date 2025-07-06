import { MongoClient } from 'mongodb';

<<<<<<< HEAD
=======
const MONGODB_URI = process.env.MONGODB_URI;

>>>>>>> 575c91f88087b846055a393b2d3afcbfcadfbf26
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

<<<<<<< HEAD
  const client = new MongoClient(process.env.MONGODB_URI);
=======
  const client = new MongoClient(MONGODB_URI);
>>>>>>> 575c91f88087b846055a393b2d3afcbfcadfbf26
  await client.connect();
  
  const db = client.db('waitlist');
  
  cachedClient = client;
  cachedDb = db;
  
  return { client, db };
}

export default async function handler(req, res) {
<<<<<<< HEAD
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
=======
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
>>>>>>> 575c91f88087b846055a393b2d3afcbfcadfbf26

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, submittedAt, type } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Name, email, and message are required fields' 
      });
    }
<<<<<<< HEAD

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address' 
      });
    }

=======
    
    // Connect to database
>>>>>>> 575c91f88087b846055a393b2d3afcbfcadfbf26
    const { db } = await connectToDatabase();
    const collection = db.collection('join_waitlist');
    
    // Create the document to insert
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      submittedAt: submittedAt || new Date().toISOString(),
      type: type || 'contact',
      status: 'pending',
<<<<<<< HEAD
      createdAt: new Date(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
    };

=======
      createdAt: new Date()
    };
    
>>>>>>> 575c91f88087b846055a393b2d3afcbfcadfbf26
    // Insert into MongoDB
    const result = await collection.insertOne(contactData);
    
    console.log('New contact submission:', {
      id: result.insertedId,
      name: contactData.name,
      email: contactData.email
    });
<<<<<<< HEAD

=======
    
>>>>>>> 575c91f88087b846055a393b2d3afcbfcadfbf26
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
}
