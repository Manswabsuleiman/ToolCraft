import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Customer from './Customer';
import Footer from '../Footer';
import Chat from '../Chat';

const deliveryStats = [
  { icon: Truck, label: 'Deliveries Today', value: '1,250' },
  { icon: Clock, label: 'Avg. Delivery Time', value: '24-48 hrs' },
  { icon: MapPin, label: 'Coverage Areas', value: '12 Areas' },
  { icon: CheckCircle, label: 'On-Time Delivery', value: '97%' },
];

const deliverySteps = [
  { step: 'Order Received', description: 'Customer places order' },
  { step: 'Processing & Packaging', description: 'Warehouse prepares package' },
  { step: 'Shipping', description: 'Package on the move' },
  { step: 'Out for Delivery', description: 'Courier is on the way' },
  { step: 'Delivered', description: 'At the customer’s doorstep' },
];

const DeliveriesSection = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/trackdelivery');
      setLoading(false);
    }, 3500);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />

      {/* Main Section */}
      <div
        style={{
          backgroundColor: '#f5f7fa',
          padding: 'clamp(40px, 5vw, 80px) 5%',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 60px)' }}
        >
          <h2
            style={{
              fontSize: 'clamp(24px, 6vw, 36px)',
              fontWeight: '800',
              color: '#1a202c',
              marginBottom: '10px',
            }}
          >
            Fast & Reliable Deliveries
          </h2>
          <p style={{ fontSize: 'clamp(14px, 3vw, 16px)', color: '#4a5568' }}>
            From our warehouse to your doorstep, safely and on time.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 'clamp(15px, 3vw, 20px)',
            maxWidth: '1200px',
            margin: '0 auto clamp(30px, 5vw, 60px) auto',
          }}
        >
          {deliveryStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                padding: 'clamp(15px, 3vw, 24px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              }}
            >
              <stat.icon
                size={32}
                color="#38a169"
                style={{ marginBottom: '12px' }}
              />
              <span
                style={{
                  fontSize: 'clamp(20px, 4vw, 24px)',
                  fontWeight: '700',
                  marginBottom: '5px',
                  color: '#1a202c',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  color: '#4a5568',
                  textAlign: 'center',
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Delivery Steps Timeline */}
        <div style={{ maxWidth: '90%', margin: '0 auto', paddingBottom: '40px' }}>
          {deliverySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: 'clamp(15px, 3vw, 25px)',
              }}
            >
              <div
                style={{
                  minWidth: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: '#38a169',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  marginRight: '15px',
                }}
              >
                {index + 1}
              </div>
              <div>
                <h4
                  style={{
                    fontSize: 'clamp(16px, 4vw, 18px)',
                    fontWeight: '700',
                    marginBottom: '5px',
                    color: '#1a202c',
                  }}
                >
                  {step.step}
                </h4>
                <p
                  style={{
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    color: '#4a5568',
                    lineHeight: 1.5,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Form */}
        <Customer />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 'clamp(20px, 5vw, 40px)' }}
        >
          <button
            onClick={handleButtonClick}
            disabled={loading}
            style={{
              backgroundColor: '#38a169',
              color: '#fff',
              padding: 'clamp(10px, 2vw, 12px) clamp(20px, 4vw, 28px)',
              fontSize: 'clamp(14px, 3vw, 16px)',
              fontWeight: '600',
              borderRadius: '8px',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              width: '100%',
              maxWidth: '320px',
            }}
          >
            View Your Product through the Map
          </button>
        </motion.div>
      </div>

      <Footer />

      {/* Full Page Loading Spinner */}
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              border: '5px solid #f3f3f3',
              borderTop: '5px solid #38a169',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              animation: 'spin 1s linear infinite',
            }}
          />
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}

      <Chat />
    </div>
  );
};

export default DeliveriesSection;
