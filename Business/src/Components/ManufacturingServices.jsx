import React from 'react';
import {
  Sparkles,
  Layers,
  Wrench,
  Shield,
  Package,
  LineChart,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const cardData = [
  {
    icon: Sparkles,
    title: 'Production and Assembly',
    description:
      'Details on production processes, assembly, capacity, and product types.',
  },
  {
    icon: Layers,
    title: 'Custom Manufacturing',
    description: 'Custom product creation with design and customization options.',
  },
  {
    icon: Wrench,
    title: 'Quality Control',
    description:
      'Procedures and systems in place to ensure high product quality.',
  },
  {
    icon: Shield,
    title: 'Technology and Innovation',
    description:
      'Details on the latest manufacturing technologies and ongoing innovations.',
  },
  {
    icon: Package,
    title: 'Packaging and Logistics',
    description: 'Packaging and logistics for shipping to customers and distributors.',
  },
  {
    icon: LineChart,
    title: 'Consulting Market Research',
    description:
      'Services to help companies understand market needs and provide strategic advice.',
  },
];

const ManufacturingServices = () => {
  // ------------------------ Responsive Inline Styles ------------------------
  const styles = {
    pageContainer: {
      backgroundColor: '#0f3a2b',
      padding: 'clamp(30px, 5vw, 60px) 20px',
      fontFamily: 'sans-serif',
      color: 'white',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      maxWidth: '900px',
      margin: '0 auto 40px auto',
      padding: '0 10px',
    },
    mainTitle: {
      fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
      fontWeight: '700',
      margin: '0',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      fontWeight: '400',
      color: '#A9B2BB',
      marginTop: '8px',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '20px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 10px',
    },
    card: {
      backgroundColor: '#274457',
      borderRadius: '12px',
      padding: '24px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '200px',
      transition: 'transform 0.3s, background 0.3s',
      cursor: 'pointer',
    },
    topIcons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '15px',
      alignItems: 'flex-start',
    },
    mainIconStyle: { color: '#34D399', width: '32px', height: '32px' },
    arrowIconStyle: { color: '#A9B2BB', width: '20px', height: '20px', transition: 'color 0.2s' },
    cardTitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      fontWeight: '600',
      margin: '0 0 8px 0',
      color: 'white',
    },
    cardDescription: {
      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
      fontWeight: '400',
      color: '#A9B2BB',
      lineHeight: '1.5',
    },
  };

  const CardItem = ({ icon: Icon, title, description, index }) => {
    const cardVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        style={styles.card}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        whileHover={{ scale: 1.03, backgroundColor: '#1f2f3c' }}
      >
        <div style={styles.topIcons}>
          <Icon style={styles.mainIconStyle} />
          <ArrowUpRight style={styles.arrowIconStyle} />
        </div>
        <div>
          <h3 style={styles.cardTitle}>{title}</h3>
          <p style={styles.cardDescription}>{description}</p>
        </div>
      </motion.div>
    );
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div style={styles.pageContainer}>
      <motion.header
        style={styles.header}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.mainTitle}>
          Efficient and Integrated <br />
          <span style={{ color: '#34D399' }}>Manufacturing Services</span>
        </h1>
        <p style={styles.subtitle}>
          Simplify operations with our efficient, quality-focused services.
        </p>
      </motion.header>

      <div style={styles.cardGrid}>
        {cardData.map((card, index) => (
          <CardItem
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ManufacturingServices;
