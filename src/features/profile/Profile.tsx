import Section from '../../components/Section';
import { data } from './data';


function Profile() {
  return (
    <Section title="Réalisations">
      <div className="space-y-1 py-4 text-xs text-gray-700">
        {data.map((profile, index) => (
          <p key={index}>
            {profile}
          </p>
        ))}
      </div>
    </Section>
  );
};

export default Profile;
