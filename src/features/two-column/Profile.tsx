import Section from "../../components/Section";

type ProfileProps = {
  profile: string[];
};

function Profile({ profile }: ProfileProps) {
  return (
    <Section title="Profil">
      <div className="space-y-1.5 py-4 text-xs text-gray-700 leading-relaxed">
        {profile.map((paragraph, index) => (
          <p key={index} className="hyphens-auto text-justify">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Profile;
