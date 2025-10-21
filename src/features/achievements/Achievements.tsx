import Section from '../../components/Section';
import { data } from './data';


function Achievements() {
  return (
    <Section title="Réalisations">
      <ul className="space-y-3 py-4">
        {data.map((achievement, index) => (
          <li key={index} className="flex space-x-4">
            <achievement.icon className="w-4 h-4 shrink-0 mt-1 text-blue-dark" />
            <div className="text-gray-700 space-y-1">
              <h3 className="text-md hyphens-auto flex leading-tight">
                {achievement.title}
              </h3>
              <p className="text-xs hyphens-auto">
                {achievement.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Achievements;
