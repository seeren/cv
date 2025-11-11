import Section from "../../../components/Section";
import { data } from './data';


function Skills() {
  return (
    <Section title="Compétences">
      <ul className="space-y-1 py-4">
        {data.map((skill, index) => (
          <li key={index} className="flex text-gray-700 flex-col space-y-1">
            <span className="text-md hyphens-auto flex leading-tight">{skill.title}</span>
            {skill.description && (
              <span className="text-xs text-gray-500">{skill.description}</span>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
