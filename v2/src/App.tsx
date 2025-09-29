import Identity from "./features/identity/Identity";
import Profile from "./features/profile/Profile";
import SkillList from "./features/skill-list/SkillList";
import LinkList from "./features/link-list/LinkList";
import ExperienceList from "./features/experience-list/ExperienceList";
import CertificationList from "./features/certification-list/CertificationList";
import EducationList from "./features/education-list/EducationList";

import { cvData } from "./data/cvData";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      {/* Container A4 - 210mm x 297mm */}
      <div className="w-[210mm] h-[297mm] bg-white mx-auto flex flex-col print:w-[210mm] print:h-[297mm] print:mx-0 print:shadow-none shadow-lg">
        
        {/* Header - 60mm */}
        <header className="h-[60mm] flex items-center px-8 py-6 border-b border-gray-200 flex-shrink-0 print:h-[60mm]">
          <Identity {...cvData.identity} />
        </header>

        {/* Main Content - 237mm */}
        <section className="h-[237mm] flex flex-1 print:h-[237mm]">
          
          {/* Left Column - 87.5mm */}
          <div className="w-[87.5mm] flex flex-col pr-6 pl-4 border-r border-gray-200 print:w-[87.5mm]">
            {/* Profile - 79mm */}
            <div className="h-[79mm] flex-shrink-0 print:h-[79mm]">
              <Profile {...cvData.profile} />
            </div>
            
            {/* Skills - 119mm */}
            <div className="h-[119mm] flex-shrink-0 print:h-[119mm]">
              <SkillList {...cvData.skillList} />
            </div>
            
            {/* Links - 39mm */}
            <div className="h-[39mm] flex-shrink-0 print:h-[39mm]">
              <LinkList {...cvData.linkList} />
            </div>
          </div>

          {/* Right Column - 122.5mm */}
          <div className="w-[122.5mm] flex flex-col pl-6 pr-4 print:w-[122.5mm]">
            {/* Experience - 138mm */}
            <div className="h-[138mm] flex-shrink-0 print:h-[138mm]">
              <ExperienceList {...cvData.experienceList} />
            </div>
            
            {/* Certifications - 59mm */}
            <div className="h-[59mm] flex-shrink-0 print:h-[59mm]">
              <CertificationList {...cvData.certificationList} />
            </div>
            
            {/* Education - 40mm */}
            <div className="h-[40mm] flex-shrink-0 print:h-[40mm]">
              <EducationList {...cvData.educationList} />
            </div>
          </div>
        </section>

        {/* Bouton d'impression */}
        <div className="print:hidden fixed top-4 right-4 z-50">
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