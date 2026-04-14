import A4 from "../../components/A4";
import ButtonPrint from "../../components/ButtonPrint";
import Identity from "./Identity";
import Profile from "./Profile";
import DetailedExperiences from "./DetailedExperiences";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Educations from "./Educations";
import { defaultData } from "./data/default";

function Detailled() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4 multiple>
        <Identity identity={defaultData.identity} />
        <main className="flex flex-1 py-6">

          <section className="flex flex-col">
            <Profile profile={defaultData.profile} />
            <div className="border-b-2 border-blue-dark mt-4 mb-6" />
            <DetailedExperiences experiences={defaultData.experiences} />
            <div className="border-b-2 border-blue-dark mt-4 mb-6" />
            <Skills skills={defaultData.skills} />
            <div className="border-b-2 border-blue-dark mt-4 mb-6" />
            <Certifications certifications={defaultData.certifications} />
            <div className="border-b-2 border-blue-dark mt-4 mb-6" />
            <Educations educations={defaultData.educations} />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default Detailled;