# Deployment Guide

## Production Deployment

This application is configured for deployment on Vercel with serverless functions.

### Prerequisites

1. **MongoDB Atlas Account**: Set up a MongoDB Atlas cluster
2. **Vercel Account**: Sign up for Vercel deployment
3. **Environment Variables**: Configure the required environment variables

### Environment Variables

Create the following environment variables in your deployment platform:

```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority&appName=AppName
NODE_ENV=production
```

### Vercel Deployment

1. **Connect Repository**: Connect your GitHub repository to Vercel
2. **Environment Variables**: Add the environment variables in Vercel dashboard
3. **Deploy**: Vercel will automatically build and deploy your application

#### Vercel CLI Deployment (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Manual Deployment Steps

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Test the build locally**:
   ```bash
   npm run preview
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

### Environment Configuration

#### Development
- Uses local MongoDB or development cluster
- API proxy configured in Vite for local development
- Hot reload enabled

#### Production
- Uses MongoDB Atlas production cluster
- Serverless functions for API endpoints
- Optimized build with code splitting and minification

### API Endpoints

The application provides the following API endpoints:

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form submission
- `POST /api/trial-signup` - Trial signup form submission

### Database Schema

#### Contact Submissions
```javascript
{
  name: String,
  email: String,
  message: String,
  submittedAt: Date,
  type: String,
  status: String,
  createdAt: Date,
  userAgent: String,
  ip: String
}
```

#### Trial Signups
```javascript
{
  name: String,
  email: String,
  organization: String,
  phone: String,
  message: String,
  submittedAt: Date,
  type: String,
  status: String,
  createdAt: Date,
  userAgent: String,
  ip: String
}
```

### Security Features

- CORS configuration for cross-origin requests
- Input validation and sanitization
- Email format validation
- Rate limiting (handled by Vercel)
- Environment variable protection

### Monitoring

- Health check endpoint for monitoring
- Error logging to console
- Request logging with user agent and IP tracking

### Performance Optimizations

- Code splitting with separate vendor chunks
- Terser minification for smaller bundles
- Asset optimization
- Tree shaking for unused code elimination

### Troubleshooting

#### Common Issues

1. **MongoDB Connection**: Ensure MONGODB_URI is correctly set
2. **CORS Errors**: Check if API endpoints have proper CORS headers
3. **Build Failures**: Run `npm run lint:fix` to fix linting issues
4. **Environment Variables**: Verify all required env vars are set in production

#### Debugging

- Check Vercel function logs in the dashboard
- Use the health endpoint to verify API functionality
- Monitor MongoDB Atlas logs for database issues

### Post-Deployment Checklist

- [ ] Verify all API endpoints are working
- [ ] Test contact form submission
- [ ] Test trial signup form
- [ ] Check MongoDB data storage
- [ ] Verify responsive design on mobile devices
- [ ] Test cross-browser compatibility
- [ ] Monitor application performance
- [ ] Set up error monitoring (optional: Sentry integration)
