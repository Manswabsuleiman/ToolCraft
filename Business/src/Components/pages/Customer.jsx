import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Customer = () => {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    deliveryPoint: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Message:', formData);
    setSubmitted(true);
    setFormData({ name: '', product: '', deliveryPoint: '', message: '' });
  };

  return (
    <div
      style={{
        padding: 'clamp(40px, 5vw, 60px) 5%',
        fontFamily: 'sans-serif',
        backgroundColor: '#f5f7fa',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(30px, 5vw, 50px)' }}
      >
        <h2
          style={{
            fontSize: 'clamp(24px, 6vw, 36px)',
            fontWeight: '800',
            color: '#1a202c',
            marginBottom: '10px',
          }}
        >
          Customer Feedback
        </h2>
        <p style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: '#4a5568' }}>
          Let us know if you received your product.
        </p>
      </motion.div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '500px',
          width: '100%',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: 'clamp(20px, 4vw, 30px)',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(10px, 2vw, 15px)',
        }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={{
            padding: 'clamp(10px, 2vw, 12px)',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: 'clamp(12px, 3vw, 14px)',
          }}
        />
        <input
          type="text"
          name="product"
          value={formData.product}
          onChange={handleChange}
          placeholder="Product Purchased"
          required
          style={{
            padding: 'clamp(10px, 2vw, 12px)',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: 'clamp(12px, 3vw, 14px)',
          }}
        />
        <input
          type="text"
          name="deliveryPoint"
          value={formData.deliveryPoint}
          onChange={handleChange}
          placeholder="Delivery Point (Optional)"
          style={{
            padding: 'clamp(10px, 2vw, 12px)',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: 'clamp(12px, 3vw, 14px)',
          }}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (e.g., Product received or not)"
          required
          rows={4}
          style={{
            padding: 'clamp(10px, 2vw, 12px)',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: 'clamp(12px, 3vw, 14px)',
            resize: 'none',
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: '#38a169',
            color: '#fff',
            padding: 'clamp(10px, 2vw, 12px) clamp(18px, 4vw, 20px)',
            fontSize: 'clamp(14px, 3vw, 16px)',
            fontWeight: '600',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            width: '100%',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2f855a')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#38a169')}
        >
          Submit Feedback
        </button>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: 'center',
              color: '#38a169',
              fontWeight: '600',
              marginTop: '10px',
              fontSize: 'clamp(12px, 3vw, 14px)',
            }}
          >
            Thank you! Your feedback has been received.
          </motion.div>
        )}
      </form>
    </div>
  );
};

export default Customer;
