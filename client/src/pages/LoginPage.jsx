import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiArrowRight, FiMap } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Add this import
import '../styles/LoginPage.css';

function LoginPage() { // Changed component name to match export
  const navigate = useNavigate(); // Add navigate hook
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt with:', formData);
      setIsLoading(false);
      // Here you would handle actual login logic
      alert('Login successful! (Demo)');
      // Optionally redirect to dashboard after login
      // navigate('/dashboard');
    }, 1500);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle back to home click
  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate('/'); // Navigate back to home page
  };

  return (
    <div className="login-page">
      {/* Background decoration */}
      <div className="login-bg">
        <div className="login-bg-blob login-blob-1"></div>
        <div className="login-bg-blob login-blob-2"></div>
      </div>

      <div className="login-container">
        {/* Left Side - Branding */}
        <motion.div 
          className="login-brand"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="brand-content">
            <div className="brand-logo">
              <FiMap className="brand-logo-icon" />
              <span className="brand-logo-text">Project<span>Mayaa</span></span>
            </div>
            <h1 className="brand-title">Welcome Back</h1>
            <p className="brand-subtitle">
              Bridge the gap between engineering excellence and business innovation.
            </p>
            
            <div className="brand-features">
              <div className="brand-feature">
                <div className="feature-dot"></div>
                <span>140+ Business Domains</span>
              </div>
              <div className="brand-feature">
                <div className="feature-dot"></div>
                <span>18 Engineering Departments</span>
              </div>
              <div className="brand-feature">
                <div className="feature-dot"></div>
                <span>Industry-Mapped Opportunities</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          className="login-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="login-form-card">
            <div className="form-header">
              <h2 className="form-title">Login to Your Account</h2>
              <p className="form-subtitle">
                Access your personalized domain mapping dashboard
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                  <FiMail className="input-icon" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter registered email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                {errors.email && (
                  <motion.span 
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.span>
                )}
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className={`input-wrapper ${errors.password ? 'error' : ''}`}>
                  <FiLock className="input-icon" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="form-input"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    tabIndex="-1"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && (
                  <motion.span 
                    className="error-message"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.password}
                  </motion.span>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="form-options">
                <a href="#forgot-password" className="forgot-link">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className={`login-button ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    <span>Login to Dashboard</span>
                    <FiArrowRight className="button-icon" />
                  </>
                )}
              </motion.button>
            </form>

           
            <div className="back-home">
              <a href="/" className="back-link" onClick={handleBackToHome}>
                ← Back to Home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage; 