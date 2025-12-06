import React from "react";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const statsData = [
  {
    id: 1,
    icon: <Star className="card-icon" />,
    title: "Projects Completed",
    description: "150+",
    sub: "Successfully delivered projects",
  },
  {
    id: 2,
    icon: <Star className="card-icon" />,
    title: "Happy Clients",
    description: "120+",
    sub: "Satisfied customers worldwide",
  },
  {
    id: 3,
    icon: <Star className="card-icon" />,
    title: "Awards Won",
    description: "15",
    sub: "Recognition for excellence",
  },
];

const HeroSection = () => {
  // Variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="hero-section">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Welcome to <span className="highlight">Our Platform</span>
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        We provide top-notch solutions to help your business grow efficiently
        and effectively.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <button className="btn-primary">
          Get Started <ArrowRight size={16} />
        </button>
        <button className="btn-secondary">Learn More</button>
      </motion.div>

      {/* Rating */}
      <motion.div
        className="rating"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        Rated 5 stars by <a href="#">Our Clients</a>
      </motion.div>

      {/* Animated Stats Cards */}
      <motion.div
        className="stats-cards"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {statsData.map((card) => (
          <motion.div key={card.id} className="card" variants={cardVariants}>
            {card.icon}
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <div className="sub">{card.sub}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
