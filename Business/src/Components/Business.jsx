import React from 'react';
import { CheckCircle, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const SystemBenefits = () => {
  const projectStats = [
    { label: 'Finished', percent: 10, color: '#48bb78' },
    { label: 'In Progress', percent: 13, color: '#4299e1' },
    { label: 'Rejected', percent: 11, color: '#f56565' },
  ];

  const barGraphData = [
    { height: 70, color: '#48bb78' },
    { height: 85, color: '#48bb78' },
    { height: 60, color: '#48bb78' },
    { height: 95, color: '#4299e1' },
    { height: 75, color: '#48bb78' },
  ];

  const dropIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 'clamp(40px, 5vw, 80px) 10px',
        backgroundColor: '#f5f7fa',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          padding: 'clamp(20px, 5vw, 40px)',
          gap: '20px',
          position: 'relative',
        }}
      >
        {/* --- Left Panel --- */}
        <motion.div
          style={{
            flex: '1 1 300px',
            minWidth: '280px',
            marginBottom: '20px',
            position: 'relative',
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={dropIn}
        >
          {/* Main Stats Card */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: '10px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#4a5568' }}>Total Projects</span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#38a169',
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  fontWeight: '500',
                  marginLeft: 'auto',
                }}
              >
                <BarChart3 size={16} style={{ marginRight: '5px' }} /> 54%
              </div>
            </div>
            <div style={{ marginBottom: '20px', fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: '600', wordBreak: 'break-word' }}>
              1475
            </div>

            {projectStats.map((stat, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <div style={{ fontSize: 'clamp(12px, 2vw, 14px)', color: '#4a5568', marginBottom: '5px' }}>
                  {stat.label}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      flex: 1,
                      height: '8px',
                      backgroundColor: '#edf2f7',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${stat.percent}%`,
                        backgroundColor: stat.color,
                        borderRadius: '4px',
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 'clamp(12px, 2vw, 14px)', fontWeight: '600', color: '#4a5568' }}>
                    {stat.percent}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Card */}
          <motion.div
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              width: '100%',
              maxWidth: '200px',
              marginTop: '20px',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '12px', color: '#4a5568' }}>Total Projects</div>
              <BarChart3 size={16} style={{ color: '#38a169' }} />
            </div>

            <div style={{ fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: '700', color: '#1a202c', wordBreak: 'break-word' }}>
              1951+
            </div>

            <div
              style={{
                display: 'flex',
                gap: '6px',
                alignItems: 'flex-end',
                height: '80px',
                marginTop: '15px',
                flexWrap: 'wrap',
              }}
            >
              {barGraphData.map((bar, index) => (
                <div
                  key={index}
                  style={{
                    width: '16px',
                    height: `${bar.height}%`,
                    backgroundColor: bar.color,
                    borderRadius: '2px',
                  }}
                ></div>
              ))}
            </div>

            <div style={{ fontSize: '11px', color: '#38a169', marginTop: '5px' }}>
              Increase of 12% this month
            </div>
          </motion.div>
        </motion.div>

        {/* --- Right Panel --- */}
        <motion.div
          style={{
            flex: '1 1 350px',
            paddingLeft: '0',
            minWidth: '280px',
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: '800',
              color: '#1a202c',
              marginBottom: '10px',
              lineHeight: '1.3',
            }}
          >
            Key Benefits of Our System for Your Business Efficiency
          </h2>
          <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: '#4a5568', marginBottom: '30px' }}>
            Our systems boost productivity, cut costs, and drive business growth.
          </p>

          {[
            {
              title: 'Boosting Quality with Tech',
              desc: 'With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.',
            },
            {
              title: 'Optimization Production Process',
              desc: 'Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.',
            },
            {
              title: 'AI-Driven Production',
              desc: 'Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px', flexWrap: 'wrap' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div style={{ marginRight: '12px', marginTop: '2px', color: '#4299e1' }}>
                <CheckCircle size={24} strokeWidth={2.5} />
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3
                  style={{
                    fontSize: 'clamp(16px, 3vw, 18px)',
                    fontWeight: '700',
                    color: '#1a202c',
                    marginBottom: '5px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: 'clamp(14px, 2vw, 15px)', color: '#4a5568', lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SystemBenefits;
