import Section from "../../../components/Section";
import { data } from "./data";

function Achievements() {
  return (
    <Section title="Réalisations">
      <ul className="space-y-2.5 py-4">
        {data.map((achievement, index) => (
          <li key={index} className="flex space-x-3">
            <achievement.icon className="mt-0.5 h-4 w-4 shrink-0 text-blue-dark" />
            <div className="space-y-0.5 text-gray-700">
              <h3 className="text-xs font-medium leading-tight text-gray-800 hyphens-auto">
                {achievement.title}
              </h3>
              <p className="text-xs leading-snug text-justify text-gray-700 hyphens-auto">
                {achievement.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Achievements;
