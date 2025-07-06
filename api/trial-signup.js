import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  
  const db = client.db('waitlist');
  
  cachedClient = client;
  cachedDb = db;
  
  return { client, db };
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, phone, message, submittedAt, type } = req.body;
    
    // Validate required fields
    if (!name || !email || !organization) {
      return res.status(400).json({ 
        error: 'Name, email, and organization are required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please provide a valid email address' 
      });
    }

    // Connect to database
    const { db } = await connectToDatabase();
    const collection = db.collection('join_waitlist');
    
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
      createdAt: new Date(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress
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
}
