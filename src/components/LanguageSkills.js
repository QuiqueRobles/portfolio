import React from 'react';
import './LanguageSkills.css';
import "/node_modules/flag-icons/css/flag-icons.min.css";  // Importa flag-icons

function LanguageSkills() {
  const languages = [
    { name: 'Spanish', level: 'Native', proficiency: 100, flagClass: 'fi fi-es' },
    { name: 'English', level: 'Advanced', proficiency: 90, flagClass: 'fi fi-gb' },
    { name: 'Italian', level: 'Intermediate', proficiency: 70, flagClass: 'fi fi-it' },
    { name: 'French', level: 'Basic', proficiency: 40, flagClass: 'fi fi-fr' },
  ];

  return (
    <div className="language-skills-container">
      <h2 className="language-skills-title">
        <i className="fas fa-language"></i> Language Skills
      </h2>
      <div className="language-skills-wrapper">
        {languages.map((language, index) => (
          <div className="language-skill" key={index}>
            <div className="language-bar" style={{ width: `${language.proficiency}%` }}>
              <div className="language-info">
                <span className={`${language.flagClass} language-flag`}></span>
                <span className="language-name">{language.name}</span>
                <span className="language-level">{language.level}</span>
              </div>
            </div>
            <div className="language-tooltip">
              <p>{language.name} - {language.level}</p>
              <p>Proficiency: {language.proficiency}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageSkills;
