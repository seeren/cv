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
import { executiveData } from "./data/executive";
import { deliveryData } from "./data/delivery";
import { productData } from "./data/product";
import { useCvProfileDataKey } from "../../hooks/useCvProfileDataKey";

const dataByProfile = {
  default: defaultData,
  executive: executiveData,
  delivery: deliveryData,
  product: productData,
};

function OneColumn() {
  const profileDataKey = useCvProfileDataKey();
  const selectedData = dataByProfile[profileDataKey];

  return (
    <div className="min-h-screen bg-gray-50 p-4 print:h-auto print:p-0 print:bg-white">
      <A4>
        <Identity identity={selectedData.identity} />
        <main className="flex flex-1 py-6">
          <section className="flex w-full flex-col">
            <Profile profile={selectedData.profile} />
            <Achievements achievements={selectedData.achievements} />
            <Experiences experiences={selectedData.experiences} />
            <Skills skills={selectedData.skills} />
            <Certifications certifications={selectedData.certifications} />
            <Educations educations={selectedData.educations} />
          </section>
        </main>
      </A4>
      <ButtonPrint />
    </div>
  );
}

export default OneColumn;
