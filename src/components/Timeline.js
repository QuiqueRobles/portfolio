import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const events = [
    {
      year: "2025",
      date: "Jun 23-25",
      title: "ESA Space Weather Hackathon",
      description: "Selected and sponsored by ESA to participate at ESOC Darmstadt, among 30 participants from ESA member states.",
      icon: "🌌",
      category: "space",
      highlight: true,
    },
    {
      year: "2024",
      date: "Nov 17-22",
      title: "ESA Academy Satellite Communications Training",
      description: "Selected as one of 30 participants from across Europe for intensive week-long training at ESA facilities.",
      icon: "🛰️",
      category: "space",
      highlight: true,
    },
    {
      year: "2024-2026",
      title: "M.Sc. Telecommunications Engineering",
      institution: "Politecnico di Milano",
      description: "Master's degree focused on signal processing, telecommunications systems and space communications.",
      icon: "🎓",
      category: "education",
    },
    {
      year: "2023-2024",
      title: "CubeSat TMTC Member",
      institution: "PoliSpace",
      description: "Software Engineer in Telemetry and Telecommand team, ensuring communication reliability for satellite systems.",
      icon: "📡",
      category: "work",
    },
    {
      year: "2024",
      title: "Qourtify App Development",
      description: "Developed fullstack web and mobile app (Next.js, React, Supabase). Live on App Store and web.",
      icon: "📱",
      category: "project",
    },
    {
      year: "2023",
      title: "Cryptography & Cybersecurity Engineer",
      institution: "GMV",
      description: "Developed cryptographic module for post-quantum algorithms with expert team for ESA Galileo project.",
      icon: "🔐",
      category: "work",
    },
    {
      year: "2023-2024",
      title: "International Exchange",
      institution: "Politecnico di Milano",
      description: "One-year international experience studying Computer Science Engineering in Milan.",
      icon: "🌍",
      category: "education",
    },
    {
      year: "2019-2024",
      title: "B.Sc. Computer Science Engineering",
      institution: "Universidad San Pablo CEU",
      description: "Best Bachelor Thesis Award. Specialized in software development and AI.",
      icon: "💻",
      category: "education",
      award: true,
    },
    {
      year: "2019-2023",
      title: "B.Sc. Telecommunications Engineering",
      institution: "Universidad San Pablo CEU",
      description: "Top Graduate with 7.938/10. Specialized in telecommunications systems and signal processing.",
      icon: "📶",
      category: "education",
      award: true,
    },
  ];

  return (
    <div style={styles.timelineWrapper}>
      <style>{keyframesCSS}</style>
      
      {/* Animated background particles */}
      <div style={styles.particles}>
        {[...Array(isMobile ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="timeline-particle"
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div style={styles.header}>
        <div style={styles.glowOrb}></div>
        <h1 style={styles.title}>
          <span style={styles.titleGradient}>ENRIQUE ROBLES URIEL</span>
        </h1>
        <div style={styles.titleUnderline}></div>
        <p style={styles.subtitle}>Telecommunications Engineer | Space Communications Specialist</p>
        <div style={styles.stats}>
          <div style={styles.stat}>
            <div style={styles.statNumber}>2</div>
            <div style={styles.statLabel}>ESA Programs</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statNumber}>2</div>
            <div style={styles.statLabel}>B.Sc. Degrees</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statNumber}>1</div>
            <div style={styles.statLabel}>M.Sc. in Progress</div>
          </div>
        </div>
      </div>
      
      <div style={styles.timeline}>
        {!isMobile && (
          <div style={styles.timelineLineContainer}>
            <div style={styles.timelineLine}></div>
            <div style={styles.timelineGlow}></div>
          </div>
        )}
        
        {events.map((event, index) => (
          <div
            key={index}
            data-aos={isMobile ? "fade-up" : (index % 2 === 0 ? "fade-right" : "fade-left")}
            data-aos-delay={index * 50}
            style={{
              ...styles.timelineItem,
              flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {!isMobile && (
              <div style={styles.timelineItemSide}>
                {event.highlight && (
                  <div style={styles.highlightBadge}>
                    <span>⭐ ESA Selection</span>
                  </div>
                )}
                {event.award && (
                  <div style={styles.awardBadge}>
                    <span>🏆 Award</span>
                  </div>
                )}
              </div>
            )}

            <div style={{
              ...styles.timelineIconWrapper,
              transform: hoveredIndex === index && !isMobile ? 'scale(1.2) rotate(360deg)' : 'scale(1) rotate(0deg)',
            }}>
              <div style={{
                ...styles.timelineIconRing,
                borderColor: event.highlight ? '#00FF66' : event.award ? '#FFD700' : '#00FF66',
              }}></div>
              <div style={{
                ...styles.timelineIcon,
                background: event.highlight 
                  ? 'linear-gradient(135deg, #00FF66, #00CC52)' 
                  : event.award
                  ? 'linear-gradient(135deg, #FFD700, #FFA500)'
                  : 'linear-gradient(135deg, #00FF66, #00994D)',
                boxShadow: hoveredIndex === index 
                  ? '0 0 40px #00FF66, 0 0 80px #00FF6666' 
                  : '0 0 20px #00FF6666',
              }}>
                <span style={styles.icon}>{event.icon}</span>
              </div>
            </div>
            
            <div style={{
              ...styles.timelineContent,
              transform: hoveredIndex === index && !isMobile ? 'translateY(-10px)' : 'translateY(0)',
              boxShadow: hoveredIndex === index 
                ? '0 20px 60px rgba(0, 255, 102, 0.3), inset 0 0 0 2px #00FF66' 
                : '0 10px 40px rgba(0, 0, 0, 0.5)',
            }}>
              <div style={styles.contentGlow}></div>
              
              {isMobile && (event.highlight || event.award) && (
                <div style={styles.mobileBadges}>
                  {event.highlight && (
                    <div style={{...styles.highlightBadge, marginBottom: '10px'}}>
                      <span>⭐ ESA Selection</span>
                    </div>
                  )}
                  {event.award && (
                    <div style={{...styles.awardBadge, marginBottom: '10px'}}>
                      <span>🏆 Award</span>
                    </div>
                  )}
                </div>
              )}
              
              <div style={styles.yearContainer}>
                <div style={styles.yearBadge}>
                  <span style={styles.yearText}>{event.year}</span>
                </div>
                {event.date && (
                  <div style={styles.dateBadge}>{event.date}</div>
                )}
              </div>

              <h3 style={styles.eventTitle}>
                {event.title}
                {event.category === 'space' && <span className="timeline-pulse">●</span>}
              </h3>
              
              {event.institution && (
                <p style={styles.institution}>
                  <span style={styles.institutionIcon}>📍</span>
                  {event.institution}
                </p>
              )}
              
              <p style={styles.description}>{event.description}</p>
              
              <div style={{
                ...styles.categoryTag,
                backgroundColor: event.highlight ? '#00FF6620' : '#141924',
              }}>
                {event.category.toUpperCase()}
              </div>

              <div style={{
                ...styles.accentCorner,
                borderColor: event.highlight ? '#00FF66' : event.award ? '#FFD700' : '#00FF66',
              }}></div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <div style={styles.footerLine}></div>
        <p style={styles.footerText}>
          Building the future of space communications 🚀
        </p>
      </div>
    </div>
  );
};

const keyframesCSS = `
  @keyframes timeline-shimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  @keyframes timeline-pulse {
    0%, 100% { 
      opacity: 1; 
      transform: scale(1); 
    }
    50% { 
      opacity: 0.8; 
      transform: scale(1.05); 
    }
  }

  @keyframes timeline-rotate {
    from { 
      transform: translate(-50%, -50%) rotate(0deg); 
    }
    to { 
      transform: translate(-50%, -50%) rotate(360deg); 
    }
  }

  @keyframes timeline-float {
    0%, 100% { 
      transform: translateY(0) translateX(0); 
      opacity: 0.3;
    }
    25% { 
      transform: translateY(-20px) translateX(10px); 
      opacity: 0.6;
    }
    50% { 
      transform: translateY(-10px) translateX(-10px); 
      opacity: 0.4;
    }
    75% { 
      transform: translateY(-30px) translateX(5px); 
      opacity: 0.5;
    }
  }

  .timeline-particle {
    animation: timeline-float 15s infinite ease-in-out;
  }

  .timeline-pulse {
    display: inline-block;
    animation: timeline-pulse 2s ease-in-out infinite;
    color: #00FF66;
    margin-left: 10px;
  }
`;

const styles = {
  timelineWrapper: {
    minHeight: '100vh',
    background: 'rgb(14, 11, 22)',
    padding: '60px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  particles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    zIndex: 0,
  },
  particle: {
    position: 'absolute',
    width: '3px',
    height: '3px',
    background: '#00FF66',
    borderRadius: '50%',
    opacity: 0.3,
  },
  header: {
    textAlign: 'center',
    marginBottom: '100px',
    position: 'relative',
    zIndex: 2,
  },
  glowOrb: {
    position: 'absolute',
    top: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px',
    height: '200px',
    background: 'radial-gradient(circle, #00FF6640, transparent)',
    filter: 'blur(60px)',
    animation: 'timeline-pulse 4s ease-in-out infinite',
    zIndex: -1,
  },
  title: {
    margin: 0,
    position: 'relative',
  },
  titleGradient: {
    fontSize: 'clamp(32px, 8vw, 56px)',
    fontWeight: '900',
    background: 'linear-gradient(90deg, #00FF66, #00CC52, #00FF66)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'timeline-shimmer 3s linear infinite',
    letterSpacing: '2px',
  },
  titleUnderline: {
    width: '150px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #00FF66, transparent)',
    margin: '20px auto',
    borderRadius: '2px',
  },
  subtitle: {
    fontSize: 'clamp(14px, 3vw, 18px)',
    color: '#00FF66',
    margin: '10px 0 40px 0',
    fontWeight: '400',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    padding: '0 20px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: 'clamp(30px, 8vw, 60px)',
    marginTop: '40px',
    flexWrap: 'wrap',
    padding: '0 20px',
  },
  stat: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: 'clamp(36px, 8vw, 48px)',
    fontWeight: '900',
    color: '#00FF66',
    textShadow: '0 0 20px #00FF66',
  },
  statLabel: {
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    color: '#a8a8a8',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  timeline: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    padding: '0 20px',
    zIndex: 2,
  },
  timelineLineContainer: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '100%',
    width: '2px',
  },
  timelineLine: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, transparent, #00FF66, transparent)',
    zIndex: 1,
  },
  timelineGlow: {
    position: 'absolute',
    width: '20px',
    height: '100%',
    left: '-9px',
    background: 'linear-gradient(180deg, transparent, #00FF6630, transparent)',
    filter: 'blur(10px)',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 'clamp(40px, 10vw, 80px)',
    position: 'relative',
    zIndex: 2,
    gap: 'clamp(15px, 4vw, 30px)',
  },
  timelineItemSide: {
    width: '120px',
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
  },
  mobileBadges: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  highlightBadge: {
    background: 'linear-gradient(135deg, #00FF66, #00CC52)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: 'clamp(11px, 2.5vw, 12px)',
    fontWeight: '700',
    color: '#000',
    boxShadow: '0 0 20px #00FF66',
    animation: 'timeline-pulse 2s ease-in-out infinite',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  awardBadge: {
    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
    padding: '8px 16px',
    borderRadius: '20px',
    fontSize: 'clamp(11px, 2.5vw, 12px)',
    fontWeight: '700',
    color: '#000',
    boxShadow: '0 0 20px #FFD700',
    display: 'inline-block',
    whiteSpace: 'nowrap',
  },
  timelineIconWrapper: {
    position: 'relative',
    flexShrink: 0,
    transition: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  timelineIconRing: {
    position: 'absolute',
    width: 'clamp(80px, 15vw, 100px)',
    height: 'clamp(80px, 15vw, 100px)',
    borderRadius: '50%',
    border: '3px solid #00FF66',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animation: 'timeline-rotate 10s linear infinite',
    opacity: 0.5,
  },
  timelineIcon: {
    width: 'clamp(60px, 12vw, 80px)',
    height: 'clamp(60px, 12vw, 80px)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative',
    zIndex: 3,
    border: '4px solid #141924',
    transition: 'all 0.4s ease',
  },
  icon: {
    fontSize: 'clamp(28px, 6vw, 36px)',
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
  },
  timelineContent: {
    background: 'linear-gradient(135deg, #141924 0%, #1a1f2e 100%)',
    padding: 'clamp(20px, 5vw, 35px)',
    borderRadius: '20px',
    flex: '1',
    position: 'relative',
    border: '2px solid #1f2937',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden',
    width: '100%',
  },
  contentGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(135deg, #00FF6610, transparent)',
    pointerEvents: 'none',
  },
  yearContainer: {
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    marginBottom: '15px',
    flexWrap: 'wrap',
  },
  yearBadge: {
    display: 'inline-block',
    padding: 'clamp(6px, 2vw, 8px) clamp(14px, 4vw, 20px)',
    borderRadius: '25px',
    background: 'linear-gradient(135deg, #00FF66, #00994D)',
    border: '2px solid #00FF66',
    boxShadow: '0 0 15px #00FF6640',
  },
  yearText: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '800',
    color: '#000',
    letterSpacing: '1px',
  },
  dateBadge: {
    padding: '6px 14px',
    borderRadius: '15px',
    backgroundColor: '#1f2937',
    color: '#00FF66',
    fontSize: 'clamp(11px, 2.5vw, 13px)',
    fontWeight: '600',
    border: '1px solid #374151',
  },
  eventTitle: {
    fontSize: 'clamp(20px, 4.5vw, 26px)',
    fontWeight: '700',
    color: '#FFFFFF',
    margin: '0 0 12px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  institution: {
    fontSize: 'clamp(14px, 3vw, 16px)',
    color: '#00FF66',
    margin: '0 0 15px 0',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    flexWrap: 'wrap',
  },
  institutionIcon: {
    fontSize: '14px',
  },
  description: {
    fontSize: 'clamp(14px, 3vw, 15px)',
    color: '#CBD5E1',
    lineHeight: '1.8',
    margin: '0 0 20px 0',
  },
  categoryTag: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '15px',
    fontSize: 'clamp(10px, 2vw, 11px)',
    fontWeight: '700',
    color: '#00FF66',
    letterSpacing: '1px',
    border: '1px solid #00FF6640',
  },
  accentCorner: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 'clamp(30px, 6vw, 40px)',
    height: 'clamp(30px, 6vw, 40px)',
    borderTop: '4px solid',
    borderRight: '4px solid',
    borderRadius: '0 20px 0 0',
  },
  footer: {
    textAlign: 'center',
    marginTop: '100px',
    position: 'relative',
    zIndex: 2,
  },
  footerLine: {
    width: 'clamp(150px, 40vw, 200px)',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00FF66, transparent)',
    margin: '0 auto 20px',
  },
  footerText: {
    color: '#00FF66',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: '500',
    padding: '0 20px',
  },
};

export default Timeline;