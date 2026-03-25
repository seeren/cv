import Section from "../../components/Section";

type ProfileProps = {
  data: string[];
};

function Profile({ data }: ProfileProps) {
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
