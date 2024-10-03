"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, ChevronDown, ChevronUp } from 'lucide-react';
import './LanguageSkills.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  { name: 'Spanish', level: 'Native', proficiency: 100, flagClass: 'fi fi-es' },
  { name: 'English', level: 'Advanced', proficiency: 90, flagClass: 'fi fi-gb' },
  { name: 'Italian', level: 'Intermediate', proficiency: 70, flagClass: 'fi fi-it' },
  { name: 'French', level: 'Basic', proficiency: 40, flagClass: 'fi fi-fr' },
];

export default function LanguageSkills() {
  const [expandedLanguage, setExpandedLanguage] = useState(null);

  const toggleExpand = (index) => {
    setExpandedLanguage(expandedLanguage === index ? null : index);
  };

  return (
    <div className="ls-language-skills-container">
      <motion.h2 
        className="ls-language-skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Globe className="ls-title-icon" /> Language Skills
      </motion.h2>
      <div className="ls-language-skills-wrapper">
        {languages.map((language, index) => (
          <motion.div 
            className="ls-language-skill" 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className={`ls-language-bar ${expandedLanguage === index ? 'ls-expanded' : ''}`} 
              style={{ width: `${language.proficiency}%` }}
              onClick={() => toggleExpand(index)}
            >
              <div className="ls-language-info">
                <span className={`${language.flagClass} ls-language-flag`}></span>
                <span className="ls-language-name">{language.name}</span>
                <span className="ls-language-level">{language.level}</span>
              </div>
              {expandedLanguage === index ? (
                <ChevronUp className="ls-expand-icon" />
              ) : (
                <ChevronDown className="ls-expand-icon" />
              )}
            </div>
            {expandedLanguage === index && (
              <motion.div 
                className="ls-language-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>Proficiency: {language.proficiency}%</p>
                <div className="ls-proficiency-bar">
                  <motion.div 
                    className="ls-proficiency-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${language.proficiency}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}