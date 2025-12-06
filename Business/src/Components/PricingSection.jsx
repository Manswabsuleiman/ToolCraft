import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [starterHover, setStarterHover] = React.useState(false);
  const [enterpriseHover, setEnterpriseHover] = React.useState(false);
  const [professionalHover, setProfessionalHover] = React.useState(false);

  // Common responsive styles
  const sectionStyle = {
    backgroundColor: '#1a202c',
    padding: 'clamp(40px, 5vw, 80px) 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headingStyle = {
    fontSize: 'clamp(28px, 5vw, 40px)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '10px',
    textAlign: 'center',
  };

  const subHeadingStyle = {
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#a0aec0',
    marginBottom: '50px',
    textAlign: 'center',
  };

  const pricingCardsContainerStyle = {
    display: 'flex',
    gap: '20px',
    marginBottom: '50px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const cardStyle = {
    backgroundColor: '#2d3748',
    borderRadius: '12px',
    padding: 'clamp(20px, 4vw, 30px)',
    width: 'clamp(280px, 30%, 320px)',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.2s ease-in-out',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
  };

  const planTitleStyle = {
    fontSize: 'clamp(20px, 3vw, 24px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '10px',
  };

  const planDescriptionStyle = {
    fontSize: 'clamp(14px, 2vw, 15px)',
    color: '#cbd5e0',
    marginBottom: '20px',
    lineHeight: '1.5',
  };

  const priceStyle = {
    fontSize: 'clamp(28px, 5vw, 38px)',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '5px',
  };

  const durationStyle = {
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#a0aec0',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#63b3ed',
    border: '2px solid #63b3ed',
    padding: '12px 25px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
    marginBottom: '30px',
    width: '100%',
    textAlign: 'center',
  };

  const buttonHoverStyle = {
    backgroundColor: '#63b3ed',
    color: '#ffffff',
  };

  const featuresDividerStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#a0aec0',
    textTransform: 'uppercase',
    marginBottom: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #4a5568',
  };

  const featureItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
  };

  const checkIconStyle = {
    color: '#48bb78',
    marginRight: '12px',
    marginTop: '2px',
  };

  const featureTextStyle = {
    fontSize: '16px',
    color: '#e2e8f0',
    lineHeight: '1.5',
  };

  const professionalCardWrapperStyle = {
    width: 'clamp(280px, 60%, 700px)',
    backgroundColor: '#2a4365',
    borderRadius: '12px',
    padding: 'clamp(20px, 4vw, 40px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
  };

  const professionalCardTitleStyle = {
    fontSize: 'clamp(24px, 4vw, 28px)',
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: '10px',
  };

  const professionalCardDescriptionStyle = {
    fontSize: 'clamp(14px, 2vw, 16px)',
    color: '#e0e7ff',
    marginBottom: '30px',
    maxWidth: '90%',
  };

  const professionalButtonLightStyle = {
    backgroundColor: '#ffffff',
    color: '#2a4365',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '17px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
    whiteSpace: 'nowrap',
  };

  const professionalButtonLightHoverStyle = {
    backgroundColor: '#e2e8f0',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Manufacturing Scale</h1>
      <p style={subHeadingStyle}>Flexible pricing for any business size.</p>

      <div style={pricingCardsContainerStyle}>
        {/* Starter Plan Card */}
        <div
          style={{ ...cardStyle, ...(starterHover ? cardHoverStyle : {}) }}
          onMouseEnter={() => setStarterHover(true)}
          onMouseLeave={() => setStarterHover(false)}
        >
          <h2 style={planTitleStyle}>Starter</h2>
          <p style={planDescriptionStyle}>
            This package offers the basic features you need to get started.
          </p>
          <p style={priceStyle}>$39</p>
          <p style={durationStyle}>/ month</p>
          <button
            style={{ ...buttonStyle, ...(starterHover ? buttonHoverStyle : {}) }}
            onMouseEnter={() => setStarterHover(true)}
            onMouseLeave={() => setStarterHover(false)}
          >
            Get Started
          </button>
          <div style={featuresDividerStyle}>Features</div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Production up to 10,000 units per month</span>
          </div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>24/7 technical support</span>
          </div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Access the production dashboard</span>
          </div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Initial setup guide</span>
          </div>
        </div>

        {/* Enterprise Plan Card */}
        <div
          style={{ ...cardStyle, ...(enterpriseHover ? cardHoverStyle : {}) }}
          onMouseEnter={() => setEnterpriseHover(true)}
          onMouseLeave={() => setEnterpriseHover(false)}
        >
          <h2 style={planTitleStyle}>Enterprise</h2>
          <p style={planDescriptionStyle}>
            This package provides full access to all premium features.
          </p>
          <p style={priceStyle}>$99</p>
          <p style={durationStyle}>/ month</p>
          <button
            style={{ ...buttonStyle, ...(enterpriseHover ? buttonHoverStyle : {}) }}
            onMouseEnter={() => setEnterpriseHover(true)}
            onMouseLeave={() => setEnterpriseHover(false)}
          >
            Get Started
          </button>
          <div style={featuresDividerStyle}>Features</div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Unlimited production units</span>
          </div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Dedicated account manager</span>
          </div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Tailored manufacturing solutions</span>
          </div>
          <div style={featureItemStyle}>
            <Check size={20} style={checkIconStyle} />
            <span style={featureTextStyle}>Predictive production optimization</span>
          </div>
        </div>
      </div>

      {/* Professional Plan Card */}
      <div style={professionalCardWrapperStyle}>
        <h2 style={professionalCardTitleStyle}>Professional</h2>
        <p style={professionalCardDescriptionStyle}>
          Designed for greater flexibility, this solution offers advanced tools for custom tailoring to your needs.
        </p>
        <button
          style={{ ...professionalButtonLightStyle, ...(professionalHover ? professionalButtonLightHoverStyle : {}) }}
          onMouseEnter={() => setProfessionalHover(true)}
          onMouseLeave={() => setProfessionalHover(false)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
