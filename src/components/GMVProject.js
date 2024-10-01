import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './GMVProject.css';
export default function GMVProject() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight
      const progress = (scrollPosition / documentHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const accordionItems = [
    {
      title: 'C Implementation Details',
      content: 'The cryptographic module was implemented entirely in C to ensure optimal performance and compatibility with embedded systems. We utilized advanced C features such as inline assembly for critical operations, bit-field structures for efficient memory usage, and carefully managed dynamic memory allocation to prevent fragmentation. The codebase adheres to the MISRA C:2012 guidelines to ensure reliability and portability across different platforms.'
    },
    {
      title: 'Cryptographic Algorithms',
      content: 'Our module implements a suite of NIST-approved cryptographic algorithms, including AES-256 for symmetric encryption, SHA-256 for hashing, and ECDSA with the P-256 curve for digital signatures. We also developed a custom implementation of the Merkle-Damgård construction for the OSNMA-specific Tree Authentication scheme. All implementations were optimized for speed and memory efficiency, crucial for satellite systems.'
    },
    {
      title: 'Performance Optimizations',
      content: 'To meet the strict performance requirements of satellite systems, we employed various optimization techniques. These include loop unrolling, lookup tables for AES S-box operations, and bitsliced implementations for parallel processing. We also utilized SIMD instructions where available to accelerate vector operations. Extensive profiling and benchmarking were performed to identify and optimize critical paths in the code.'
    },
    {
      title: 'Security Measures',
      content: 'Security was paramount in our implementation. We incorporated constant-time algorithms to mitigate timing side-channel attacks, implemented secure key management with zeroization procedures, and used hardware-backed random number generation when available. The module also includes runtime integrity checks and employs defensive programming techniques to handle error conditions securely.'
    },
    {
      title: 'Testing and Validation',
      content: 'Our testing suite included unit tests for individual functions, integration tests for module interactions, and system tests simulating real-world scenarios. We used fuzz testing to identify edge cases and potential vulnerabilities. The module was validated against NIST\'s Cryptographic Algorithm Validation Program (CAVP) test vectors to ensure compliance with federal standards. Additionally, we conducted formal verification of critical components using tools like Frama-C to prove the absence of runtime errors and certain security properties.'
    }
  ]

  const timelineItems = [
    { year: '2019', event: 'Project Initiation and Requirements Gathering' },
    { year: '2020', event: 'Algorithm Design and Initial C Implementation' },
    { year: '2021', event: 'Optimization and Security Hardening' },
    { year: '2022', event: 'NIST Certification Process and Testing' },
    { year: '2023', event: 'Final Integration and Deployment to Galileo Satellites' }
  ]

  const openModal = (content) => {
    setModalContent(content)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className="gmv-project">
      

      <div className="gmv-project__scroll-progress">
        <motion.div 
          className="gmv-project__scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="gmv-project__main">
        <section className="gmv-project__hero">
          <div className="gmv-project__container gmv-project__hero-content">
            <motion.h2 
              className="gmv-project__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              GMV Project: Cryptographic Module for OSNMA Galileo
            </motion.h2>
            <motion.p 
              className="gmv-project__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Developing a NIST-certified cryptographic module in C for the Open Service Navigation Message Authentication (OSNMA) in Galileo satellites
            </motion.p>
            <motion.div 
              className="gmv-project__button-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="https://www.gmv.com/en-es/products-and-services/space/satellite-navigation" target="_blank" rel="noopener noreferrer" className="gmv-project__button">
                Learn More about GMV
              </a>
              <a href="https://www.gsc-europa.eu/sites/default/files/sites/all/files/OSNMA_User_ICD_v1.1.pdf" target="_blank" rel="noopener noreferrer" className="gmv-project__button gmv-project__button--secondary">
                OSNMA Specification
              </a>
            </motion.div>
          </div>
        </section>

        <section className="gmv-project__about">
          <div className="gmv-project__container">
            <div className="gmv-project__about-content">
              <motion.h3 
                className="gmv-project__section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                About the Project
              </motion.h3>
              <motion.p 
                className="gmv-project__text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                The GMV project focused on developing a critical cryptographic module for the Open Service Navigation Message Authentication (OSNMA) in Galileo satellites. This module plays a crucial role in ensuring the security and authenticity of navigation messages transmitted by the Galileo constellation.
              </motion.p>
              <motion.p 
                className="gmv-project__text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Developed entirely in C, the primary objective was to create a certified module that meets the stringent standards set by the National Institute of Standards and Technology (NIST). This certification is vital for ensuring the module's reliability and security in the context of satellite navigation systems.
              </motion.p>
              <motion.p 
                className="gmv-project__text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                The C implementation allowed us to achieve the necessary performance optimizations and low-level control required for satellite systems. We leveraged advanced C features and employed various techniques to ensure both security and efficiency in the resource-constrained environment of space-based systems.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="gmv-project__technical">
          <div className="gmv-project__container gmv-project__technical-content">
            <motion.h3 
              className="gmv-project__section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Technical Breakdown
            </motion.h3>
            <div className="gmv-project__accordion">
              {accordionItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="gmv-project__accordion-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    className="gmv-project__accordion-button"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <span className={`gmv-project__accordion-icon ${activeIndex === index ? 'active' : ''}`}>▼</span>
                  </button>
                  <div className={`gmv-project__accordion-content ${activeIndex === index ? 'active' : ''}`}>
                    <p className="gmv-project__text">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="gmv-project__timeline">
          <div className="gmv-project__container">
            <motion.h3 
              className="gmv-project__section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Project Timeline
            </motion.h3>
            <div className="gmv-project__timeline-container">
              {timelineItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="gmv-project__timeline-item"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="gmv-project__timeline-year">{item.year}</div>
                  <div className="gmv-project__timeline-event">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="gmv-project__challenges">
          <div className="gmv-project__container">
            <motion.h3 
              className="gmv-project__section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Challenges and Solutions
            </motion.h3>
            <motion.ul 
              className="gmv-project__challenges-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <li className="gmv-project__challenges-item">
                <h4 className="gmv-project__challenges-title">Resource Constraints</h4>
                <p className="gmv-project__text">Solution: Implemented memory-efficient data structures and algorithms, utilized stack allocation where possible, and optimized code for minimal CPU usage.</p>
                <button className="gmv-project__learn-more" onClick={() => openModal('Our resource optimization techniques included custom memory allocators, bit-packing for data structures, and aggressive inlining of critical functions. We also employed loop unrolling and lookup tables to reduce instruction count and improve cache utilization.')}>Learn More</button>
              </li>
              <li className="gmv-project__challenges-item">
                <h4 className="gmv-project__challenges-title">Radiation Hardening</h4>
                <p className="gmv-project__text">Solution: Employed redundancy techniques, error-correcting codes, and watchdog timers to mitigate the effects of single event upsets (SEUs) in the space environment.</p>
                <button className="gmv-project__learn-more" onClick={() => openModal('Our radiation hardening approach included triple modular redundancy for critical computations, Hamming codes for error detection and correction in memory, and periodic integrity checks of the executable code and data segments.')}>Learn More</button>
              </li>
              <li className="gmv-project__challenges-item">
                <h4 className="gmv-project__challenges-title">Strict Timing Requirements</h4>
                <p className="gmv-project__text">Solution: Developed a real-time scheduler and used interrupt-driven programming to ensure cryptographic operations meet the tight timing constraints of satellite communications.</p>
                <button className="gmv-project__learn-more" onClick={() => openModal('We implemented a custom real-time operating system (RTOS) kernel with a fixed-priority preemptive scheduler. Critical sections were carefully managed to minimize interrupt latency, and we used hardware timers for precise timing control.')}>Learn More</button>
              </li>
              <li className="gmv-project__challenges-item">
                <h4 className="gmv-project__challenges-title">NIST Certification Complexity</h4>
                <p className="gmv-project__text">Solution: Implemented a rigorous documentation process, conducted thorough code reviews, and performed extensive testing to meet FIPS 140-2 requirements.</p>
                <button className="gmv-project__learn-more" onClick={() => openModal('Our NIST certification process involved creating detailed design documents, implementing a comprehensive test suite with 100% code coverage, and undergoing multiple rounds of independent security audits. We also developed a custom static analysis tool to ensure compliance with MISRA C guidelines.')}>Learn More</button>
              </li>
            </motion.ul>
          </div>
        </section>
      </main>

      <footer className="gmv-project__footer">
        <div className="gmv-project__container">
          <motion.h3 
            className="gmv-project__footer-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Interested in satellite navigation security or cryptographic solutions for space systems?
          </motion.h3>
          <motion.div 
            className="gmv-project__button-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="/projects" className="gmv-project__button">Explore More Projects</a>
            <a href="/contact" className="gmv-project__button gmv-project__button--secondary">Contact Us</a>
          </motion.div>
        </div>
      </footer>

      {showModal && (
        <div className="gmv-project__modal-overlay" onClick={closeModal}>
          <div className="gmv-project__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gmv-project__modal-close" onClick={closeModal}>×</button>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  )
}