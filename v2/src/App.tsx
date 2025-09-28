import React from 'react';
import './App.css';
import './print.css';

// Import des composants
import Identity from './features/identity/Identity';
import Profile from './features/profile/Profile';
import SkillList from './features/skill-list/SkillList';
import LinkList from './features/link-list/LinkList';
import ExperienceList from './features/experience-list/ExperienceList';
import CertificationList from './features/certification-list/CertificationList';
import EducationList from './features/education-list/EducationList';

// Import des données
import { cvData } from './data/cvData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0">
      <div className="cv-container flex flex-col">
        
        {/* Header - Identity */}
        <header className="cv-header flex items-center px-8 py-6 border-b border-gray-200">
          <Identity {...cvData.identity} />
        </header>
        
        {/* Main Content */}
        <section className="cv-main flex flex-1">
          
          {/* Left Column - Profile, Skills, Links */}
          <div className="cv-left flex flex-col pr-6 pl-4 border-r border-gray-200">
            <div className="cv-profile flex-shrink-0">
              <Profile {...cvData.profile} />
            </div>
            <div className="cv-skills flex-shrink-0">
              <SkillList {...cvData.skillList} />
            </div>
            <div className="cv-links flex-shrink-0">
              <LinkList {...cvData.linkList} />
            </div>
          </div>

          {/* Right Column - Experience, Certifications, Education */}
          <div className="cv-right flex flex-col pl-6 pr-4">
            <div className="cv-experience flex-shrink-0">
              <ExperienceList {...cvData.experienceList} />
            </div>
            <div className="cv-certifications flex-shrink-0">
              <CertificationList {...cvData.certificationList} />
            </div>
            <div className="cv-education flex-shrink-0">
              <EducationList {...cvData.educationList} />
            </div>
          </div>
        </section>
        
        {/* Bouton d'impression */}
        <div className="no-print fixed top-4 right-4 z-50">
          <button 
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors"
          >
            🖨️ Imprimer CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
