import Identity from "./features/identity/Identity";
import Profile from "./features/profile/Profile";
import SkillList from "./features/skill-list/SkillList";
import LinkList from "./features/link-list/LinkList";
import ExperienceList from "./features/experience-list/ExperienceList";
import CertificationList from "./features/certification-list/CertificationList";
import EducationList from "./features/education-list/EducationList";
import { cvData } from "./data/cvData";
import A4 from "./components/a4";
import ButtonPrint from "./components/ButtonPrint";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity {...cvData.identity} />
        <section className="flex flex-1 py-6">
          <div className="flex flex-col border-r-2 border-blue-dark w-2/5 pr-6">
            <Profile {...cvData.profile} />
            <SkillList {...cvData.skillList} />
            <LinkList {...cvData.linkList} />
          </div>
          <div className=" flex flex-col w-3/5 pl-6">
            <ExperienceList {...cvData.experienceList} />
            <CertificationList {...cvData.certificationList} />
            <EducationList {...cvData.educationList} />
          </div>
        </section>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default App;