import { Identity, Profile } from "../cv";
import A4 from "../../components/A4";
import ButtonPrint from "../../components/ButtonPrint";
import DetailedExperiences from "./experiences/DetailedExperiences";

function Detail() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4 multiple>
        <Identity />
        <main className="flex flex-1 py-6">

          <section className="flex flex-col">
            <Profile />
            <div className="border-b-2 border-blue-dark mt-4 mb-6" />
            <DetailedExperiences />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default Detail;