import Section from "../../../components/Section";
import { data } from "./data";

function Profile() {
  return (
    <Section title="Profil">
      <div className="space-y-1.5 py-4 text-xs leading-relaxed text-gray-700">
        {data.map((profile, index) => (
          <p key={index} className="text-justify hyphens-auto">
            {profile}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Profile;
