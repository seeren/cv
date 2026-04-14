import Section from "../../components/Section";

type ProfileProps = {
  profile: string[];
};

function Profile({ profile }: ProfileProps) {
  return (
    <Section title="Profil">
      <div className="space-y-1.5 py-4 text-xs leading-relaxed text-gray-700">
        {profile.map((paragraph, index) => (
          <p key={index} className="text-justify hyphens-auto">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}

export default Profile;
