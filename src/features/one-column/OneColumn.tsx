import Identity from "./Identity";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Profile from "./Profile";
import Experiences from "./Experiences";
import Educations from "./Educations";
import A4 from "../../components/A4";
import ButtonPrint from "../../components/ButtonPrint";
import { executiveData } from "./data/executive";
import { useCvDocumentMeta } from "../../hooks/useCvDocumentMeta";

function OneColumn() {
  useCvDocumentMeta();

  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity identity={executiveData.identity} />
        <main className="flex flex-1">
          <section className="flex w-full flex-col">
            <Profile profile={executiveData.profile} />
            <Experiences experiences={executiveData.experiences} />
            <Skills skills={executiveData.skills} />
            <Certifications certifications={executiveData.certifications} />
            <Educations educations={executiveData.educations} />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default OneColumn;
