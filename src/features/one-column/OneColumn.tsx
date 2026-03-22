import {
  Identity,
  Achievements,
  Skills,
  Certifications,
  Profile,
  Experiences,
  Educations,
} from "./index";
import A4 from "../../components/A4";
import ButtonPrint from "../../components/ButtonPrint";

function OneColumn() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity />
        <main className="flex flex-1 py-6">
          <section className="flex w-full flex-col">
            <Profile />
            <Achievements />
            <Experiences />
            <Skills />
            <Certifications />
            <Educations />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default OneColumn;
