import express from 'express';
import rateLimit from 'express-rate-limit';
import { sendContactEmail } from '../services/emailService.js';

const router = express.Router();

// Rate limiting for contact form - more restrictive
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 contact form submissions per hour
  message: 'Too many contact form submissions, please try again later.'
});

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, phone, isClient } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      error: 'Missing required fields',
      message: 'Name and email are required'
    });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email',
      message: 'Please provide a valid email address'
    });
  }
  
  // Phone validation (optional but if provided, should be valid)
  if (phone && phone.length < 10) {
    return res.status(400).json({
      error: 'Invalid phone number',
      message: 'Please provide a valid phone number'
    });
  }
  
  next();
};

// POST /api/contact - Handle contact form submission
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
    
    // Send email (implement this service)
    await sendContactEmail(contactData);
    
    // Log the contact for admin purposes (you might want to save to database later)
    console.log('📧 New contact form submission:', {
      name: contactData.name,
      email: contactData.email,
      isClient: contactData.isClient,
      timestamp: contactData.timestamp
    });
    
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

// GET /api/contact/test - Test endpoint
router.get('/test', (req, res) => {
  res.json({
    message: 'Contact API is working',
    timestamp: new Date().toISOString()
  });
});

export default router;
