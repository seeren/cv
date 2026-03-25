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

function OneColumn() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity data={defaultData.identity} />
        <main className="flex flex-1 py-6">
          <section className="flex w-full flex-col">
            <Profile data={defaultData.profile} />
            <Achievements data={defaultData.achievements} />
            <Experiences data={defaultData.experiences} />
            <Skills data={defaultData.skills} />
            <Certifications data={defaultData.certifications} />
            <Educations data={defaultData.educations} />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default OneColumn;
