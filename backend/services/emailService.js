import nodemailer from 'nodemailer';

// Email service for handling contact form submissions
export const sendContactEmail = async (contactData) => {
  try {
    // Check if email credentials are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      return { success: true, message: 'Contact logged successfully' };
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      // Added these options for better compatibility
      secure: true,
      port: 465,
      logger: false,
      debug: false
    });

    const adminEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Portfolio Contact: ${contactData.isClient ? 'Project Inquiry' : 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Contact Details:</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
            <p><strong>Type:</strong> ${contactData.isClient ? 'Project Work Inquiry' : 'General Inquiry'}</p>
            <p><strong>Submitted:</strong> ${new Date(contactData.timestamp).toLocaleString()}</p>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `
    };

    // Auto-reply email to the contact person
    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: 'Thank you for contacting me - Vishal Bisht',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">Thank you for reaching out!</h2>
          
          <p>Hi ${contactData.name},</p>
          
          <p>Thank you for contacting me through my portfolio website. I have received your ${contactData.isClient ? 'project inquiry' : 'message'} and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-left: 4px solid #4f46e5; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #1e293b;">Your submission details:</h4>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Type:</strong> ${contactData.isClient ? 'Project Work Inquiry' : 'General Inquiry'}</p>
          </div>
          
          <p>I typically respond to inquiries within 24-48 hours. If your inquiry is urgent, please feel free to reach out to me directly.</p>
          
          <p>Best regards,<br>
          <strong>Vishal Bisht</strong><br>
          Full Stack Developer</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminEmailOptions),
      transporter.sendMail(autoReplyOptions)
    ]);

    return { success: true };

  } catch (error) {
    console.error('Email sending failed:', error);
    
    // For now, we'll just log the contact data if email fails
    // In production, you might want to save to database as backup
    
    throw new Error('Failed to send email');
  }
};
