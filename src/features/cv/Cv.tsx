import { Identity, Achievements, Skills, Certifications, Profile, Experiences, Educations } from "./";
import A4 from "../../components/A4";
import ButtonPrint from "../../components/ButtonPrint";

function Cv() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity />
        <main className="flex flex-1 py-6">
          <section className="flex flex-col border-r-2 border-blue-dark w-2/5 pr-6">
            <Achievements />
            <Skills />
            <Certifications />
          </section>
          <section className="flex flex-col w-3/5 pl-6">
            <Profile />
            <Experiences />
            <Educations />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default Cv;