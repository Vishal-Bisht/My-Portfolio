import express from 'express';
import rateLimit from 'express-rate-limit';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// Rate limiting for contact form - more restrictive
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: 'Too many contact form submissions, please try again later.'
});


const validateContactForm = (req, res, next) => {
  const { name, email, phone } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'Name and email are required'
    });
  }
  
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email',
      message: 'Please provide a valid email address'
    });
  }
  
  next();
};


router.post('/', contactLimiter, validateContactForm, async (req, res) => {
  try {
    const { name, email, phone, isClient } = req.body;
    
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      isClient: Boolean(isClient),
      timestamp: new Date().toISOString(),
      ip: req.ip
    };
    
    await sendContactEmail(contactData);
    
    res.status(200).json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Failed to send message',
      message: 'There was an error processing your request. Please try again.'
    });
  }
});


router.get('/test', (req, res) => {
  const emailConfigured = process.env.EMAIL_USER && 
                         process.env.EMAIL_PASSWORD && 
                         process.env.EMAIL_USER !== 'your-email@gmail.com';
  
  res.json({
    message: 'Contact API is working',
    emailConfigured: emailConfigured,
    timestamp: new Date().toISOString()
  });
});

// Test email route - only available in development
router.post('/test-email', async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(404).json({ error: 'Only found in developer mode' });
  }

  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      isClient: false,
      timestamp: new Date().toISOString()
    };

    await sendContactEmail(testData);
    
    res.json({
      success: true,
      message: 'Test email sent successfully'
    });
  } catch (error) {
    res.status(500).json({
      error: 'Test email failed',
      message: error.message
    });
  }
});

export default router;
