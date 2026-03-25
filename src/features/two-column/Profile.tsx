import Section from "../../components/Section";

type ProfileProps = {
  data: string[];
};

function Profile({ data }: ProfileProps) {
  return (
    <Section title="Profil">
      <div className="space-y-1.5 py-4 text-xs text-gray-700 leading-relaxed">
        {data.map((profile, index) => (
          <p key={index} className="hyphens-auto text-justify">
            {profile}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Profile;
