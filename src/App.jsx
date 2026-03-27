import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './App.css';

const App = () => {
  const { scrollYProgress } = useScroll();

  // Logo fades and shrinks slightly as you scroll the content up
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.1]);
  const logoScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.85]);

  return (
    <div className="app-container">
      {/* --- MESH ANIMATED BACKGROUND --- */}
      <div className="fixed-bg">
        <div className="mesh-gradient"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
        <div className="blob b4"></div>
        <div className="blob b5"></div>

        {/* THE MAIN EXPANDING LOGO */}
      <div className="hero-logo-wrapper">
  {/* MAIN LOGO - Centered */}
  <motion.div 
    className="blithcron-logo"
    style={{ opacity: logoOpacity, scale: logoScale }}
  >
    <motion.span 
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "auto", opacity: 1 }}
      transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="side-text"
    >blith</motion.span>
    
    <motion.span 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="center-text"
    >c</motion.span>
    
    <motion.span 
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "auto", opacity: 1 }}
      transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="side-text"
    >hron</motion.span>
  </motion.div>

  {/* SUBTEXT AND HINT - Controlled by scroll opacity */}
  <motion.div 
    className="hero-subtext-area"
    style={{ opacity: logoOpacity }}
  >
    <p className="hero-tagline">IIT GANDHINAGAR’S PREMIER CULTURAL ODYSSEY</p>
    <div className="hero-stats">
       <span>FEB 2027</span>
       <span className="dot">•</span>
       <span>THE GENESIS</span>
    </div>

    <div className="scroll-hint">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <p>SCROLL TO DISCOVER</p>
    </div>
  </motion.div>
</div>
      </div>

      {/* PILL NAVBAR */}
      <nav className="main-nav">
        <div className="nav-blur-box">
          <div className="nav-left">Blith'27</div>
          <div className="nav-right">
            <div className="links">
              <a href="#events">Events</a>
              <a href="#merch">Merch</a>
              <a href="#team">Team Page</a>
            </div>
            <button className="btn-signin">Sign In</button>
          </div>
        </div>
      </nav>

      {/* SCROLLING CONTENT SECTION */}
      <section className="scroll-wrapper">
        <div className="spacer"></div>

        <motion.div
          className="master-glass-card"
          initial={{ y: 250, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="desc-container">
            <div className="inner-desc-card">
              {/* This tagline addresses your "Cultural Event of IITGN" request */}
              <span className="welcome-tag">IIT Gandhinagar's Premier Cultural Flagship</span>

              <h2>THE GENESIS</h2>

              <p>
                Blithchron is the definitive cultural phenomenon of <strong>IIT Gandhinagar</strong>,
                uniting the finest talents from across India in a relentless celebration of art, energy,
                and expression. With a legacy of drawing over 22,000 attendees, we have evolved into
                the region's most anticipated college festival.
                <br /><br />
                From the high-fashion pulse of <em>Panache</em> to the thunderous rock battles of
                <em>String Theory</em> and the rhythmic precision of <em>Synchronize</em>, every event is a
                portal to a new dimension. The journey finds its ultimate release in our legendary
                <strong> Pronites</strong>, featuring world-class artists under the open sky.
              </p>
            </div>
          </div>

          <div className="cards-grid">
            {['Events', 'Team Page', 'Merch'].map((title, i) => (
              <motion.div
                key={i}
                className="sub-card"
                whileHover={{ y: -12, backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <span className="card-no">0{i + 1}</span>
                <h3>{title}</h3>
                <p>Discover the heartbeat of the festival in this dimension.</p>
                <div className="card-footer">Explore →</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <footer className="simple-footer">Blith'27 • IIT Gandhinagar</footer>
      </section>
    </div>
  );
};

export default App;