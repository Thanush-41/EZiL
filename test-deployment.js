// Test script to verify API endpoints
const API_BASE = 'https://ezil-c0anumjju-thanush-chowdary-garimellas-projects.vercel.app';

// Test health endpoint
async function testHealth() {
  try {
    const response = await fetch(`${API_BASE}/api/health`);
    const data = await response.json();
    console.log('Health check:', data);
    return response.ok;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
}

// Test contact endpoint
async function testContact() {
  try {
    const response = await fetch(`${API_BASE}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message'
      })
    });
    const data = await response.json();
    console.log('Contact test:', data);
    return response.ok;
  } catch (error) {
    console.error('Contact test failed:', error);
    return false;
  }
}

// Run tests
async function runTests() {
  console.log('Testing API endpoints...');
  
  const healthOk = await testHealth();
  console.log(`Health endpoint: ${healthOk ? '✅ PASS' : '❌ FAIL'}`);
  
  const contactOk = await testContact();
  console.log(`Contact endpoint: ${contactOk ? '✅ PASS' : '❌ FAIL'}`);
  
  console.log('\nNote: Contact endpoint may fail if MongoDB is not configured');
  console.log('Configure MONGODB_URI in Vercel environment variables to enable full functionality');
}

// Export for Node.js usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { testHealth, testContact, runTests };
}

// Run if called directly
if (typeof window !== 'undefined') {
  runTests();
}
