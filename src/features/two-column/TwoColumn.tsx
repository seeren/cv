import Identity from "./Identity";
import Achievements from "./Achievements";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Profile from "./Profile";
import Experiences from "./Experiences";
import Educations from "./Educations";
import A4 from "../../components/A4";
import ButtonPrint from "../../components/ButtonPrint";
import { defaultData } from "./data/default";

function TwoColumn() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity data={defaultData.identity} />
        <main className="flex flex-1 py-6">
          <section className="flex flex-col border-r-2 border-blue-dark w-2/5 pr-6">
            <Achievements data={defaultData.achievements} />
            <Skills data={defaultData.skills} />
            <Certifications data={defaultData.certifications} />
          </section>
          <section className="flex flex-col w-3/5 pl-6">
            <Profile data={defaultData.profile} />
            <Experiences data={defaultData.experiences} />
            <Educations data={defaultData.educations} />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default TwoColumn;