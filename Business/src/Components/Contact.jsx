import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chat from './Chat';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputFocus, setInputFocus] = useState({});
  const [isButtonHover, setIsButtonHover] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };
  const handleFocus = (name) => setInputFocus({ ...inputFocus, [name]: true });
  const handleBlur = (name) => setInputFocus({ ...inputFocus, [name]: false });
  const getInputStyle = (name) => ({
    padding: '12px 15px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    borderColor: inputFocus[name] ? '#0f3a2b' : '#d1d5db',
    boxShadow: inputFocus[name] ? '0 0 0 2px rgba(15, 58, 43, 0.2)' : 'none',
    width: '100%',
  });

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: '100vh',
          padding: 'clamp(20px, 5vw, 40px)',
          backgroundColor: '#f8f9fa',
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexWrap: 'wrap', // Make it stack on small screens
            overflow: 'hidden',
          }}
        >
          {/* Info Section */}
          <div
            style={{
              flex: '1 1 300px', // Flex-grow 1, min-width 300px
              padding: 'clamp(20px, 4vw, 40px)',
              backgroundColor: '#0f3a2b',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minWidth: '280px',
            }}
          >
            <div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '20px' }}>
                Get In Touch ✉️
              </h2>
              <p style={{ marginBottom: '40px', lineHeight: 1.6, fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
                We'd love to hear from you! Send us a message, and we'll respond as soon as possible.
              </p>
            </div>
            <div style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1rem)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Mail size={24} style={{ marginRight: '10px' }} /> hallo@toolcraft.com
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <Phone size={24} style={{ marginRight: '10px' }} /> +1 (555) 123-4567
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <MapPin size={24} style={{ marginRight: '10px' }} /> 123 Dev Street Nairobi
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div
            style={{
              flex: '2 1 400px',
              padding: 'clamp(20px, 4vw, 40px)',
              minWidth: '280px',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '20px', color: '#1f2937' }}>
              Send Us a Message
            </h2>

            {isSubmitted ? (
              <div
                style={{
                  padding: '15px',
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontWeight: 600,
                  marginTop: '20px',
                }}
              >
                Thank you for your message! We'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {/* Name Input */}
                <div style={{ position: 'relative' }}>
                  <User size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                    style={{ ...getInputStyle('name'), paddingLeft: '40px' }}
                    placeholder="Manswab Juma"
                  />
                </div>

                {/* Email Input */}
                <div style={{ position: 'relative' }}>
                  <Mail size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                    style={{ ...getInputStyle('email'), paddingLeft: '40px' }}
                    placeholder="manswab.j@gmail.com"
                  />
                </div>

                {/* Subject Input */}
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={() => handleBlur('subject')}
                  required
                  style={getInputStyle('subject')}
                  placeholder="Inquiry about..."
                />

                {/* Message Textarea */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={() => handleBlur('message')}
                  required
                  style={{ ...getInputStyle('message'), minHeight: '120px', resize: 'vertical' }}
                  placeholder="Type your message here..."
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: isButtonHover ? '#1a5e42' : '#0f3a2b',
                    color: '#fff',
                    padding: '12px 25px',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.3s, transform 0.1s',
                    marginTop: '10px',
                  }}
                  onMouseEnter={() => setIsButtonHover(true)}
                  onMouseLeave={() => setIsButtonHover(false)}
                >
                  Send Message <Send size={18} style={{ marginLeft: '10px' }} />
                </button>
              </form>
            )}
          </div>
        </div>
        <Chat />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
